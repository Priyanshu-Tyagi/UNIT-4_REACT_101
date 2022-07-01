function Button({children}){
    return (
        <button style={{
            border:"none",
            backgroundColor:"red",
            fontWeight:"bolder",
            color:"white",
            padding:"1rem"
        }} >{children}</button>
    )
}

export default Button;