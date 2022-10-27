import React, { useState } from 'react'
import { signin } from './Utils/ApiUtils';

function LoginPage() {

    const [loginData , setLogin] = useState({
        email: "",
        password: ""
    });

    const onHandleEvent = (event) =>{
        setLogin({...loginData, [event.target.name]: event.target.value, [event.target.name]: event.target.value})
        console.log(loginData);
    }

    const onSignin = async() =>{
        //console.log(loginData);
        const apiResponce = await signin(loginData)
        if (apiResponce.status === 200) {
            console.log("responcemessage", apiResponce.data.message);
        } else {
            console.log("error");
        }
    }


    return (
        <div>
            <h4 className="my-5">Signin</h4>
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
                <button className="form-control w-50 btn btn-primary mt-3" onClick={() => onSignin()}>
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginPage