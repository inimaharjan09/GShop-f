import { Button, IconButton, Input, Typography } from '@material-tailwind/react'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { useUserSignUpMutation } from './authApi'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function SignUp() {
  const nav = useNavigate()

  const [userSignUp, { isLoading }] = useUserSignUpMutation()

  const [show, setShow] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
          }}
          onSubmit={async (value) => {
            console.log(value)
            try {
              await userSignUp(value).unwrap()
              toast.success('Successfully registered')
              nav(-1)
            } catch (err) {
              toast.error(err.data?.message || err.data)
              console.log(err)
            }
          }}
        >
          {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  onChange={handleChange}
                  value={values.username}
                  label="Username"
                  name="username"
                />
              </div>
              <div>
                <Input
                  onChange={handleChange}
                  value={values.email}
                  label="Email"
                  name="email"
                />
              </div>
              <div className="relative flex w-full">
                <Input
                  onChange={handleChange}
                  value={values.password}
                  className="pr-20"
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
                  <i className={show ? 'fa fa-unlock' : 'fa fa-lock'}></i>
                </IconButton>
              </div>
              <div className="flex justify-center">
                <Button
                  loading={isLoading}
                  size="sm"
                  type="submit"
                  className="bg-blue-500 w-1/2"
                >
                  Sign Up
                </Button>
              </div>
              <div className="text-center text-sm text-blue-gray-500"></div>
            </form>
          )}
        </Formik>

        <Typography className="text-center text-sm">
          Already have an account?{' '}
          <Button
            onClick={() => nav(-1)}
            className="text-blue-500 font-medium hover:bg-gray-50 hover:underline px-2"
            variant="text"
          >
            Login
          </Button>
        </Typography>
      </div>
    </div>
  )
}
