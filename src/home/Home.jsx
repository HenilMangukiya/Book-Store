import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner.jsx'
import OtherBooks from './OtherBooks.jsx'
import Review from './Review.jsx'

const Home = () => {
  return (
    <div >
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>
      <OtherBooks/>
      <Review/>
      
    </div>
    
  )
}

export default Home
