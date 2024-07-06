import React from 'react'

const StartupTwo = () => {
  return (
    <div className='w-full mx-auto px-[35px] md:px-20 lg:px-28 py-10 md:py-16 lg:py-10 text-white h-screen bg-[#2F1893]'>
        <h1 className='mt-[20px] md:mt-16 text-5xl md:text-[50px] lg:text-[60px] text-center w-full m-auto leading-none font-bold'>Let’s make design
        fast and easy</h1>
        <p className='text-white lg:w-[40%] w-[90%] text-center mt-10 m-auto'>
        The most important part of the Startup is the samples. The samples form a set of 25 usable pages you can use as is or you can add new blocks from UI Kit.
        </p>
        <div className='flex  lg:flex-row flex-col items-center justify-center mt-12 lg:gap-2 gap-4'>
            <input type="email" placeholder='Your email'  className='px-8 py-2 lg:w-[30%] w-[70%] rounded-full bg-transparent border border-slate-400/25'/>
            <button className='px-8 py-2 bg-[#25DAC5] text-white rounded-full w-[70%] lg:w-[20%]'>Send</button>
        </div>
        <p className='text-center text-gray-400 mt-4 lg:text-[16px] text-[8px]'>By signing up, you agree to the Terms of Service</p>
        
    </div>
  )
}

export default StartupTwo