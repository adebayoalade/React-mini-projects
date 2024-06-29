import React from 'react';
import { LuMenuSquare } from "react-icons/lu";
import Button from '../ReuseableComponents/Button';

const Navbar = () => {
  return (
    <div>
        <nav className='flex items-center justify-between'>
            <div className='flex items-center justify-between text-white font-bold text-[24px]'>Startup 3</div>
            <ul className='hidden lg:flex items-center justify-between gap-6'>
                <li><a href="/">Subscribe</a></li>
                <li><a href="/">Features</a></li>
                <Button
                btntext="Sign up"
                className="bg-[#482BE7]"/>
            </ul>
            <div className='lg:hidden '>
            <LuMenuSquare className='size-10'/>
            </div>
        </nav>
    </div>
  )
}

export default Navbar