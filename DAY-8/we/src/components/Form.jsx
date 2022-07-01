import { useState } from "react";
const initFormData = {
    name: "",
    email:"",
    country:"USA",
    status:true
};


function Form(){

    const [formData,setFormData] = useState(initFormData);

    const handlechange = (e)=>{const {value,name,type,checked}=e.target;
    

   

    const valueToBeUpdated = type==="checkbox"?checked:value;

    console.log(`update ${name} with ${valueToBeUpdated}`);

    setFormData({
        ...formData,
        [name]: valueToBeUpdated
    });
    }

    const handlesubmit = (e)=>{
        e.preventDefault();
    console.log(formData);
    }

    return (
        <form onSubmit={handlesubmit}>
        <div>
            <input 
            name="name"
            onChange={handlechange}
            value={formData.name}
            type="text"
            placeholder="name" />
        </div>
        <div>
            <input
             name="email"
             onChange={handlechange}
             value={formData.email}
             type="email" 
             placeholder="email"/>
        </div>
        <div>
            <select
            onChange={handlechange}
            name="country"
            defaultValue={formData.country}
            placeholder="Country"
            value={formData.country}
            >
                <option value="USA">USA</option>
                <option value="India">India</option>
            </select>
        </div>
        <div>
            <input 
            type="checkbox"
            name="status"
            onChange={handlechange}
            checked={formData.status}
            />
            <label>Currently Working</label>
        </div>
        <div>
            <input type="submit" />
        </div>
        <ul>
            <li>
                Name: {formData.name}
            </li>
            <li>
                Email: {formData.email}
            </li>
            <li>
                Country: {formData.country}
            </li>
        </ul>
    </form>
    )
    
}

export default Form;