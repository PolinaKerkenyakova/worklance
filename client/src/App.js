import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Register from './components/Register/Register.js';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
