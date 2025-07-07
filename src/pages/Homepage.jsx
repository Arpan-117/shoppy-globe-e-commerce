import React from 'react'
import ProductList from '../components/ProductList'

function Homepage() {
  return (
    <>

        {/* Hero Section */}
        {/* <div className="bg-[url('src/assets/hero_banner.png')] bg-cover h-[28rem] flex items-center"> */}
        <div>
            <div className="md:bg-[url('src/assets/banner.png')] md:bg-cover md:h-[500px] md:w-full"></div>
        {/* <div className='w-1/2 px-16'>

            <div>
                <h1 className='font-semibold text-7xl py-8 text-[#DAC0A3]'>Shoppy Globe</h1>
            </div>

            <div>
                <p className='font-semibold text-2xl py-2 text-[#102C57]'>
                "Everything You Need. Just a Click Away."
                </p>
                <p className='text-lg py-2 text-[#102C57]'>
                From fashion to gadgets—shop effortlessly, anytime.
                </p>
            </div>
        </div> */}
    </div>

    {/* Products Section */}
    <div className='px-16 pt-16'>
        <ProductList />
    </div>
    </>
  )
}

export default Homepage