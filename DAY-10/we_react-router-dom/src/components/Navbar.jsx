import { NavLink } from "react-router-dom"

const links = [
    {
        to:"/",
        title:"Home"
    },
    {
        to:"/about",
        title:"About"
    },
    {
        to:"/user",
        title:"User"
    },
    {
        to:"/contact",
        title:"Contact Us"
    }
]

const baseStyle = {
    color: "black",
    textDecoration: "none"
  };
  
  const activeStyle = {
    color: "red",
    textDecoration: "none"
  };

export default function Navbar(){
    return (
        <div style={{display:"flex" , gap:"2rem", justifyContent:"center"}}>
            {links.map((item)=>(
                <NavLink style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
                to={item.to}
                key={item.to}>
                    {item.title}
                </NavLink>
            ))}
        </div>
    )
}