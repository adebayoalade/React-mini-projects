import React from 'react';
import donoughtImage from '../assets/donought-image.png';
import iconImage from '../assets/icon-image.png';
import Button from '../ReuseableComponents/Button';


const StartupThree = () => {
  return (
    <div className='w-full mx-auto px-[35px] md:px-20 lg:px-12 py-10 md:py-16 lg:py-10 h-screen'>
     <main className='grid grid-rows-2 lg:grid-cols-2 gap-40 w-fit'>
       <div>
        <h1 className='w-[90%] font-medium text-[38px] text-[#1E0E62] leading-tight mb-10 text-center lg:text-start'>A high-quality solution for those who want a beautiful startup website quickly</h1>
        <div>
            <form className='flex flex-col'>
                <div className='justify-start'>
                <input type="email" placeholder='Your email' required className='px-5 py-2 rounded-full tracking-wide text-[#808080] placeholder:text-[#808080] placeholder:text-base font-normal text-[16px] bg-transparent border border-[#808080] w-[90%] lg:w-[80%] mb-6'/>
                <input type="password" placeholder='Your password' required className='px-5 py-2 rounded-full tracking-wide text-[#808080] placeholder:text-[#808080] placeholder:text-base font-normal text-[16px] bg-transparent border border-[#808080] w-[90%] lg:w-[80%] mb-6'/>
                </div>
                <div>
                  <Button
                  btntext="Sign in"
                  className="bg-[#25DAC5] py-2 text-white placeholder:text-[#808080] placeholder:text-base font-normal text-[16px] w-[90%] lg:w-[80%] mb-3"
                  />
                <p className='text-[14px] text-[#808080] px-7'>By signing up, you agree to the Terms of Service</p>
                </div>
            </form>
        </div>
       </div>
       <div className='relative'>
        <img src={donoughtImage} alt="mask" className='w-full h-[265px]'/>
        <img src={iconImage} alt="icon-fill" className='w-[70px] h-[70px] absolute lg:top-[24%] top-[20%] left-[43%]  hover:scale-110 shadow-black cursor-pointer'/>
        <p className='text-[#808080] text-[16px] lg:text-[18px] lg:w-[350px] mt-5 w-full'>
        We made it so beutiful and simple. It combines landings, pages, blogs and shop screens. It is definitely the tool you need in your collection! 
        </p>
       </div>
     </main>
    </div>
  )
}

export default StartupThree