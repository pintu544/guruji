import { Route, Routes } from 'react-router-dom';
import Login from './LoginPage'
import Dashboard from './Dashboard';
import './App.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path= "/" element= {<Dashboard/>} />
        <Route path="/login"  element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
