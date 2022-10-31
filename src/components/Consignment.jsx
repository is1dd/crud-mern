import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';

function Consignment() {
  //  const { id } = useParams();
    const [data , setData ] = useState({
        name:"",
        email:"",
        image:"",
        address:"",
        pickupdate:"",
        dropdate:"",
        weight:"",
        distance:""
    });
    const handleChange=(e)=>{
        const {name,value} = e.target;
        setData({
            ...data,
            [name]:value
        });
        console.log(data)
    }

   async function handleSubmit(e){
        e.preventDefault()
      let res = await fetch("http://localhost:8080/cons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

     
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
            </label>
            <input type="text" name='name' onChange={handleChange }></input>
            <label>
                Email: 
            </label>
            <input type="email" name='email' onChange={handleChange }></input>

                <label>
               PickUP Date: 
            </label>
            <input type="date" name='pickupdate' onChange={handleChange}></input>
             <label>
               Drop Date: 
            </label>
            <input type="date" name='dropdate' onChange={handleChange }></input>
            
                <label>
                Weight(in kg): 
            </label>
            <input type="text" name='weight' onChange={handleChange}></input>
              <label>
                Distance(in km): 
            </label>
            <input type="text" name='distance' onChange={handleChange }></input>
              <label>
                Address: 
            </label>
            <input type="text" name='address' onChange={handleChange }></input>
              <label>
                Image: 
            </label>
            <input type="text" name='image' onChange={handleChange }></input>
            <input type="submit" value="submit"></input>

        </form>
        
        <div>
    {/* <h3>Name: {name}</h3>
    <h3>Pick Up Date: {pickup}</h3>
    <h3>drop Date: {drop}</h3>
    <h3>Price: { }</h3> */}

        </div>


    </div>
  )
}

export default Consignment