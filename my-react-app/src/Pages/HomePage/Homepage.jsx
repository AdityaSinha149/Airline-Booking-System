import React from 'react'
import './Homepage.css'
import Navbar from '../../Components/Navbar'
import SearchBar from '../../Components/SearchBar'
function Homepage() {
  return (
    <div>
        <div className='bg-[#605DEC] h-12 text-white flex justify-center items-center'>
        Join Tripma today and save up to 20% on your flight using code TRAVEL at checkout. Promotion valid for new users only.
      </div>
      <Navbar />
      <div className="w-full h-screen bg-[url('./src/Images/Homepage/world.png')] bg-cover bg-center">
        <div>
          <div className='flex flex-col  items-center h-screen'>

            <div className='pt-30 text-9xl font-bold bg-gradient-to-r from-[#438DF6] via-[#7C5DF9] to-[#438DF6] bg-clip-text text-transparent animate-gradient'>
              It's more than
            </div>

            <div className='pb-20 text-9xl font-bold bg-gradient-to-r from-[#438DF6] via-[#7C5DF9] to-[#438DF6] bg-clip-text text-transparent animate-gradient'>
              just a trip
            </div>
            <SearchBar></SearchBar>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Homepage
