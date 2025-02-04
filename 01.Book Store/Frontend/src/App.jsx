import Home from './components/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import AllBooks from './components/AllBooks'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {

  const [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='all-Books' element={authUser ? <AllBooks /> : <Navigate to="/signup" />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Toaster />
      <Footer />
    </>
  )
}

export default App