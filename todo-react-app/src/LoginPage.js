import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { success } from './Toast';
import { signin } from './Utils/ApiUtils';
import './App.css';

function LoginPage() {

    const [loginData , setLogin] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()
    
    const onHandleEvent = (event) =>{
        setLogin({...loginData, [event.target.name]: event.target.value, [event.target.name]: event.target.value})
        console.log(loginData);
    }

    const onSignin = async() =>{

        
        //console.log(loginData);
        const apiResponce = await signin(loginData)
        if (apiResponce.status === 200) {
            success(apiResponce.data.message)
            console.log("responcemessage", apiResponce.data.message);
            navigate('/');
        } else {
            console.log("error");
        }
    }


    return (
        <div>
            <NavBar/>
            <h4 className="my-5 fs-2 text-danger">SIGN IN</h4>
            <div>
                <form className="d-flex flex-column align-items-center ">
                    <input
                        type='text'
                        name='email'
                        placeholder='Enter email'
                        className="form-control w-50 mt-2"
                        onChange={(e) => onHandleEvent(e)}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-control w-50 mt-2"
                        onChange={(e) => onHandleEvent(e)}
                    />
                </form>
                <button className="form-control w-50 btn btn-primary mt-3 btn" onClick={() => onSignin()}>
                    LOGIN
                </button>
            </div>
        </div>
    )
}

export default LoginPage