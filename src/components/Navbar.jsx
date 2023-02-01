import React, { useState } from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaInstagram } from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handelNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='justify-between flex items-center h-20 px-4 absolute z-10 text-white w-full  '>
        <div>
            <h1 onClick={handelNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>
        </div>
            <ul className='hidden md:flex'>
                <li className='cursor-pointer'>home</li>
                <li className='cursor-pointer'>distinations</li>
                <li className='cursor-pointer'>travel</li>
                <li className='cursor-pointer'>view</li>
                <li className='cursor-pointer'>book</li>
            </ul>
            <div className='hidden md:flex'>
                <BiSearch className='mr-2' size={20}/>
                <BsPerson size={20}/>
            </div>
            {/*hamburger*/}

            <div onClick={handelNav } className='md:hidden z-10  '> 
            {nav ? <AiOutlineClose className='text-black' size={20}/> : <HiOutlineMenuAlt4 size={20}/>}
                
            </div>

            {/*mobile menu dropdown*/}
            <div onClick={handelNav} className={nav ? 'absolute left-[0] top-0 w-full text-black bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                <ul>
                    <h1>BEACHES.</h1>
                <li className='border-b '>home</li>
                <li className='border-b '>distinations</li>
                <li className='border-b '>travel</li>
                <li className='border-b '>view</li>
                <li className='border-b '>book</li>
                <div className='flex flex-col '>
                    <button className='my-6'>search</button>
                    <button>acount</button>
                </div>
                <div className='flex justify-between my-6'>
                    <FaFacebook className='icon'/>
                    <FaTwitter className='icon'/>
                    <FaYoutube className='icon'/>
                    <FaPinterest className='icon'/>
                    <FaInstagram className='icon'/>
                </div>
                </ul>
            </div>
    </div>
  )
}

export default Navbar
