import { Route, Routes } from 'react-router-dom';
import Login from './LoginPage'
import Dashboard from './Dashboard';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import ProctectedComp from './ProctectedComp';

function App() {

  const [token, setToken] = useState()

  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [token])

  return (
    <div className="App">
      {/* {console.log(token)} */}
      <ToastContainer />
      <Routes>
        <Route path="/" element={
          <ProctectedComp token={token}>
            <Dashboard />
          </ProctectedComp>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
