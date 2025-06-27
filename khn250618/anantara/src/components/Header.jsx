// Header.jsx

import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch, CiHeart } from "react-icons/ci";

export default function Header() {
  return (
    <header className='flex items-center justify-between px-8 py-2 bg-gray-100 rounded-full'>
      <h1>
        <Link to="/">
          <img className='invert w-30'
            src='https://assets.anantara.com/image/upload/q_auto,f_auto/media/minor/anantara/images/anantara-dhigu-maldives-resort/logos/property-logo/anantara_dhigu_maldives_resort_2024_360x140.png' />
        </Link>
      </h1>

      <div className="">
        <ul className='flex gap-10 text-gray-400'>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/">ABOUT</Link>
          </li>
          <li className='text-gray-600 underline'>
            <Link to="/">THE RESORT</Link>
          </li>
          <li>
            <Link to="/best">FAQ</Link>
          </li>
          <li>
            <Link to="/dine">CONTACT US</Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-3">
        <input type='text' placeholder='search here' className='bg-white rounded-full px-4 py-1' />
        <div className='bg-white rounded-full w-8 h-8 cursor-pointer flex items-center justify-center'><CiSearch size={20} /></div>
        <div className='bg-white rounded-full w-8 h-8 cursor-pointer flex items-center justify-center'><CiHeart size={20} /></div>

        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">😁</div>
          <div className="flex flex-col">
            <div className="text-sm">Eugene Mendes</div>
            <p className='text-sm text-gray-600'>353Ponits</p>
          </div>
        </div>

      </div>
    </header>
  )
}
