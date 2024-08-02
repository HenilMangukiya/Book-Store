import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'


const SingleBook = () => {
  const {_id, bookTitle, imageURL, authorName, category, bookDescription} = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24 flex flex-col md:flex-row'>
      <img src={imageURL} alt="" className='h-96 mr-4 ' />
      <div className='flex flex-col'>
      <h2 className='text-4xl font-bold text-blue-700 pl-4 order-2'>
          {bookTitle}
        </h2>
        <h2 className='text-2xl pl-4 order-2'>{authorName}</h2>
        <h2 className='text-1xl pl-4 order-2'>{category}</h2>
        <h2 className='text-1xl pl-4 order-2'>{bookDescription}</h2>
        <div className='order-2'>
        <Link to="/shop" className='mt-12 block '><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300 order-2'>Buy Now</button></Link>
        </div>
      </div>
      
    </div>
  )
}

export default SingleBook
