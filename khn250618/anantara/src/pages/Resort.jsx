// Resort.jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function Resort() {
  return (
    <div className='relative h-200 w-full text-white bg-cover bg-center rounded-3xl opacity-90 bg-[url(https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-dhigu-maldives-resort/the-resort/anantara_dhigu_two_bedroom_family_pool_villa_aerial_984x532.jpg)]'>
      <div className="absolute bottom-10 left-10 flex flex-col items-start gap-10 w-100">
        <h2 className='text-5xl'>
          Your Private<br />
          Sanctuary Awaits
        </h2>
        <p className='text-gray-50'>
          Where the ocean breeze whispers through ancient cliffs, and timeless elegance reveals itself in every curve, every detail, and every moment.
          Here, nature’s rhythm and refined design come together to create a sanctuary unlike any other — serene, soulful, and effortlessly luxurious.
        </p>
        <Link to="/booking">
          <button className='text-sm bg-white rounded-full text-black px-8 py-4 cursor-pointer'>
            Booking Now
          </button>
        </Link>

      </div>

      <div className="absolute bottom-10 right-10 flex gap-4 items-end">
        <div className="flex flex-col gap-2 w-60">
          <p className='p-4 border rounded-lg backdrop-filter-[blur(2px)]'>
            Where Ocean Breeze Meets Timeless Serenity</p>
          <p className='p-4 border rounded-lg backdrop-filter-[blur(2px)]'>
            A Destination, Designed For The Senses</p>
          <p className='p-4 border rounded-lg backdrop-filter-[blur(2px)]'>
            More Than A Stay – Some Story To Live</p>
        </div>

        <div className="flex flex-col gap-4 w-80 p-4 border rounded-lg backdrop-filter-[blur(2px)]">
          <img className='w-100 rounded-xl'
            src='https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-dhigu-maldives-resort/image/dhigu/anantara_dhigu_maldives_resort_guest_room_over_water_suite_aerial_984x532.jpg' />
          <p className='text-lg'>
            We Believe Ture<br />
            Indulgence Is Personal
          </p>
          <p className='text-sm text-gray-50'>
            At Anantara, every journey is crafted to reflect your preferences, your pace, and your purpose — never a one-size-fits-all experience.
          </p>
        </div>
      </div>
    </div>
  )
}
