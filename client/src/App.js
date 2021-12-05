import { Routes, Route } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreateOffer from './components/CreateOffer/CreateOffer';
import Offers from './components/Offers/Offers';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-offer' element={<CreateOffer />} />
        <Route path='/offers' element={<Offers />} />
      </Routes>
    </>
  );
}

export default App;
