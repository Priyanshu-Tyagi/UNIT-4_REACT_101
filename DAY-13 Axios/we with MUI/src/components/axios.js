import axios from "axios" 

export function Read(){
    return axios.get(`https://62cd7067066bd2b69925e5e8.mockapi.io/crud`)
}

export function Add({fName,lName,status}){
    return (axios({url:`https://62cd7067066bd2b69925e5e8.mockapi.io/crud`,method:"POST",data:{fName,lName,status}}))
}

