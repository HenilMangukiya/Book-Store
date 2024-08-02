import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
      <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span className='text-blue-700 text-5xl'>for Best Prices </span></h2>
            <p className='md:w-4/5'><b>Discover a world of stories without breaking the bank. </b>Uncover hidden literary gems or sell your cherished collection to fellow book lovers. Our platform connects passionate readers with affordable books, making it easy to buy, sell, and rediscover your favorite authors.</p>
        </div>
        <div>
            <BannerCard/>
        </div>
      </div>
    </div>
  )
}

export default Banner
