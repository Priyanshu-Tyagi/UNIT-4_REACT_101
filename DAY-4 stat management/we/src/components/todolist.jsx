import TodoItem from "./todoitem";

function TodoList({data,handleToggle,handleDelete}){
    return (
        <div>
            {data.map((item)=>(
                <TodoItem
                key={item.id}
                id={item.id}
                title={item.title}
                status={item.status}
                handleToggle={handleToggle}
                handleDelete={handleDelete}
                />
            ))}
        </div>
    )
}

export default TodoList;