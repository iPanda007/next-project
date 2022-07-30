import Link from 'next/link'
import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Navbar = () => {
    
    const [nav,setNav] = useState(false);

    const handleNav = ()=>{
        setNav(!nav)
    }

    const renderLaptopMenu = (
        <ul className='hidden sm:flex '>
        <li className='p-4'>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-4'>
            <Link href='/#gallery'>Gallery</Link>
        </li>
        <li className='p-4'>
            <Link href='/portfolio'>Work </Link>
        </li>
        <li className='p-4'>
            <Link href='/contact'>Contact</Link>
        </li>
    </ul>
    )
    const renderMobileMenu = (
        <ul>
        <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/'>Home</Link>
        </li>
        <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/#gallery'>Gallery</Link>
        </li>
        <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/portfolio'>Work </Link>
        </li >
        <li className='p-4 text-4xl hover:text-gray-500'>
            <Link href='/contact'>Contact</Link>
        </li>
    </ul>
    )
    const renderMenuButton = (
         <div className="block sm:hidden z-30"
          onClick={handleNav}
         >
            {
                  nav?(<AiOutlineClose size={20} />):(<AiOutlineMenu size={20} />)
            }
         </div>
    )
  return (
    <div className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className="container m-auto flex justify-between items-center p-4 text-white ">
            <Link href='/'>
            <h1>Capture</h1>
            </Link>
            {renderLaptopMenu}
            {/* Mobile Button */}

            {renderMenuButton}
         
            {/* Mobile Menu */}
            <div className={
            nav ?"sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300":
            "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
            }>
              {renderMobileMenu}
            </div>
        </div>
    </div>
  )
}

export default Navbar
