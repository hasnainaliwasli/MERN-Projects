import React from 'react';
import { useForm } from "react-hook-form";

export default function SignIn() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
