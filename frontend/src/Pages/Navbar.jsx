import React, { useState } from 'react'
import {logo} from '../assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <section>
    <div className='w-full py-2 px-2 flex justify-between items-center border-b shadow-xl'>
      <Link to='/'><img src={logo} alt='logo' className='w-24'/></Link>
      <Link to='/create' className='py-2 px-6 bg-[#6469ff] mr-8 rounded-md font-inter text-white'>Create</Link>
    </div>
    </section>
  )
}

export default Navbar
