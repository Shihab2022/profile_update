import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>  {
    return (
        <div className='h-screen flex flex-col justify-center items-center '>
            <p className='font-serif font-bold text-transparent  text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Welcome to  Your Profile </p>
           
            <Link to='/profile' className='bg-gradient-to-r from-violet-500 to-fuchsia-500 px-10 text-xl text-white my-5 py-3 rounded-md'>Profile</Link>
           
        </div>
    );
};
export default Home;