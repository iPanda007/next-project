import React from 'react'

const Hero = ({
    heading, message
}) => {
  
  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-cover mb-12  bg-center custom-img'>
        <div className='absolute top-0 left-0 right-0 bottom-0 opacity-20 bg-black z-[2]'/>
        <div className='p-5 text-white z-[2] ml-[-10rem] mt-[-10rem]'>
            <h1 className='text-5xl font-bold'>{heading}</h1>
            <p className='py-5 text-xl'>{message}</p>
            <button className='px-8 py-2 border'>Book</button>
        </div>
    </div>
  )
}

export default Hero
