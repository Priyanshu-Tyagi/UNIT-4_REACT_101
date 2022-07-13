import { useContext } from "react"
import { AppContext } from "../Context/AppContext";

const styles={
    dark:{
        background:"black",
        color:"white"
    },
    light:{
        background:"white",
        color:"black"
    }
}

export default function Button({children,onClick}){
    const [theme] = useContext(AppContext);
    // console.log(theme)
    return (
    <button style={styles[theme]} onClick={onClick}>{children}</button>
    )
}