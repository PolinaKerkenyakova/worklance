import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import CreateOffer from './components/CreateOffer/CreateOffer';
import Offers from './components/Offers/Offers';
import Logout from './components/Logout/Logout';
import Page404 from './components/Page404/Page404';

import { AuthProvider } from './contexts/AuthContext';

import './App.css';


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create-offer' element={<CreateOffer />} />
        <Route path='/offers' element={<Offers />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
