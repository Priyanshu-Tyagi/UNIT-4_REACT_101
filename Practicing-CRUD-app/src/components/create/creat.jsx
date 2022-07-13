import { useState } from "react"
import axios from "axios"
import "./create.css"
import Navbar from "../Navbar/navbar";

export default function Create(){
const [firstName,setFirstName] = useState("");
const [lastName,setLastName] = useState("");
console.log(firstName,lastName);

    
function onSubmit(e){
    e.preventDefault();
    axios.post(`https://62cd7067066bd2b69925e5e8.mockapi.io/crud`,
    {firstName,lastName})
}

    return (
        <div>
            <div><Navbar/></div>
            <div style={{width:"35%",margin:"auto"}}>
                <div>
                    <h3>CRUD APP</h3>
                </div>
                <form className="Form" onSubmit={onSubmit}>
                    <label>First Name</label>
                    <input name="firstName" onChange={(e)=>setFirstName(e.target.value)} type={"text"}/>
                    <label>Last Name</label>
                    <input name="lastName" onChange={(z)=>setLastName(z.target.value)} type={"text"}/>
                    <br/>
                    <input type={"submit"}/>
                </form>
            </div>
        </div>
    )
}