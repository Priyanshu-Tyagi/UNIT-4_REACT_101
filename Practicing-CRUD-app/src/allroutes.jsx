import { Route, Routes } from "react-router-dom";
import Create from "./components/create/creat";
import Read from "./components/read/read";
import Update from "./components/Update/Update";

export default function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Create/>}/>
            <Route path="/read" element={<Read/>}/>
            <Route path="/update" element={<Update/>}/>
        </Routes>
    )
}