import React from 'react'
import NavbarItems from './NavbarItems'

const Navbar = () => {
  return (
    <div className='w-full h-[60px] inset-0 z-50  p-4'>
        <div className='w-[50%] m-auto flex justify-between items-center '>
        <NavbarItems href={'/'} children={'Home'}/>
        <NavbarItems href={'/signup'} children={'Sign Up'}/>
        <NavbarItems href={'/login'} children={'Login'}/>   
        </div>
    </div>
  )
}

export default Navbar