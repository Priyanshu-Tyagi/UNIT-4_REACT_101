import { NavLink } from "react-router-dom";

const links = [
    {
        to:"/",
        title:"Create"
    },
    {
        to:"/read",
        title:"List"
    }
]

const baseStyle={
    color:"black",
    textDecoration:"none"
}
const activeStyhle={
    color:"red",
    textDecoration:"none"
}

export default function Navbar(){
    return (
        <div style={{display:"flex" , gap:"2rem", justifyContent:"center"}}>
            {links.map((item)=>(
                <NavLink style={({isActive})=>(isActive?activeStyhle:baseStyle)} to={item.to} key={item.to}>{item.title}</NavLink>
            ))}
        </div>
    )
}