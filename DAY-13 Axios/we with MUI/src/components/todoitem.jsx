import IconLabelButtons from "./MUI/Button"

export default function Todoitem({id,fName,lName}){
    return (
        <div style={{display:"flex",width:"35%",margin:"auto",justifyContent:"center",alignText:"center",alignItems:"center",gap:"2rem"}}>
            <div style={{display:"flex"}}>
                <h2>{fName} {lName}</h2>
            </div>
            <div><IconLabelButtons/></div>
        </div>
    )
}