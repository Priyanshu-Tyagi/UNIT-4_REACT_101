import { useState } from "react"
import { LabelAddButton } from "./MUI/Button"
import StateTextFields from "./MUI/input"

export default function AddTodo({handleAdd}){
    const [fName,setFName] = useState("");
    const [lName,setLName] = useState("");

    function handleFChange(e){
        setFName(e.target.value)
    }

    function handleLChange(e){
        setLName(e.target.value)
    }

    return (
        <div style={{display:"flex",gap:"3rem",width:"50%",margin:"auto"}}>
            <div><StateTextFields fChange={handleFChange} lChange={handleLChange}/></div>
            <div style={{alignSelf:"center"}}><LabelAddButton handleAdd={handleAdd}/></div>
        </div>
    )
}