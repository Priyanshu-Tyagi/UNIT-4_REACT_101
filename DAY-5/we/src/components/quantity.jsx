import Button from "./button";

function Quantity({qty,inccount,deccount}){
    return (
        <div style={{display:"flex",gap:"1rem"}}>
            <Button onClick={deccount}>-</Button>
            <div>
                <h4>{qty}</h4>
            </div>
            <Button onClick={inccount}>+</Button>
        </div>
    )
}

export default Quantity;