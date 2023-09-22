import React, { useEffect, useState } from 'react'
import Axios from 'axios'
let id=11;
const App = () => {
  const [users, setUsers]=useState([]);
  const[name, setName]=useState("");
  useEffect(()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(res =>setUsers(res.data))
  },[])

  // const postUser=()=>{
  //   Axios.post('https://jsonplaceholder.typicode.com/users',{id:id++,name: name})
  //   .then(res => setUsers([...users,res.data]))
  // }


  // const updateUser=()=>{
  //   Axios.put(`https://jsonplaceholder.typicode.com/users/${1}`,{name: name})
  //   // .then(res =>console.log(res.data))
  //   .then(res =>setUsers(res.data))
  // }


  const deleteUser=()=>{ 
    Axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
    // .then(res =>console.log(res.data))
    .then(res =>setUsers(res.data))
  }


  
  return (
    <main>
      <h1>Axios-Library
      Post,Get,Update,Delete</h1>
      {/* {users.map((u,i )=>{
        return(
        <section key={i}>
        {u.name}
        </section>
        )
      }
      )} */}

      {users.name}
      <div>
        <input type="text"value={name} onChange={(e) => setName(e.target.value)} />
        {/* <button onClick={postUser}>Post</button> */}
        {/* <button onClick={updateUser}>Update</button> */}
        <button onClick={deleteUser}>Delete</button>
      </div>
      
    </main>
  )
}

export default App