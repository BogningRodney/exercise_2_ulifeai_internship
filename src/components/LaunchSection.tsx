import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const LaunchSection = () => {
  return (
    <section className='px-10'>
        <div className='px-6'>
        <h3 className='text-4 leading-6 text-start text-[#6941C6] my-4'>Launch faster</h3>
        <h1 className='font-semibold text-3xl text-start text-[#101828] mb-4'>Build something great</h1>
            <p className='font-normal text-lg text-start text-[#475467]'>
                We’ve done all the heavy lifting so you don’t have to — get all the data you need to launch and 
                grow your business faster.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 flex flex-col sm:flex-row items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="item max-[343px] my-12">
                    
                    <h1 className='text-center text-5xl font-semibold text-[#7F56D9]'>4,000+</h1>
                    <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Return on investment</h3>
                    <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4' >
                        Our customers have reported an average of ~600% ROI.
                    
                    </p>
                </div>

                <div className="item max-[343px] my-12">
                    
                    <h1 className='text-center text-5xl font-semibold text-[#7F56D9]'>600%</h1>
                    <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                    <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4' >
                        Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                        the same page and in the loop.
                    
                    </p>
                </div>

                <div className="item max-[343px] my-12">
                    
                    <h1 className='text-center text-5xl font-semibold text-[#7F56D9]'>10k</h1>
                    <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Global downloads</h3>
                    <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4' >
                        Our app has been downloaded over 10k times.
                    </p>
                </div>

                <div className="item max-[343px] my-12">
                    
                    <h1 className='text-center text-5xl font-semibold text-[#7F56D9]'>200+</h1>
                    <h3 className='font-medium text-lg text-center text-[#101828] my-4'>2-star reviews</h3>
                    <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4' >
                        We’re proud of our 5-star rating with over 200 reviews.
                    
                    </p>
                </div>

                

            </div>

            <div className='flex justify-center'>
                <Image src="/img/Image.png" width={560} height={560} alt='' className='hidden sm:block'/>
                <Image src="/img/Image (1).png" width={343} height={240} alt='' className='sm:hidden'/>
            </div>
        </div>

        <div className='flex flex-col justify-center mx-auto my-20'>
                <h1 className='font-semibold text-3xl text-center text-[#101828] m-6'>Frequently asked questions</h1>
                <p className='font-normal text-lg text-center text-[#475467]'>
                Join over 4,000+ startups already growing with Untitled.
                </p>
                
                <div className='flex mb-20 my-4 flex-col lg:flex-row  mx-auto '>
                    <Button className=' rounded-[8px] border  my-2  gap-3 bg-white border-[#D0D5DD] text-[#344050] font-semibold text-[18px] leading-[28px] lg:w-[143px] lg:my-0 w-80 h-12 sm:mx-2'> Get started</Button>
                    <Button className=' border rounded-[8px] gap-3 text-white font-semibold text-[18px]  bg-blue-400 lg:w-[143px] w-80 h-12 bg-[#7F56D9]'>Learn more</Button>
                </div>
            
            </div>
    </section>
  )
}

export default LaunchSection
