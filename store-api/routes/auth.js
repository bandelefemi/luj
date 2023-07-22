const Users = require("../models/Users")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
const router = require("express").Router()

//Register user
router.post("/register", async (req,res) => {
    const newUser = new Users({
        fullName: req.body.fullName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),

    })

    try {
        const savedUser = await newUser.save()
        res.status(201).json(savedUser)

    } catch (err) {
        res.status(500).json(err)
    }
})

// LOGIN USER

router.post("/login", async (req, res) => {
    try {
        const user = await Users.findOne({email: req.body.email})
        
        const hashedPass = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC)
        
        const OriginalPassword = hashedPass.toString(CryptoJS.enc.Utf8)

        OriginalPassword !== req.body.password && res.status(401).json("wrong details")

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin 
        }, 
        process.env.JWT_SEC,
        {expiresIn: "5d"}
        )

        const {password, ...others} = user._doc

        res.status(200).json({...others, accessToken})
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router