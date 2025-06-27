// Dining.jsx

import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Dining() {
  const items = [
    {
      title: 'Dine by Design',
      desc: 'From a candlelit dinner on a cliffside pavilion to a starlit beach picnic surrounded by torches, our “Dine by Design” experience.',
    },
    {
      title: 'Local Living Encounters',
      desc: 'Step into the daily life of a local village, learn the art of traditional weaving, or harvest spices alongside a farmer in the morning sun.',
    },
    {
      title: 'Sunrise Awakening Rituals',
      desc: 'Begin your morning with guided yoga on a cliff overlooking the sea, followed by a nourishing herbal elixir.'
    }
  ]

  return (
    <div className='flex gap-30'>
      <div className="flex flex-col gap-15 flex-1">
        <div className="flex flex-col gap-6 w-100">
          <h2 className='text-5xl'>
            Only Here,<br />
            Only With Us
          </h2>

          <p className='text-gray-600'>
            Discover experiences you won’t find anywhere else — thoughtfully designed to immerse you in the heart of the destination. These aren’t just activities, but soulful stories waiting to be lived, told, and remembered.
          </p>
        </div>

        <div className="border-t border-gray-300">
          {
            items.map((item, index) => (
              <Link to={"/booking"} key={index}>
                <div className="group flex justify-between items-center gap-40 px-5 py-8 border-b border-gray-300 hover:bg-gray-50 cursor-pointer">
                  <div className="flex flex-col gap-5">
                    <h3 className='text-2xl'>{item.title}</h3>
                    <p className='text-gray-400'>{item.desc}</p>
                  </div>

                  <div className="p-2 bg-gray-100 rounded-full group-hover:bg-slate-500">
                    <IoIosArrowRoundForward size={20} className='group-hover:text-white' />
                  </div>
                </div>
              </Link>
            )
            )
          }
        </div>
      </div>

      <div className="flex-1 h-200 w-full bg-cover bg-center rounded-3xl bg-[url(https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-convento-di-amalfi-grand-hotel/03_dining__ok/03_dei-cappuccini-bar/anantara_convento_di_amalfi_grand_hotel_dei_cappuccini_bar_944x510.jpg)]">
      </div>
    </div>
  )
}
