import React from 'react'
import NavBar from './Navbar'
import Sidebar from './Sidebar'
import Hero from './Hero'

function Home() {
  return (
    <div>
        <NavBar />
        <div className='conatiner w-full flex'>
          <div className='w-80 bg-slate-100 fixed left-0 h-screen'>
          <Sidebar />
          </div>
          <div className="ml-80 w-full">
          <Hero  />
          </div>
          
       
        </div>
    </div>
  )
}

export default Home