function LablePrice({label,price}){
    return (
        <div style={{display:"flex",gap:"1rem"}}>
            <div><h3>{label}</h3></div>
            <div><h3>₹{price}</h3></div>
        </div>
    )
}

export default LablePrice;