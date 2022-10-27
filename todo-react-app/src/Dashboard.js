import React, { useEffect, useState } from 'react'
import { success } from './Toast';
import { createTodo, deleteTodo, updateTodo } from './Utils/ApiUtils';

function Dashboard() {

    const [showModel, setShowModel] = useState(true);
    const [todoData ,setTodoData] = useState({
        title: ""
    })
    const [allTodoListDate, setAllTodoListDate]= useState([])
    const [loading , setLoding] = useState(true)
    const [updateBtn, setUpdateBtn] = useState(false)
    const [idForUpdate, setIdForUpdate] = useState(0)


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:8000/todo`)
            const data = await res.json()
            console.log(data);
            setAllTodoListDate(data.todo)
            setLoding(false)
        })()
    },[allTodoListDate])

    const onHandleEvent = (event) =>{
        // const todo = {'title': event.target.value}
        setTodoData({...todoData, title: event.target.value})
    }

    const onSaveTodo = async() =>{
        console.log(todoData);
        const apiResponce = await createTodo(todoData)
        if (apiResponce.status === 200) {
            success(apiResponce.data.message)
            console.log("responcemessage", apiResponce.data.message);
        } else {
            console.log("error");
        }
        setTodoData({title: ""})
    }

    const onDeteteTodo =async(id) =>{
        console.log(id);
        const res = await deleteTodo(id)
        if (res.status === 200) {
            success(res.data.message)
            console.log("responce message:", res.data.message);
        } else {
            console.log("error");
        }
    }

    const onTodoEdit =async(id) =>{
        setIdForUpdate(id)
        setShowModel(false)
        setUpdateBtn(true)
        console.log(id);
        const todolist  = [...allTodoListDate]
        const todo = todolist.find(item => item._id === id);
        console.log(todo);
        setTodoData({title: todo.title})
       
    }

    const onTodoUpdate = async() =>{
        setUpdateBtn(false)
        console.log(idForUpdate, todoData);
        const res = await updateTodo(idForUpdate, todoData)
        if (res.status === 200) {
            success(res.data.message)
            console.log("responce message:", res.data.message);
        } else {
            console.log("error");
        }
    }

  return (
    <div>
        <button>logout</button>

        <div>
            {showModel 
            ? <button onClick={() => setShowModel(false)}>Add</button> 
            : <div className="d-flex flex-column align-items-center ">
                <div>
                <input
                    type='text'
                    name='todo'
                    placeholder='Enter todo'
                    value={todoData.title}
                    className="form-control w-50 mt-2"
                    onChange={(e) => onHandleEvent(e)}
                />
                <label for="date">Date:</label>
                <input type="date" name="date"/>
                </div>

                <div>
                    {updateBtn ?<button onClick={() => onTodoUpdate()}>Update</button> :<button onClick={() => onSaveTodo()}>Save</button>}
                    <button onClick={() => setShowModel(true)}>Clear</button>
                </div>
            </div>
            }
        </div>

        <div className='margin'>
        <div className='row mt-3 ms-5'>
          <div className='col-3 text-success fs-5'>Todo</div>
          <div className='col-4 text-success fs-5'>Date</div>
          <div className='col-2 text-success fs-5'>Update</div>
          <div className='col-1 text-success fs-5'>Delete</div>
        </div>
      </div>
      
      <div className='margin'>
        {loading
          ? (<p>Loading....</p>)
          : (allTodoListDate.map(item => (
            <div className='row mt-3 ms-5 ' key={item._id}>
              <div className='col-3 fs-6 text-align'>{item.title}</div>
              <div className='col-3 fs-6 text-align'>{}</div>
              <div className='col-2'><i onClick={() => onTodoEdit(item._id)} className="fa-solid fa-pen-to-square fs-6"></i></div>
              <div className='col-1'><i onClick={() => onDeteteTodo(item._id)} className="fa-solid fa-trash-can fs-6"></i></div>
            </div>
          )))}
      </div>
    </div>
  )
}

export default Dashboard