const Products = require("../models/Product")
const CryptoJS = require("crypto-js")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

const router = require("express").Router()

// CREATE PRODUCT
router.post("/", verifyTokenAndAdmin, async (req,res)=> {
    const newProduct = new Products(req.body)

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

// UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req,res) => {
        try {
        const updatedProduct = await Products.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{
            new: true
        })
        res.status(200).json(updatedProduct)
    } catch(err){
        res.status(500).json(err);
    };
}
    

     )

// DELETE 
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {

    try {
        await Products.findByIdAndDelete(req.params.id)

        res.status(200).json("Product has been removed!")
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET PRODUCTS
router.get("/find/:id", async (req, res) => {
    
    try {
        const products = await Products.findById(req.params.id)

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET ALL PRODUCTS
router.get("/", async (req, res) => {
    
    const qNew = req.query.new
    const qCat = req.query.category
    try {

        let products;

        if(qNew) {
            products = await Products.find().sort({createdAt: -1}).limit(5)
        
        } else if(qCat) {
            products = await Products.find({category: {
                $in: [qCat]
            }
        })

        } else {
            products = await Products.find()

        }
        
        // const products = query? await Products.find().sort({_id: -1}).limit(2) : await Products.find()


        res.status(200).json(products)
    } catch (err) {
        res.status(500).json(err)
    }
})


// GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req,res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1))

    try {
        const data = await Products.aggregate([
            { $match: { createdAt: {$gte: lastYear}}},
            {
                $project: {
                    month: { $month: "$createdAt"},
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ])
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router