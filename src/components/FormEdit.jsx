import React from 'react'; 
import '../styles/style.scss';


const FormEdit = ({user, currentUser}) => {
  console.log(currentUser);
  return (
    <div>
      <form className='form-edit' action="">
        <div className="input-group">
            <div className="text-center">
            <img className='avatar' src={user.avatar} /> <br />
            <button className='add btn indigo bg-white bd-indigo'>
                <input className='file' type="file" name="" id="" />
                <span>Change Avatar</span>
            </button> 
            </div>
        </div>
        <div className="input-group">
            <label className='indigo'>First Name</label>
            <input className='bd-indigo' type="text" name="" value={user.first_name} />
        </div>
        <div className="input-group">
            <label className='indigo'>Last Name</label>
            <input className='bd-indigo' type="text" name="" value={user.second_name} />
        </div>
        <div className="input-group">
            <label className='indigo'> Name</label>
            <input className='bd-indigo' type="text" name="" value={user.email} />
        </div>
        <div className="text-center">
            <button className='btn bg-indigo white bd-indigo'>Save</button>
        </div>
      </form>
    </div>
  )
}

export default FormEdit
