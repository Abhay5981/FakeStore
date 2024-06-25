import React, { useState } from 'react'
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiSignInLight } from "react-icons/pi";
import { MdAddShoppingCart } from "react-icons/md";

const Header = () => {

  const[toggle, setToggle]= useState(false)

const showSideMenu =() =>{
  setToggle(true)
}

const hideSideMenu = () => {
  setToggle(false)
}

const links = [
  {
    icon : <IoIosSearch />,
    name: "Search"
  },
  {
    icon : <BiSolidOffer />,
    name: "Offers"
  },
  {
    icon : <IoIosHelpCircleOutline /> ,
    name: "Help"
  },
  {
    icon : <PiSignInLight/>,
    name: "Sign In"
  },
  {
    icon : <MdAddShoppingCart/> ,
    name: "Cart"
  },
]

  return (
    <>
    <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
      opacity: toggle ? 1 : 0, 
      visibility: toggle?"visible": "hidden"
    }}>
      <div  onClick={(e) =>{
         e.stopPropagation();
      }} className='w-[500px] bg-white h-full absolute duration-
      [500ms]'
        style={{
          left : toggle ? "0%" : "-100%"
        }}
      ></div>

    </div>
    <header className='p-2 shadow-xl text-gray-700 sticky top-0 bg-white z-[9999]'>
      <div className='max-w-[1200px] mx-auto flex items-center'>
       <div className='w-[100px]'>
        <img className='w-full' src="images/logo.png" alt="" />
       </div>
       <div className=''>
            <span className='font-bold  border-b-[3px] border-[black] how'> Begur </span> 
            Bengaluru, Bengaluru India <RxCaretDown onClick={showSideMenu} fontSize={25} className='inline font-bold font-[.9rem] text-[#fc8019] cursor-pointer'/>
       </div>
       <nav className='flex list-none gap-10 ml-auto font-semibold text-1 '>

          {
            links.map(
              (link, index) =>{
                return <li key={index} className='flex hover:text-[#fc8019] items-center gap-2 cursor-pointer'>  
                  {link.icon}
                  {link.name}
                </li>
              }
            )
          }

        
       </nav>
      </div>
  
    </header>

    </>
  )
}

export default Header
