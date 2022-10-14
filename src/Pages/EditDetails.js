import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditDetails = () => {
    const {userId}=useParams()
    const [users,setUsers]=useState([])
    const [name,setName]=useState('')
    // const [user,setUser]=useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/users`)           //api for the get request
        .then(response => response.json())
        .then(data => setUsers(data));
        
    },[])

   
    useEffect(()=>{
        if(users.length !== 0){
            const user=users.filter(d=>d._id===userId)
            const n=user[0]?.employee_name
            setName(n)
        
           }

    },[])
    // let userName=
 console.log(name)

    const handleResetFrom=()=>{

    }
    // console.log(user.length !== 0)
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center mt-10 sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-amber-300 from-red-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
          <div  className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl px-24 font-semibold">
                  {" "}
                 Add New User
                </h1>
                {/* {success && <h1 className="text-xl text-center text-amber-500">User added successfully !!!! </h1>} */}
              </div>
  
              <div className="divide-y divide-gray-200">
                {/* <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"> */}
                <form
                  onSubmit={handleResetFrom}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="name"
                      name="name"
                      type="text"
                      onChange={(e) => setName(e)}
                      value={name}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder=" Enter  New Name"
                      required
                    />
                    <label
                      for="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Enter New Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="image"
                      name="image"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder=" Enter  New Name"
                      required
                    />
                    <label
                      for="image"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Enter New Image Link
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="salary"
                      name="salary"
                      type="number"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Salary"
                      required
                    />
                    <label
                      for="salary"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Salary
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autocomplete="off"
                      id="age"
                      name="age"
                      type="number"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="age"
                      required
                    />
                    <label
                      for="age"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Age
                    </label>
                  </div>
                  <div className="relative">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-md px-4 py-1">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EditDetails;