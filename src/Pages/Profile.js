import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../hooks/useData";
import "./Profile.css";

const Profile = () => {
  const [value, setValue] = useState("shihab");
  const {userId}=useParams()
  const [userData,setUserData]=useState([])
  useEffect(()=>{
      fetch('fake.json')           //api for the get request
      .then(response => response.json())
      .then(data => setUserData(data));
  
  
  },[userId])
//   useEffect(()=>{
// const remaining =userData.find(d=> d.index===userId)
// console.log(remaining)
//   },[userData,userId])
console.log(userData)
  console.log(userId);
  return (
    <div className="mt-20  h-screen ">
      <form className="flex flex-col justify-center items-center w-full">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          class="w-1/2 h-10 border-2 border-zinc-500  rounded-sm pl-5"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          class="w-1/2 h-10 border-2 border-zinc-500  rounded-sm pl-5 mt-3"
          placeholder="Enter Your Email"
        />
        <input
          type="email"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          class="w-1/2 h-10 border-2 border-zinc-500  rounded-sm pl-5 mt-3"
          placeholder="Enter Your Email"
        />

        <textarea
          id="w3review"
          name="w3review"
          rows="10"
          cols="50"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          class="w-1/2 h-24 border-2 border-zinc-500  rounded-sm pl-5 mt-3"
        >
          {value}
        </textarea>
        <input type='submit' className="bg-gradient-to-r from-pink-400 to-red-800 mt-3 w-1/2 py-4 text-xl text-white "/>
      </form>
    </div>
  );
};

export default Profile;
