import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditDetails = () => {
    const {userId}=useParams()
    const [users,setUsers]=useState([])
    const [success,setSuccess]=useState(false)
    useEffect(()=>{
        fetch(`https://dry-island-38030.herokuapp.com/users`)           //api for the get request
        // fetch(`http://localhost:5000/users`)           //api for the get request
        .then(response => response.json())
        .then(data => setUsers(data));
        
    },[])

    const user=users.filter(d=>d._id===userId)
    const handleResetFrom = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const salary = e.target.salary.value;
        const age = e.target.age.value;
        const user = {
          employee_name: name,
          profile_image:image,
          employee_salary: salary,
          employee_age: age,
        };
    
        fetch(`https://dry-island-38030.herokuapp.com/updateUser/${userId}`, {
        // fetch(`http://localhost:5000/updateUser/${userId}`, {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.acknowledged) {
                setSuccess(true)
                console.log(data)
                e.target.reset()
            } 
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      };
    // console.log(user.length !== 0)
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center mt-10 sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r to-amber-300 from-red-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-12 sm:rounded-3xl"></div>
          <div  className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div onMouseOut={()=>setSuccess(false)} className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl px-24 font-semibold">
                  {" "}
                 Add New User
                </h1>
                {success && <h1 className="text-xl text-center text-amber-500"> {user[0]?.employee_name} details update successfully !!!! </h1>}
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
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      required
                    />
                    <label
                      for="name"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      {user[0]?.employee_name}
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
                   Link : {user[0]?.profile_image}
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
                     Previous Salary : {user[0]?.employee_salary}
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
                    Previous Age : {user[0]?.employee_age}
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