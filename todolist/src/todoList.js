import React, { useState } from 'react'

const TodoList = () => {
    const [todo , setTodo] = useState("")
    const [arr ,setArr] = useState([])

    const formSubmit = (e)=>{
        e.preventDefault()
        const newest = {todo : todo}
        setArr([...arr, newest])
    }

    const removeAll = ()=>{
        setArr([])
    }

    const removeSpecific = (index)=>{
        const remove = arr.filter((item , itemIndex)=>{
return index !== itemIndex
        })
        setArr(remove)
    }

    const editSpecific = (index)=>{
const editTodo = prompt("Please enter todo")
if (editTodo !== null && editTodo.trim !== ""){
    const updatedArr = [...arr]
    updatedArr[index].todo = editTodo
    setArr(updatedArr)
}
    }
  return (
    <div>
        <form onSubmit={formSubmit}>
            <label>Todo</label>
            <input value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <button>Add</button>
        </form>
        <div>
            {arr.map((item , index)=>{
                return <p>{item.todo}
                <button onClick={()=>removeSpecific(index)}>Remove Specific</button>
                <button onClick={()=>editSpecific(index)}>Edit Specific</button>
                </p>
            })}
            <button onClick={removeAll}>Remove All</button>
        </div>
    </div>
  )
}

export default TodoList