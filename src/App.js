import { Route, Routes } from 'react-router-dom';
import './App.css';
import DefaultPage from './Pages/DefaultPage';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Profile from './Pages/Profile';

function App() {
  return (
    <div >
    <h1 className='text-5xl text-amber-500 font-bold '>start  application</h1>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/default' element={<DefaultPage/>}/>
      <Route path='/profile' element={<Profile></Profile>}/>
    </Routes>
    </div>
  );
}

export default App;
