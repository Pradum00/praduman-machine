import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div>
        <NavBar/>
        <div className="outlet" style={{marginTop:"60px"}}>
        <Outlet/>
      </div>
    </div>
  )
}
