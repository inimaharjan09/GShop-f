import { Input, Button, IconButton, Typography } from '@material-tailwind/react';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { useUserLoginMutation } from './authApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../user/userSlice';


export default function Login() {
  const nav = useNavigate();

  const [userLogin, {isLoading }] = useUserLoginMutation();

  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

        <Formik
          initialValues={{ 
            email: '',
            password: '' }}
            onSubmit={async(value) => {
            console.log(value);
            try{
              const response = await userLogin(value).unwrap();
              console.log(response);
              dispatch(setUser(response));

              toast.success('Login Successfully');
              nav(-1);
            }catch(err){
              toast.error(err.data?.message || err.data);
              console.log(err);
            }
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                onChange={handleChange}
                value={values.email}
                label="Email"
                name="email"
              />
              </div>
              <div className='relative flex w-full'>
                <Input
                onChange={handleChange}
                value={values.password}
                className='pr-20'
                type={show ? 'text' : 'password'}
                label="Password"
                name="password"
                containerProps={{
                  className: 'min-w-0',
                }}        
              />
              <IconButton
                onClick={() => setShow(!show)}
                variant="text"
                size="sm"
                className="!absolute right-1 top-1 rounded"
              >
              <i className={show ? 'fa fa-unlock' : "fa fa-lock"}></i>
              </IconButton>
              </div>
              <div className="flex justify-center">
                <Button loading = {isLoading} size='sm' type="submit" className="bg-blue-500 w-1/2">
                  Login
                </Button>
              </div>
              <div className="text-center text-sm text-blue-gray-500">
                <a href="" className="hover:underline">
                  Forgot your password?
                </a>
              </div> 
            </form>
          )}
        </Formik>
        <div>
                <Typography  className="text-center text-sm">
                  Don’t have an account?{' '}
                  <Button
                className="text-blue-500 font-medium hover:bg-gray-50 hover:underline px-2" 
                onClick={() => nav('/signup')} 
                variant='text'>
                  Sign up
                </Button>
                </Typography>
              </div>
      </div>
    </div>
  );
}