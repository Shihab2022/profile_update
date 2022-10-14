import React from 'react';
import { Link } from 'react-router-dom';
import useUser from '../hooks/useUser';

const User = () => {
    const [user]=useUser()
    console.log(user)
    return (
        <div className='md:mt-5 py-5 px-4 md:px-20'>
            <h1 className='text-3xl  text-center  my-4 font-serif font-bold'>Hare My all User</h1>
        <div className='grid md:grid-cols-4 gap-5'>
            {
            user?.map(d=>
            <div key={d._id} className='bg-gradient-to-r from-cyan-300 to-cyan-700 h-[400px] rounded-t-xl p-5'>
            
            <img className='h-[60%] w-[100%] rounded-md' src={d.profile_image} alt="" />
            <p className='text-2xl py-1 font-semibold'>{d.employee_name}</p>
            <p className=''>Salary : {d.employee_salary}</p>
            <p className=''> Age : {d.employee_age}</p>
            <div className='flex justify-center items-center py-5'>
            <Link to={`/editDetails/${d._id}`}   className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-7 py-2 text-white rounded-md'>Update</Link>

           
             </div>
            </div>)    
            }
        </div>
    </div>
    );
};

export default User;