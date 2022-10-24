import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../components/Footer'
import FormEdit from '../components/FormEdit'
import Header from '../components/Header'

const Edit = (editRow, currentUser) => {

  const {id} = useParams();

  const [ user, setUser ] = useState([]);
  
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    const data = await fetch(`https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users/${id}`);
    const us = await data.json()
    setUser(us)
  }

  return (
    <div>
      <Header></Header>
      <div className="container">
        <a href="/">Back to Home</a>
        <div className="text-center">
        <h1>Edit User</h1>
        </div>
          <FormEdit 
          user={user} 
          key={user.id}
          editRow={editRow}
          currentUser={currentUser}></FormEdit>
      </div>
      <Footer />
    </div>
  )
}

export default Edit
