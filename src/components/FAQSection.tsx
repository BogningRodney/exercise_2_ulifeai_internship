import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const FAQSection = () => {
  return (
   <section className='p-12'>
        <div className='mb-12'>
            <h1 className='font-semibold text-3xl text-center text-[#101828] m-6'>Frequently asked questions</h1>
            <p className='font-normal text-lg text-center text-[#475467]'>
                Everything you need to know about the product and billing.
                
            </p>
        </div>
        <div className='max-w-[768px] mx-auto'>
            <div className='border-b pb-6'>
                <div className=' w-auto flex items-center justify-between mx-auto m-4'>
                   <h3 className='font-semibold text-base '>Is there a free trial available?</h3>
                   <Image src="/img/Icon wrap.png" width={24} height={26} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                <p className='font-normal text-lg text-start text-[#475467]'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call
                    to get you up and running as soon as possible
                </p>
            </div>

            <div className='border-b py-6'>
                <div className=' w-auto flex items-center justify-between mx-auto m-4'>
                   <h3 className='font-semibold text-base'>Can I change my plan later?</h3>
                   <Image src="/img/Icon wrap.png" width={24} height={26} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                <p className='font-normal text-lg text-start text-[#475467] hidden'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call
                    to get you up and running as soon as possible
                </p>
            </div>

            <div className='border-b py-6'>
                <div className=' w-auto flex items-center justify-between mx-auto m-4'>
                   <h3 className='font-semibold text-base '>What is your cancellation policy?</h3>
                   <Image src="/img/Icon wrap.png" width={24} height={26} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                <p className='font-normal text-lg text-start text-[#475467] hidden'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call
                    to get you up and running as soon as possible
                </p>
            </div>

            <div className='border-b py-6'>
                <div className=' w-auto flex items-center justify-between mx-auto m-4'>
                   <h3 className='font-semibold text-base'>Can other info be added to an invoice?</h3>
                   <Image src="/img/Icon wrap.png" width={24} height={26} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                <p className='font-normal text-lg text-start text-[#475467] hidden'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call
                    to get you up and running as soon as possible
                </p>
            </div>

            <div className='border-b py-6'>
                <div className=' w-auto flex items-center justify-between mx-auto m-4'>
                   <h3 className='font-semibold text-base '>How does billing work?</h3>
                   <Image src="/img/Icon wrap.png" width={24} height={26} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                <p className='font-normal text-lg text-start text-[#475467] hidden'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call
                    to get you up and running as soon as possible
                </p>
            </div>

            <div className='border-b py-6'>
                <div className=' w-auto flex items-center justify-between mx-auto m-4'>
                   <h3 className='font-semibold text-base'>How do I change my account email?</h3>
                   <Image src="/img/Icon wrap.png" width={24} height={26} alt='' className='sm:w-8 sm:h-auto'/>
                </div>
                <p className='font-normal text-lg text-start text-[#475467] hidden'>
                    Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call
                    to get you up and running as soon as possible
                </p>
            </div>

            <div className='flex flex-col justify-center'>
                <Image src="/img/Avatar group.png" width={120} height={56} alt='' className='mx-auto my-6'/>
                <h3 className='font-semibold text-base text-center my-4'>Still have a question ?</h3>
                <p className='font-normal text-lg text-center text-[#475467]'>
                    Can't find the answer you're looking for? Please chat to our frendly team. 
                </p>
                <div className='my-6 mx-auto'>
                    <Button className=' border rounded-[8px] gap-2 text-white font-semibold text-[18px]  w-36 h-12 bg-[#7F56D9] '>Get in touch</Button>
                </div>
            
            </div>

    
        </div>
   </section>
  )
}

export default FAQSection
