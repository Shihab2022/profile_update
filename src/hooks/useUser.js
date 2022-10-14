import { useEffect, useState } from 'react';

const useUser = () => {
    const [user,setData]=useState([])
useEffect(()=>{
    fetch('task.json')           //api for the get request
    .then(response => response.json())
    .then(data => setData(data));
    console.log(user)
},[])


    return [user,setData]
};

export default useUser;