import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { success } from './Toast';
import './App.css';
import { createTodo, deleteTodo, updateTodo } from './Utils/ApiUtils';

function Dashboard() {

    const [showModel, setShowModel] = useState(true);
    const [todoData, setTodoData] = useState({
        title: "",
        date: ""
    })
    const [allTodoListDate, setAllTodoListDate] = useState([])
    const [loading, setLoding] = useState(true)
    const [updateBtn, setUpdateBtn] = useState(false)
    const [idForUpdate, setIdForUpdate] = useState(0)
    const navigate = useNavigate()


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:8000/todo`)
            const data = await res.json()
            console.log(data);
            setAllTodoListDate(data.todo)
            setLoding(false)
        })()
    }, [allTodoListDate])

    const onHandleEvent = (event) => {
        // const todo = {'title': event.target.value}
        setTodoData({ ...todoData, title: event.target.value })
    }

    const onSaveTodo = async () => {
        console.log(todoData);
        const apiResponce = await createTodo(todoData)
        if (apiResponce.status === 200) {
            success(apiResponce.data.message)
            console.log("responcemessage", apiResponce.data.message);
        } else {
            console.log("error");
        }
        setTodoData({ title: "", date: "" })
    }

    const onDeteteTodo = async (id) => {
        console.log(id);
        const res = await deleteTodo(id)
        if (res.status === 200) {
            success(res.data.message)
            console.log("responce message:", res.data.message);
        } else {
            console.log("error");
        }
    }

    const onTodoEdit = async (id) => {
        setIdForUpdate(id)
        setShowModel(false)
        setUpdateBtn(true)
        console.log(id);
        const todolist = [...allTodoListDate]
        const todo = todolist.find(item => item._id === id);
        console.log(todo);
        setTodoData({ title: todo.title })

    }

    const onTodoUpdate = async () => {
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
        <div className='ms-3'>
            <NavBar />
            <div className='row m-2'>

                <div className='col-10 p-2'>
                    {showModel
                        ? <button className='allBtn' onClick={() => setShowModel(false)}>ADD</button>
                        : <div className="d-flex justify-content-evenly">
                            <div>
                                <input
                                    type='text'
                                    name='todo'
                                    placeholder='Enter todo'
                                    value={todoData.title}
                                    className="form-control w-100 mt-2"
                                    onChange={(e) => onHandleEvent(e)}
                                />
                                <input
                                    type="date"
                                    name="date"
                                    className="form-control w-100 mt-2"
                                />
                            </div>

                            <div>
                                {updateBtn ? <button className='allBtn bg-warning' onClick={() => onTodoUpdate()}>UPDATE</button> : <button className='allBtn' onClick={() => onSaveTodo()}>SAVE</button>}
                                <div><button className='allBtn' onClick={() => setShowModel(true)}>CLEAR</button></div>
                            </div>
                        </div>
                    }
                </div>
                {showModel ? <button className='col-1 p-2 allBtn ' onClick={() => navigate('/login')}>LOGOUT</button> : <div></div>}
            </div>

            {allTodoListDate.length === 0
                ? <h3 className='text-danger'><i>No any todo available...</i></h3>
                : <div className='container'>
                    <div className='margin'>
                        <div className='row mt-3 ms-5'>
                            <div className='col-4 text-success fs-3 todo-text'>Todo</div>
                            <div className='col-3 text-success fs-3 todo-text'>Update</div>
                            <div className='col-3 text-success fs-3 todo-text'>Delete</div>
                        </div>
                    </div>

                    <div className='margin'>
                        {loading
                            ? (<p>Loading....</p>)
                            : (allTodoListDate.map(item => (
                                <div className='row mt-3 ms-5 ' key={item._id}>
                                    <div className='col-4 fs-4 todo-text'>{item.title}</div>
                                    <div className='col-3 todo-text ms-4'><i onClick={() => onTodoEdit(item._id)} className="text-warning fa-solid fa-pen-to-square fs-6"></i></div>
                                    <div className='col-3 todo-text ms-4'><i onClick={() => onDeteteTodo(item._id)} className="text-danger fa-solid fa-trash-can fs-6"></i></div>
                                </div>
                            )))}
                    </div>
                </div>}
        </div>
    )
}

export default Dashboard