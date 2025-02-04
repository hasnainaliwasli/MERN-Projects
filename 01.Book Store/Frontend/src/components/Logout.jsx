import React from 'react'
import { useAuth } from '../context/AuthProvider'
import { toast } from 'react-hot-toast';

const Logout = () => {
  const [authUser, setAuthUser] = useAuth()
  const handleLogout = () => {
    try {
      setAuthUser(
        {
          ...authUser,
          user: null
        }
      )
      localStorage.removeItem("users")
      window.location.reload();
      toast.success("LogOut Successfully ")
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <button className='px-3 py-2 rounded-md text-white bg-red-500 cursor-pointer' onClick={handleLogout}>
      Logout
    </button>)
}

export default Logout;