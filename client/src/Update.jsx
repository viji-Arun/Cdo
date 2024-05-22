import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Update() {
 const {id} = useParams() 
 //distract from the URL and store that in id
 const [name, setName] = useState()
 const [age, setAge] = useState()
 const [email, setEmail] = useState()
 const navigate = useNavigate()

 useEffect (()=>{
  axios.get("http://localhost:5000/getUser/"+id)
  .then(result =>{ console.log(result)
  setName(result.data.name)
  setEmail(result.data.email)
  setAge(result.data.age)
  })
.catch(err => console.log(err))
    },[])

    const Update = (e) => {
      e.preventDefault();
      axios.put("http://localhost:5000/updateUser/"+id, {name,email,age})
      .then(result =>{
        console.log(result)
        navigate('/')
      }) 
      
      .catch(err => console.log(err))
      
    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
      <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
          <label>Name</label>
          <input type='text'placeholder='Enter Name' className='form-control'
          value={name} onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className='mb-2'>
          <label>Email</label>
          <input type='text'placeholder='Enter email' className='form-control'
          value={email} onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div className='mb-2'>
          <label>Age</label>
          <input type='text'placeholder='Enter age' className='form-control'
          value={age} onChange={(e) => setAge(e.target.value)}></input>
          </div>
          <div>
              <button className='btn btn-success'>Update</button>
          </div>
      </form>
    </div>
  </div>
  )
}

export default Update