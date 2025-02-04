import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.username,
      email: data.email,
      password: data.password
    }

    await axios.post("http://localhost:3000/user/signup", userInfo)
      .then((res) => {
        console.log("Response from API in Signup", res.data);
        if (res.data) {
          toast.success("Signup Successful")
          navigate("/signin")
        }
        // localStorage.setItem('users', JSON.stringify(res.data.user))
      }).catch((err) => {
        if (err.response) {
          console.log("error in signup", err)
          // alert(err.response.data.message)
          toast.error(err.response.data.message)
        }
      })

    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-6">
          {/* Username Field */}
          <input
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long"
              }
            })}
            type="text"
            className={`border-2 py-2 px-4 rounded-md outline-none mt-3 ${errors.username ? 'border-red-500' : ''}`}
            placeholder="Username..."
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}

          {/* Email Field */}
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            })}
            type="text"
            className={`border-2 py-2 px-4 rounded-md outline-none mt-3 ${errors.email ? 'border-red-500' : ''}`}
            placeholder="Email Address..."
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

          {/* Password Field */}
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long"
              }
            })}
            type="password"
            className={`border-2 py-2 px-4 rounded-md outline-none mt-3 ${errors.password ? 'border-red-500' : ''}`}
            placeholder="Password..."
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}

          {/* Sign Up Button */}
          <button
            type="submit"
            className="btn btn-secondary py-2 mt-6 w-full text-white bg-pink-500 hover:bg-pink-600 rounded-md"
          >
            Sign Up
          </button>
        </form>

        {/* Sign In Link */}
        <div className="flex justify-center items-center mt-6">
          <p className="text-gray-600">Already have an account?</p>
          <button
            className="btn btn-sm text-white btn-secondary ml-2 text-pink-500 underline"
            onClick={() => {
              // Redirect to SignIn (Update based on your routing)
              window.location.href = '/signIn';
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
