import React from 'react';
import booksImg from "../../public/books.avif";

export default function Banner() {
  return (
    <div className="max-w-screen-2xl my-12 container mx-auto md:px-28 px-4 flex flex-col md:flex-row items-center space-y-3 md:space-y-28 mt-10 md:space-x-8">
      {/* Left Content */}
      <div className="w-full md:w-1/2 mt-12 md:mt-26 text-center md:text-left order-2 md:order-1">

        <div className="space-y-8">
          <h1 className="text-3xl font-bold leading-snug">
            Hello! A book is a dream you can hold in your hands. Explore your next{' '}
            <span className="text-pink-500">adventure here</span>.
          </h1>
          <p className="text-lg text-gray-600">
            Here stories come alive. Discover a world of imagination and inspiration on every shelf. Start your journey
            today—because every great story begins with turning the first page.
          </p>

          {/* Email Input */}
          <div className="w-full flex justify-center md:justify-start">
            <label className="input input-bordered flex items-center gap-2 w-full max-w-md border rounded-lg shadow-md px-4 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-5 w-5 text-gray-500">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="email" className="grow outline-none text-gray-700" placeholder="Enter your email" />
            </label>
          </div>
        </div>
        <button className="bg-secondary py-2 px-3 text-white rounded-md mt-6  hover:bg-pink-600 duration-300 cursor-pointer">Secondary</button>
      </div>


      {/* Right Image */}
      <div className="w-full p-5 md:w-1/2 flex justify-center order-1 md:justify-end">
        <img
          src={booksImg}
          alt="Book Shelf"
          className="rounded-lg shadow-lg w-92 h-92 object-cover"
        />
      </div>
    </div>
  );
}
