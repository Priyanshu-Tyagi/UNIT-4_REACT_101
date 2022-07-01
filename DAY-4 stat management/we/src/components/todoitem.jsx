function TodoItem({id,title,status,handleToggle,handleDelete}){
    return (
    <div style={{
        padding: "1rem",
        border: "1px solid tomato",
        borderRadius: "1rem",
        display: "flex",
        gap: "1rem"
      }}
    >
      <div>{title}</div>
      <div>{status? "Done":"Not Done"}</div>
      <button onClick={()=>handleToggle(id)} >TOGGLE</button>
      <button onClick={()=>handleDelete(id)} >DELETE</button>
    </div>
    );
}

export default TodoItem;