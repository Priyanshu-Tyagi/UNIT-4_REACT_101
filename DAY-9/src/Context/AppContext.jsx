import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

    // Step 1: Create context
    // Step 2: consuming the context with useContext
    // Step 3: Create Provider and provide required value throughout your application
    // Create, Consume, Provide
    // CCP

const initState = {
    theme:"dark",
    auth:false
};

export default function AppContextProviderComponent({ children }){
    const [state,setState]=useState("dark");
    const [auth,setAuth] = useState(false);
    const toggleState = () => {
        setState(state === "dark"?"light":"dark")
    }
    // console.log(children);
    return (
        <AppContext.Provider value={[state,toggleState]}>{children}</AppContext.Provider>
    )
}