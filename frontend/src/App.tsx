import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import { Blog } from './Pages/Blog'
import { Blogs } from './Pages/Blogs'
import { Publish } from './Pages/Publish'
import { RecoilRoot } from 'recoil'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
          <Route path= "/signup" element={<SignUp />} />
          <Route path= "/signin" element={<SignIn/>}/>
          <Route path= "/blog/:id" element={<Blog/>}/> 
          <Route path= "/blogs" element={<Blogs/>}/> 
          <Route path="/publish" element={<Publish/>} />
      </Routes>
    </BrowserRouter> 
    </RecoilRoot>
  )
}

export default App
