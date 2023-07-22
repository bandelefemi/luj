import "./featuredInfo.css";
// import { ArrowDownward, ArrowUpward } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { CircularProgress} from '@mui/material'

export default function FeaturedInfo() {

  const [income, setIncome] = useState([])
  const [perc, setPerc] = useState(0)

  useEffect(()=> {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("order/income")
        setIncome(res.data)
        setPerc(res.data[1]?.total * 100 / res.data[0]?.total - 100)
      } catch (error) {
        
      }
    }
    getIncome()
  }, [])

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">&#8358;{income[0]?.total || (<CircularProgress disableShrink />)}</span>
          <span className="featuredMoneyRate">
            {perc || 'N/A'} <ArrowUpwardIcon  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpwardIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
