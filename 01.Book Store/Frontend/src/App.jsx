import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AllBooks from './components/AllBooks'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='all-Books' element={<AllBooks />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App