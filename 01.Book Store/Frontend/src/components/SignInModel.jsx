import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    document.getElementById('my_modal_3').close(); 
    navigate('/signUp'); 
  };

  return (
    <div>
      <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>
        Open Modal
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm bg-red-700 hover:bg-red-800 absolute right-2 top-2 text-white btn-circle">
              ✕
            </button>
          </form>
          <div className="flex flex-col">
            <div className="flex flex-col p-5">
              <input
                type="text"
                className="border-2 py-1 px-3 rounded-md outline-none"
                placeholder="Email Address..."
              />
              <input
                type="password"
                className="mt-5 border-2 py-1 px-3 rounded-md outline-none"
                placeholder="Password..."
              />
              <button className="btn btn-sm btn-secondary w-1/3 mx-auto my-4">Sign In</button>
            </div>
            <div className="flex justify-around">
              <p className="mt-2">Don't have an account?</p>
              <button
                onClick={handleSignUpClick}
                className="btn btn-sm btn-secondary"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
