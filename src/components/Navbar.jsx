import React, { useState } from 'react';
import { LuMenuSquare } from "react-icons/lu";
import Button from '../ReuseableComponents/Button';

const Navbar = () => {
  const [IsMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen)
  }
  return (
    <div>
        <nav className='flex items-center justify-between bg-black px-[48px]'>
            <div className='flex items-center justify-between text-white font-bold text-[24px]'>Startup 3</div>
            <ul className={`absolute lg:static lg:bg-transparent lg:h-auto lg:p-0 lg:flex-row lg:text-[#808080] h-[50vh] top-[60px] right-0 p-12 flex flex-col bg-[#1E0E62] lg:flex items-center justify-center gap-5 text-[#808080] ${IsMenuOpen? "flex":"hidden"}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/subscribe">Subscribe</a></li>
                <li><a href="/features">Features</a></li>
                <li><a href="/startupthree">Start3</a></li>
                <Button
                btntext="Sign up"
                className="bg-[#482BE7]"
                />
            </ul>
            <div onClick={toggleMenu} className='lg:hidden text-white'>
            <LuMenuSquare className='size-10'/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar