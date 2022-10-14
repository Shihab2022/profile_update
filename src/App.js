import { Route, Routes } from 'react-router-dom';
import './App.css';
import Call from './Pages/Call';
import DefaultPage from './Pages/DefaultPage';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Profile from './Pages/Profile';
import User from './Pages/User';


function App() {
  return (
    <div >
    <h1 className='text-5xl text-amber-500 font-bold '>start  application</h1>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<User/>}/>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/default' element={<DefaultPage/>}/>
      <Route path='/call' element={<Call/>}/>
      <Route path='/profile/:userId' element={<Profile></Profile>}/>
    </Routes>
    
    </div>
  );
}

export default App;
