
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])

  const handleAdd = e =>{
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = {name, email}
    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data =>{ 
      console.log('inside post response',data)
      const newUSers = [...users,data]
      setUsers(newUSers)
  })
  }

  return (
    <>
      <h1>User Management System</h1>
      <h3>User number: {users.length}</h3>
      <form onSubmit={handleAdd}>
        <input type="text"  name='name'/>
        <input type="email" name="email" id="" />
        <input type="submit" value="add user" />
      </form>
      {
        users.map(user => <p key={user.id}>{user.id} {user.name}</p>)
      }
    </>
  )
}

export default App
