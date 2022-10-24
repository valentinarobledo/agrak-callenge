import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import Edit from '../pages/Edit';


const Users = ({users, deleteUser, editRow, currentUser}) => {

  
  
  return (
    <div>
    <table cellSpacing={0}>
        <thead className='bg-indigo white'>
          <tr>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { users.map(item => (
            <tr key={item.id}>
            <td><img className='avatar' src={item.avatar} alt="" /></td>
            <td>{item.first_name}</td>
            <td>{item.second_name}</td>
            <td>{item.email}</td>
            <td>
                <Link to={`/edit/${item.id}`}
                onClick={()=>{ editRow(item.id) }} 
                currentUser={currentUser}
                 className='btn bg-indigo white bd-indigo'>Edit</Link>
                <button className='btn bg-white indigo bd-indigo'
                  onClick={()=>{ deleteUser(item.id)}}
                >
                  Delete
                </button>
            </td>
          </tr>
          ))
          }
        </tbody>
    </table>
    </div>
  )
}

export default Users
