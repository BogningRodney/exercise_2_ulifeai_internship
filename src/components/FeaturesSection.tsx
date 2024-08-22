import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const FeaturesSection = () => {
  return (
    <section className='p-11'>
        <div className='mb-12'>
            <h3 className='text-sm leading-xl font-medium text-center text-[#6941C6] my-2'> Features </h3>
            <h1 className='font-semibold text-3xl text-center text-[#101828] my-6'>Cutting-edge features for advanced analytics</h1>
            <p className='font-normal text-lg text-center text-[#475467]'>
                Powerful, self-serve product and growth analytics to help you convert, engage, 
                and retain more users. Trusted by over 4,000 startups.
            </p>
            <Image src="/img/Content (1).png" width={375} height={360} alt='' className='sm:hidden mt-12 mx-auto'/>
            <Image src="/img/Content (2).png" width={1216} height={558} alt='' className='hidden sm:block mt-12 mx-auto'/>
        </div> 
        <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="item max-[343px]">
                <div className='w-10 h-10 rounded-3xl border-2 bg-[#F4EBFF] mx-auto flex items-center justify-center my-4'>  
                 <Image src="/img/mail.png" width={20} height={20} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                
                <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4' >
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                    the same page and in the loop.
                
                </p>
                <div className='text-[#6941C6] w-auto flex items-center justify-center mx-auto gap-3'>
                    <span className='text-3 leading-[18px] flex text-center flex-row'><a href="#"> Learn more </a><ArrowRight className='w-[16px] h-[16px]'/></span>
                </div>
                
            </div>

            <div className="item max-[343px]">
                <div className='w-10 h-10 rounded-3xl border-2 bg-[#F4EBFF] mx-auto flex items-center justify-center my-4'>  
                 <Image src="/img/bar-chart-2.png" width={20} height={20} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                
                <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4'>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                    the same page and in the loop.
                   
                </p>
                <div className='text-[#6941C6] w-auto flex items-center  justify-center mx-auto gap-3'>
                    <span className='text-3 leading-[18px] flex text-center flex-row'><a href="#"> Learn more </a><ArrowRight className='w-[16px] h-[16px]'/></span>
                </div>
                
            </div>

            <div className="item max-[343px]">
                <div className='w-10 h-10 rounded-3xl border-2 bg-[#F4EBFF] mx-auto flex items-center justify-center my-4'>  
                 <Image src="/img/zap.png" width={20} height={20} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                
                <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4'>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                    the same page and in the loop.
                </p>

                <div className='text-[#6941C6] w-auto flex items-center justify-center mx-auto gap-3'>
                    <span className='text-3 leading-[18px] flex text-center flex-row'><a href="#"> Learn more </a><ArrowRight className='w-[16px] h-[16px]'/></span>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default FeaturesSection
