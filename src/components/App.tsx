import { useState } from 'react'
import '../App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Home";
import Login from "./Login";
import Profile from "./Profile";
import { ProtectedRoutes } from './Protectedroutes';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn} />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
