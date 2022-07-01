import { useState } from "react";
import AddTodo from "./addtodo";
import TodoList from "./todolist";

function Todo(){
    const [Todos , setTodos] = useState([]);
    const handleAdd = (text) => {
        setTodos([
            ...Todos,{
                id : Date.now(),
                title : text,
                status : false
            }
        ])
    };
    const handleToggle = (id) => {
        const updateddata = Todos.map(item=>item.id === id?{...item,status:!item.status}: item);
        setTodos(updateddata);
    };

    const handleDelete = (id) => {
        const updateddata = Todos.filter(item=>item.id !== id);
        setTodos(updateddata);
    };

    console.log(Todos)
    return (
        <div>
            <AddTodo handleAdd={handleAdd}/>
            <div>
                <TodoList data={Todos.filter(item=>!item.status)} handleToggle={handleToggle} handleDelete={handleDelete}/>
            </div>
            <h1>Completed</h1>
            <div>
                <TodoList data={Todos.filter(item=>item.status)} handleToggle={handleToggle} handleDelete={handleDelete}/>
            </div>
        </div>
    )
}

export default Todo;