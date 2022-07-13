import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function User(){
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch(`https://reqres.in/api/users`)
        .then((res)=>res.json())
        .then((res)=>{
            setData(res.data)
        });
    },[]);

    return (
        <div>
            <h2>User</h2>
            {data.map((u)=>(
                <div key={u.id}>
                    <h3>{u.first_name}</h3>
                    <img src={u.avatar} alt={u.first_name} />
                    <div>
                        <Link to={`/user/${u.id}`}>Show more Details</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}