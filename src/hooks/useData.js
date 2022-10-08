import { useEffect, useState } from 'react';

const useData = () => {
    const [userData,setUserData]=useState([])
useEffect(()=>{
    fetch('fake.json')           //api for the get request
    .then(response => response.json())
    .then(data => setUserData(data));


},[])


    return [userData,setUserData]
};

export default useData;