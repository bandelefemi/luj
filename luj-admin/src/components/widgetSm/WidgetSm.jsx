import { useEffect } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {

  const [users, setUsers] = useState({})

  useEffect(()=> {
    const getUsers = async()=>{
      try{
        const res = await userRequest('/users')
        setUsers(res.data)
      }catch{}
    }
    getUsers()
  })
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      {users.length > 0 && users?.map(user => (

        <ul key={user._id} className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={users.img || "/no-avi.jpg"}
            alt=""
            className="widgetSmImg"
            />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.fullName}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        
      </ul>
    ))}
    </div>
  );
}
