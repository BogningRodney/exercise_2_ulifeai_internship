import Image from 'next/image'
import React from 'react'

const LogosSection = () => {
  return (
    <section className='flex flex-col justiffy-center border-b m-4 pb-20'>
        <h3 className='font-medium text-base text-center mb-6 text-[#667085]'>Join 4,000+ companies already growing</h3>
        <div className="logos-container grid grid-cols-2 place-content-center gap-4 sm:grid-cols-1 sm:flex mx-auto sm:gap-12">
            <div className="logo flex w-40 items-center">
                <span><Image src="/img/Logomark (1).png" width={30} height={32} alt='' className='sm:w-8 sm:h-auto'/></span>
                <span className='text-6 sm:text-2xl text-[#101828] font-bold mx-2'>Layers</span>
            </div>
            <div className="logo flex w-40 items-center">
                <span><Image src="/img/Logomark (3).png" width={32} height={32} alt='' className='sm:w-8 sm:h-auto'/></span>
                <span className='text-6 sm:text-2xl text-[#101828] font-bold mx-2'>Circooles</span>
            </div>
            <div className="logo flex w-40 items-center">
                <span><Image src="/img/Logomark (5).png" width={30} height={31} alt='' className='sm:w-8 sm:h-auto'/></span>
                <span className='text-6 sm:text-2xl text-[#101828] font-bold mx-2'>Quotient</span>
            </div>
            <div className="logo flex w-40 items-center">
                <span><Image src="/img/Logomark (2).png" width={29} height={44} className='sm:w-6 sm:h-auto' alt=''/></span>
                <span className='text-6 sm:text-2xl text-[#101828] font-bold mx-2'>Sisyphus</span>
            </div>
            <div className="logo flex w-40  items-center">
                <span><Image src="/img/Logomark (4).png" width={30} height={31} alt='' className='sm:w-8 sm:h-auto'/></span>
                <span className='text-6 sm:text-2xl text-[#101828] font-bold mx-2'>Catalog</span>
            </div>
            <div className="logo flex w-40  sm:hidden items-center ">
                <span><Image src="/img/Logomark (8).png" width={30} height={31}  alt=''/></span>
                <span className='text-6 text-[#101828] font-bold mx-2'>Hourglass</span>
            </div>
        </div>
    </section>
  )
}

export default LogosSection
