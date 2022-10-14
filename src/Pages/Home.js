import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../hooks/useData';

const Home = () =>  {
 
    const [userData,]=useData()
    console.log(userData)
    return (
        <div className='flex mt-20 flex-col justify-center items-center '>
            <p className='font-serif font-bold text-transparent  text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Welcome to  Our Profile </p>
           
<div className='w-full  flex-col'>
{
  userData?.map(d=><>
  <div className='my-5 font-serif'>
    <p className='text-2xl font-semibold'> Name : <span className='text-lg'>{d.name}</span></p>
    <p className='text-2xl font-semibold'> Email :  <span className='text-lg text-green-700'>{d.email}</span></p>
    <p className='mb-3 text-2xl font-semibold'> About : <span  className='text-sm'>{d.about}</span></p>
    <Link to={`/profile/${d.index}`} className='bg-gradient-to-r from-zinc-500 to-zinc-800 px-10 text-xl text-white my-10 py-2 rounded-md w-1/2 '>Edit</Link>
</div>
  </>)  
    
    }
</div>
           
        </div>
    );
};
export default Home;