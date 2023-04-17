import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import TableViewIcon from '@mui/icons-material/TableView';
import { NavLink } from 'react-router-dom';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

const Sidebar = ({children}) => {
 const auth=localStorage.getItem('user')
 const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
  }
  const logout1=()=>{
    navigate("/petty-login")
  }
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        // {
        //     path:"/about",
        //     name:"About",
        //     icon:<FaUserAlt/>
        // },
        // {
        //     path:"/analytics",
        //     name:"Analytics",
        //     icon:<FaRegChartBar/>
        // },
        {
            path:"/transaction",
            name:"Transaction",
            icon:<TableViewIcon/>
        },
        {
            path:"/add-trans",
            name:"Add Receipt",
            icon:<NoteAddIcon/>
        }
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="side-bar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                   {/* <img style={{display: isOpen ? "block" : "none"}} className="logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconsdb.com%2Fpink-icons%2Fmoney-bag-icon.html&psig=AOvVaw26f1GEo2PHuWvGuE5hAFRW&ust=1680073214131000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjF7smG_v0CFQAAAAAdAAAAABAF"/> */}
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
               
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
