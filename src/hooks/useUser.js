import { useEffect, useState } from 'react';

const useUser = () => {
    const [user,setData]=useState([])
useEffect(()=>{
    fetch('https://dry-island-38030.herokuapp.com/users')           //api for the get request
    // fetch('http://localhost:5000/users')           //api for the get request
    .then(response => response.json())
    .then(data => setData(data));
    
},[])


    return [user,setData]
};

export default useUser;