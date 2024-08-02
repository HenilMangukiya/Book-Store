import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import {FaStar} from 'react-icons/fa6'

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center leading-snug mb-10'>Our Customers</h2>
      <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                <div className='mt-7'>
                    <p>I’m so happy I found Book Store. The selection is vast and the condition of the books is always as described.</p><br /><br />
                    <h5 className='text-lg font-medium'>Ketanbhai Mangukiya</h5>
                    <p className='text-base'>Founder & managing director of BigScal Technologies Pvt. Ltd.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                <div className='mt-7'>
                    <p>Selling my books on Book Store was hassle-free. The platform is easy to use and the payments were processed quickly. Great experience overall!</p> <br /><br />
                    <h5 className='text-lg font-medium'>Payal Sharma</h5>
                    <p className='text-base'>Senior HR Manager BigScal Technologies Pvt. Ltd.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                <div className='mt-7'>
                    <p>I've been using Book Store for a while now and I'm consistently impressed. The platform makes it incredibly easy to list my books and the customer support is always helpful.</p><br />
                    <h5 className='text-lg font-medium'>Viral Dhameliya</h5>
                    <p className='text-base'>Collobrative partner of BigScal Technologies Pvt. Ltd.</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>

                </div>

                <div className='mt-7'>
                    <p>As a book lover, I've found some real treasures on Book Store. The prices are great, and the condition of the books is always better than expected. I love supporting a platform that makes it easy to buy and sell books.</p><br />
                    <h5 className='text-lg font-medium'>Smit Mangukiya</h5>
                    <p className='text-base'>Founder & managing director of Upmark Solutions</p>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
    </div>
  )
}

export default Review
