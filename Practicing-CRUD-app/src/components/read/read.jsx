import axios from "axios"
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/navbar";

export default function Read(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`https://62cd7067066bd2b69925e5e8.mockapi.io/crud`)
        .then((res)=>{ setData(res.data)})
    },[])
   

    return (
        <div>
            <div><Navbar/></div>
            <div style={{width:"35%",margin:"auto"}}>
                <div><h2>List Of Persons</h2></div>
                <ul>
                    {data.map((item)=>(<li key={item.id}>{item.firstName} {item.lastName}</li>))}
                </ul>
            </div>
        </div>
    )
}