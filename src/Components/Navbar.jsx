import React from 'react'
import {useState} from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { CgPlayButton } from "react-icons/cg";

function Navbar() {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                <RxHamburgerMenu size={28} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                Beast <span className='font-bold'>Eats</span>
            </h1>
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>  
        </div>


        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <FaSearch size={20} />
            <input className='bg-transparent p-2 focus:outline-none w-full' type="text" placeholder='Ne yemek istersiniz?' />
        </div>

        <button className='bg-black text-white hidden md:flex items-center py-2 p-4 rounded-full'>
            <FaShoppingCart size={20} className='mr-2' /> Cart
        </button>

        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : '' }
        

        <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300' }>
            <IoMdClose onClick={()=> setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            <h2 className='text-2xl p-4'>Canavar <span className='font-bold'>Yemek</span></h2>
            <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex'><CgPlayButton size={22} className='mr-4' /> Orders</li>
                    <li className='text-xl py-4 flex'><CgPlayButton size={25} className='mr-4' /> Favorites</li>
                    <li className='text-xl py-4 flex'><CgPlayButton size={25} className='mr-4' /> Wallet</li>
                    <li className='text-xl py-4 flex'><CgPlayButton size={25} className='mr-4' /> Help</li>
                    <li className='text-xl py-4 flex'><CgPlayButton size={25} className='mr-4' /> Promotions</li>
                    <li className='text-xl py-4 flex'><CgPlayButton size={25} className='mr-4' /> Best Ones</li>
                    <li className='text-xl py-4 flex'><CgPlayButton size={25} className='mr-4' /> Invite Friends</li>
                </ul>
            </nav>
        </div>
    </div>


    
  )
}

export default Navbar
