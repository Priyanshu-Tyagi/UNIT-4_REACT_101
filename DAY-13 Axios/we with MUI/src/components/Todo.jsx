import { useEffect } from "react";
import { useState } from "react";
import AddTodo from "./AddTodo";
import { Add, Read } from "./axios";
import Todoitem from "./todoitem";
// import {IconDeleteButtons,LabelUpdateButton,LabelAddButton} from "./MUI/Button"
// import BasicTable from "./MUI/Table";

export default function Todo(){
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(false);
    const [status,setStatus] = useState(false);

    useEffect(()=>{handleTodo();},[])

    function handleTodo(){
        setLoading(true);
        setError(false);
        Read()
        .then((res)=>{setData(res.data); setLoading(false);console.log(res.data);})
        
        .catch((err)=>{setLoading(false);setError(true);})
    }

    function handleAdd(fName,lName){
        setLoading(true);
        Add({fName,lName,status:false}).then(()=> handleTodo());
    }

    return (
        <div>
            {loading && <div>Loading....</div>}
            {error && <div>Error....</div>}
            <div>
                <AddTodo handleAdd={handleAdd}/>
            </div>
            <div>
                {data.map((item)=>(<Todoitem key={item.id} fName={item.firstName} lName={item.lastName}/>))}
            </div>
            {/* <div>
                {data.map((item)=>(<BasicTable key={item.id} fName={item.firstName} lName={item.lastName} add={LabelAddButton} delete={IconDeleteButtons} update={LabelUpdateButton}/>))}
            </div> */}
        </div>
    )
}