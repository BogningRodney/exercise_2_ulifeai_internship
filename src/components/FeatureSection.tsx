import Image from 'next/image'
import React from 'react'

const FeatureSection = () => {
  return (
    <section className='p-4'>

        <div className='my-6 max-w-[768px] mx-auto'>
            <h3 className='text-4 leading-6 text-center text-[#6941C6] my-6'>Features</h3>
            <h2 className='font-semibold text-3xl sm:text-4xl leading-11 text-center my-6 '>Analytics that feels like it’s from the future</h2>
            <p className='font-normal text-xl leading-8 text-center text-[#667085] '>Powerful, self-serve product and growth analytics to help you convert, engage, 
                and retain more users. Trusted by over 4,000 startups.</p>
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
            </div>

            <div className="item max-[343px]">
                <div className='w-10 h-10 rounded-3xl border-2 bg-[#F4EBFF] mx-auto flex items-center justify-center my-4'>  
                 <Image src="/img/smile.png" width={20} height={20} alt='' className='sm:w-8 sm:h-auto my-4'/>
                </div>
                
                <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4'>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                    the same page and in the loop.
                </p>
            </div>

            <div className="item max-[343px]">
                <div className='w-10 h-10 rounded-3xl border-2 bg-[#F4EBFF] mx-auto flex items-center justify-center my-4'>  
                 <Image src="/img/command.png" width={20} height={20} alt='' className='sm:w-8 sm:h-auto my-4'/>
                </div>
                
                <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4'>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                    the same page and in the loop.
                </p>
            </div>

            <div className="item max-[343px]">
                <div className='w-10 h-10 rounded-3xl border-2 bg-[#F4EBFF] mx-auto flex items-center justify-center my-4'>  
                 <Image src="/img/message-circle.png" width={20} height={20} alt='' className='sm:w-8 sm:h-auto my-4'/>
                </div>
                
                <h3 className='font-medium text-lg text-center text-[#101828] my-4'>Share team inboxes</h3>
                <p className='font-normal text-4 text-center leading-6 text-[#475467] m-4'>
                    Whether you have a team of 2 or 200, our shared team inboxes keep everyone on 
                    the same page and in the loop.
                </p>
            </div>
        </div>
    </section>
  )
}

export default FeatureSection
