// BestResorts.jsx

import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoMdShare } from "react-icons/io";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function BestResorts() {
  return (
    <div className='flex flex-col items-center gap-15'>
      <h2 className='text-5xl'>Best Resorts Highlight</h2>

      <div className="flex justify-between w-full rounded-3xl overflow-hidden">
        <div className="relative h-180 w-full text-white bg-cover bg-center opacity-90 bg-[url(https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-kihavah-maldives-villas/accommodation/details-page/one-bedroom-family-beach-pool-villa/anantara_kihavah_1bedroom_beach_pool_villa_exterior_daylight_880x475px.jpg)]">

          {/* 위치 */}
          <div className="absolute top-5 left-5 flex items-center gap-4 p-3 border rounded-xl backdrop-filter-[blur(2px)]">
            <FaMapMarkerAlt size={30} />
            <div className="">
              <p className='font-medium'>Bali</p>
              <p className=' text-gray-300'>Indonesia</p>
            </div>
          </div>

          {/* 이전 버튼 */}
          <div className="absolute top-1/2 left-5 border rounded-full w-12 h-12 cursor-pointer flex items-center justify-center backdrop-filter-[blur(2px)]">
            <IoIosArrowRoundBack size={30} />
          </div>

          {/* 다음 버튼 */}
          <div className="absolute top-1/2 right-5 border rounded-full w-12 h-12 cursor-pointer flex items-center justify-center backdrop-filter-[blur(2px)]">
            <IoIosArrowRoundForward size={30} />
          </div>

          {/* 하단 카드 */}
          <div className="absolute bottom-0 inset-x-0 flex gap-6 p-5 m-5 border rounded-xl backdrop-filter-[blur(2px)]">
            <img className='rounded-xl w-120 h-40'
              src="https://assets.anantara.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/anantara/images/anantara-kihavah-maldives-villas/accommodation/room-type/villas/anantara-kihavah-over-water-villa-bathroom-view.jpg" />

            <div className="flex flex-col justify-between">
              <h4 className='text-xl'>Ocean View Pool Suite</h4>

              <p className='text-gray-200'>Awake to the sound of waves and bask in sunsets from your private deck — effortless serenity, elevated by modern elegance.</p>

              <div className="border rounded-full w-10 h-10 cursor-pointer flex items-center justify-center backdrop-filter-[blur(2px)]">
                <IoIosArrowRoundForward size={30} />
              </div>
            </div>
          </div>

        </div>

        <div className="flex flex-col justify-between bg-gray-100 px-10 py-12">
          {/* 타이틀 */}
          <div className="flex flex-col gap-4">
            <h3 className='text-2xl'>Ocean View Pool Suite</h3>
            <p className='text-gray-400'>Wake up to panoramic views of the open ocean from your private sanctuary.
              The Ocean View Pool Suite blends modern sophistication with natural textures.</p>
          </div>

          {/* 정보 */}
          <div className="flex flex-col gap-6">
            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2 flex-1">
                <p className='text-gray-400'>Size</p>
                <p>120spm</p>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <p className='text-gray-400'>Highlights</p>
                <p>Floor-to-ceiling glass panels, deep-soaking tub, outdoor rain shower</p>
              </div>
            </div>

            <div className="flex justify-between gap-10">
              <div className="flex flex-col gap-2 flex-1">
                <p className='text-gray-400'>Type</p>
                <p>One-bedroom suite with private plunge pool</p>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <p className='text-gray-400'>View</p>
                <p>Uninterrupted views of the Indian Ocean</p>
              </div>
            </div>

            <p className='text-gray-400'>
              Each guest experience is unique, but the sense of connection, care, and wonder is universal.
              Discover what makes a stay at Anantara truly unforgettable.
            </p>
          </div>

          {/* 리뷰 */}
          <div className="relative flex items-center justify-between h-10">
            <div className="flex items-center gap-2">
              <FaStar />
              <span>4.8 Reviews</span>
            </div>

            <div>
              <img className="absolute top-0 right-0 rounded-full w-10 h-10" src="https://t1.daumcdn.net/cfile/tistory/2305624B58C6C74B18" />
              <img className="absolute top-0 right-8 rounded-full w-10 h-10" src="https://blog.kakaocdn.net/dn/o7Kd0/btqS3JdqATC/AM4xmoRyw2RM0ZQt8CrKXK/img.png" />
              <img className="absolute top-0 right-16 rounded-full w-10 h-10" src="https://i.namu.wiki/i/xNDvmGKuWuiLth1LWmd7XbkZD94TZaqsBqntKORBVpsuspvaAlcCyrRFPRUW1QUfJqLgrthPTiHMbySK_syrsg.webp" />
              <img className="absolute top-0 right-24 rounded-full w-10 h-10" src="https://i.namu.wiki/i/w-Ch2HaENYZZVH1T2R3ZAUzPL7uG34qmfLPrK85ulUV0hd-_cJX2lw8S0sKGr_tTokPOU1e5PIMwz9IdcrrwlQ.webp" />
            </div>
          </div>

          {/* 버튼 */}
          <Link to="/booking" className='flex gap-5'>
            <button className='flex-1  bg-white w-full border border-gray-300 rounded-full text-black px-8 py-3 font-medium cursor-pointer'>
              Booking Now
            </button>

            <div className="border border-gray-300 bg-white rounded-full w-12 h-12 cursor-pointer flex items-center justify-center backdrop-filter-[blur(2px)]">
              <IoMdShare size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
