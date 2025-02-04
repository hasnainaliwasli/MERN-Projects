import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const naviagte = useNavigate()
  const onSubmit = async (data) => {

    const userInfo = {
      fullname: data.username,
      email: data.email,
      password: data.password
    }

    await axios.post("http://localhost:3000/user/signin", userInfo)
      .then((res) => {
        console.log("Signin Response: ", res.data)
        if (res.data) {
          toast.success("Signin Successful")
          naviagte('/')
          window.location.reload()
        }
        localStorage.setItem('users', JSON.stringify(res.data.user))
      }).catch((err) => {
        if (err.response) {
          console.log("Something went wrong", err)
          toast.error(err.response.data.message)
        }
      })

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form
          className="flex flex-col mt-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Input Fields */}
          <input
            type="text"
            className="border-2 py-2 px-4 rounded-md outline-none mt-3"
            placeholder="Email Address..."
            required
            {...register("email", { required: true })}
          />
          <input
            type="password"
            className="border-2 py-2 px-4 rounded-md outline-none mt-3"
            placeholder="Password..."
            required
            {...register("password", { required: true })}
          />

          {/* Sign In Button */}
          <button
            type="submit"
            className="btn btn-secondary py-2 mt-6 w-full text-white bg-pink-500 hover:bg-pink-600 rounded-md"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="flex justify-center items-center mt-6">
          <p className="text-gray-600">Don't have an account?</p>
          <button
            className="btn btn-sm text-white btn-secondary ml-2 text-pink-500 underline"
            onClick={() => {
              window.location.href = '/signUp';
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
