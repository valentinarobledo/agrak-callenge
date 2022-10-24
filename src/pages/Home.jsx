import React, {useEffect, useState} from 'react';
import axios from 'axios';
import '../styles/style.scss';
import '../components/Header';
import Header from '../components/Header';
import Users from '../components/Users';
import Footer from '../components/Footer';
import FormCreate from '../components/FormCreate';



const Home = () => {

  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    getUsers()
  }, [])

  //List Users
  const getUsers = async () => {
    const data = await fetch('https://635017b9df22c2af7b630c3e.mockapi.io/api/v1/users');
    const us = await data.json()
    setUsers(us)
  }

  //Add User
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  //Delete Users
  const deleteUser = (id) =>{
    setUsers(users.filter(user => user.id !== id));
  }

  //Edit users
  const [editing, setEditing] = useState();
  const [ currentUser, setCurrentUser] = useState({
    id: null, 
    first_name:'', 
    second_name: '',
    email: ''
  });

  const editRow = (user) => {
    setCurrentUser({
      id: user.id,
      first_name: user.first_name,
      second_name: user.second_name,
      email: user.email
    })
  }

  return (
    <><Header />
  <div className='container'>
    <div className='text-center'>
      <h1>My Users</h1>
    </div>
    <a className='btn bg-white indigo bd-indigo'>Create a new user</a>
    <FormCreate addUser={addUser} />

    <Users 
    users={users} 
    deleteUser={deleteUser}
    setEditing={setEditing}
    editRow={editRow}
    currentUser={currentUser} />
  </div>
  <Footer />
  </>
  )
}

export default Home
