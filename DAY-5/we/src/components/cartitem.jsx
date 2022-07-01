import LablePrice from "./lableprice";
import Quantity from "./quantity";

function CartItem({id,label,price,qty,handleChangeQty}){
    return (
        <div style={{display:"flex",gap:"1rem",padding:"2rem",justifyContent:"center",alignItems:"center"}}>

            <LablePrice 
            label={label} 
            price= {price}/>
            <Quantity 
            qty={qty}
            // id={id}
            inccount={()=>handleChangeQty(id,1)}
            deccount={()=>handleChangeQty(id,-1)}
            />

        </div>
    )
}

export default CartItem;