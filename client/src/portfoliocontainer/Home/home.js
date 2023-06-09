import React from 'react'
import Header from './Header/Header'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './home.css'

export default function home() {
  return (
    <div className='home-container'>
        <Header/>
        <Profile/>
        <Footer/>
    </div>
  )
}
