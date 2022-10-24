import React from 'react';
import { useForm } from 'react-hook-form';

const FormCreate = (user) => {

    const  {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        user.addUser(data);
        e.target.reset();
    }

  return (
    <div>
        <form  className='form-create' onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <label className='indigo'>Avatar</label>
                <img src="" alt="" />
                <button className='add btn indigo bg-white bd-indigo'>
                    <input className='file' type="file" name="avatar"/>
                    <span>Add Avatar</span>
                </button> 
            </div>
            <div className="input-group">
                <label className='indigo'>First Name</label>
                <input className='bd-indigo' type="text" name="first_name"
                    {...register("first_name", {
                        required: 'Enter your name'
                    })}
                />
            </div>
            <div className="input-group">
                <label className='indigo'>Last Name</label>
                <input className='bd-indigo' type="text" name="second_name"
                {...register("second_name", {
                    required: 'Enter your second name'
                })} />
            </div>
            <div className="input-group">
                <label className='indigo'> Email</label>
                <input className='bd-indigo' type="text" name="email"
                {...register("email", {
                    required: 'Enter your email'
                })} />
            </div>
            <div className="text-center">
                <button type='submit' className='btn bg-indigo white bd-indigo'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default FormCreate