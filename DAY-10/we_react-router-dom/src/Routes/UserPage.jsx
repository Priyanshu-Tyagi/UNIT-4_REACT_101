import { useEffect } from "react";
import { useState } from "react"
import { useParams, Link } from "react-router-dom";

export default function UserPage(){

    const [data,setData] = useState({});
    const param = useParams();

    useEffect(()=>{
        fetch(`https://reqres.in/api/users/${param.user_id}`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.data);
        })
    },[])

    return (
        <div>
            <h2>User</h2>
            <div key={data.id}>
                <h3>{data.first_name}</h3>
                <img src={data.avatar} alt={data.first_name} />
                <div>
                    <Link to={`/user`}>Users</Link>
                </div>
            </div>
        </div>
    )
}