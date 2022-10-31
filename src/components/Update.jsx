import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
 const getData = async(id)=>{
    try {
        let res = await fetch('http://localhost:8080/cons/'+id,{
        method: 'GET',
        headers: { "Content-Type": "application/json"},
    });
        let data = await res.json();
        // console.log(resData);
        return data;
        
    } catch (error) {
        console.log(error.message)
    }
}
function Update() {
   const { id } = useParams();
   const redirect = useNavigate();
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
  useEffect(()=>{
    // getData();
    getData(id).then(res=>{
        // console.log(res)
        setData(res);
    })
  },[])
   async function handleSubmit(e){
        e.preventDefault()
        await fetch('http://localhost:8080/cons/'+id, {
        method: 'PATCH',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
    }).then(res=>{

      console.log(res)
      redirect('/dashboard');
    }).catch((err)=>console.log(err))

        
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Name: 
            </label>
            <input type="text" value={data.name} name='name' onChange={handleChange }></input>
            <label>
                Email: 
            </label>
            <input type="email" value={data.email} name='email' onChange={handleChange }></input>

                <label>
               PickUP Date: 
            </label>
            <input type="date"value={data.pickupdate}  name='pickupdate' onChange={handleChange}></input>
             <label>
               Drop Date: 
            </label>
            <input type="date"value={data.dropdate}  name='dropdate' onChange={handleChange }></input>
            
                <label>
                Weight(in kg): 
            </label>
            <input type="text" value={data.weight} name='weight' onChange={handleChange}></input>
              <label>
                Distance(in km): 
            </label>
            <input type="text"value={data.distance}  name='distance' onChange={handleChange }></input>
              <label>
                Address: 
            </label>
            <input type="text" value={data.address} name='address' onChange={handleChange }></input>
              <label>
                Image: 
            </label>
            <input type="text" value={data.image} name='image' onChange={handleChange }></input>
            <input type="submit" value="Update"></input>
           {/* { id && <button onClick={handleUpdate} >Update</button>} */}

        </form>
        
        <div>
   

        </div>


    </div>
  )
}

export default Update