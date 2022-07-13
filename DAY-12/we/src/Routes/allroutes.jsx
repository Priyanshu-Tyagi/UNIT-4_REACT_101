import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import User from "./User";
import UserPage from "./UserPage";

export default function AllRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/user/:user_id" element={<UserPage/>}/>
    </Routes>
    )
}