import { useState } from "react";
import CartItem from "./cartitem";
import Total from "./total";

const initData = [
    {
        id:1,
        productname:"Noodles",
        price:30 ,
        qty: 1
    },
    {
        id:2,
        productname:"Biriyani",
        price:90 ,
        qty: 2
    },
    {
        id:3,
        productname:"Chips",
        price:10 ,
        qty: 3
    }
]

function claculateTotal(products){
   return products.reduce((acc,c)=>acc+(c.price*c.qty),0)
}

function CartContainer(){
    const [data,setData] = useState(initData)
    const handleChangeQty=(id,amount)=>{
        let updatedData = data.map(item=>{
            if(item.id===id)
            {return {
                ...item,
                qty: item.qty + amount
            } }
            else{
                return item
            }
        })
        setData(updatedData)
    }


    return (
        <div>
            {/* body */}
            {/* list of products*/}
            {data.map(item=><CartItem 
            key={item.id}
            id={item.id} 
            label={item.productname} 
            qty={item.qty} 
            price={item.price}
            inccount={handleChangeQty}
            deccount={handleChangeQty}
            />)}
            {/* total */}
            <Total total={claculateTotal(data)}/>
        </div>
    )
}
export default CartContainer;