import { useRef } from "react";
import { useState } from "react";

export default function Timer(){
const [count,setCount] = useState(0);
const timerRef = useRef(null);

console.log(timerRef);
const startTimer = () => {
    if(timerRef.current !== null) return;
    timerRef.current = setInterval(()=>{
        setCount((count)=>count+1);
    },1000);
};
const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
};

const resetTimer = () => {
    stopTimer();
    setCount(0);
}



    return (
        <div>
            <h1>TIMER:{count}</h1>
            <div>
                <button onClick={startTimer}>START</button>
                <button onClick={stopTimer}>STOP</button>
                <button onClick={resetTimer}>RESET</button>
            </div>
        </div>
    )
}