import { getDefaultNormalizer } from '@testing-library/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import {Navigate, useNavigate} from "react-router-dom"
const getData = async()=>{
    let res = await fetch('http://localhost:8080/cons');
    let data = await res.json();
    // console.log(data,"Database");
    return data;
}
const deleteData = async(id)=>{
      let res = await fetch('http://localhost:8080/cons/' + id, {
        method: 'DELETE',
      })
      getData();
      window.location.reload();
}
function Dashboard() {
    const redirect = useNavigate()
    const [data, setData] = useState([])
       
    useEffect(()=>{
    getData().then(res=>{
        setData(res)
        console.log(data);
    })
},[])

// console.log(data);
    
    function handleSubmit(e){
        e.preventDefault()
        // setFormValues((prevFormValues)=> [...prevFormValues , initialValues])        
    };
  const handleDelete=async(id)=>{
    deleteData(id);
  }
    return(
        <>
       
    <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Address</th>
        <th>Image</th>
        <th>Weight</th>
        <th>Distance</th>
         <th>PickUp date</th>
          <th>drop Date</th>
          <th>Price</th>
      </tr>
    </thead>
    <tbody>
     {data?.map(el=>(
        <tr >
            <td>{el.name}</td>
            <td>{el.email}</td>
            <td>{el.address}</td>
            <td><img width={'40px'} height={'40px'} src={el.image} alt="" /></td>
            <td> {el.weight}</td>
            <td>{el.distance}</td>
            <td>{el.pickupdate}</td>
            <td>{el.dropdate}</td>
            <td>{el.weight * el.distance}</td>
            <td><button onClick={()=>{handleDelete(el._id)}}>Delete</button></td>
            <td><button onClick={()=>{redirect(`/update/${el._id}`)}}>Edit</button></td>
      </tr>          
            ))}
     </tbody>
   </table>
        
     
        </>
        
    )
 
  

}

export default Dashboard