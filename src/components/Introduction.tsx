import { ArrowRight, CirclePlay } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Introduction = () => {
  return (
    <div className='p-10 sm:p-32 flex justify-center flex-col '>
      <div className='text-[#6941C6] flex items-center  bg-[#F9F5FF] rounded-full justify-around mx-auto gap-3'>
        <span className='text-[12px] leading-[18px] h-8 bg-white rounded-[16px] px-[4px] pt-[4px] pb-[4px] border text-center'>New feature</span>
        <span className='text-[12px] leading-[18px] flex text-center flex-row'>Check out the team dashboard <ArrowRight className='w-[16px] h-[16px]'/></span>
      </div>

      <div className='mx-auto'>
        <h1 className='font-semibold text-[36px] leading-[44px] lg:text-[60px] text-center lg:leading-[72px] text-[#101828] '>Beautiful analytics to grow smarter</h1>
        <p className='text-center leading-6 font-[400] text-[16px] lg:text-[20px] sm:text-[18px] max-w-[768px] h-[60px] sm:leading-[30px] my-[20px] mb-12 mx-auto'>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. 
          Trusted by over 4,000 startups.
        </p>
      </div>
      
      <div className='flex mb-20 my-4 flex-col lg:flex-row  mx-auto'>
          <Button className=' rounded-[8px] border  my-2  gap-3 bg-white border-[#D0D5DD] text-[#344050] font-semibold text-[18px] leading-[28px] lg:w-[143px] lg:my-0 w-80 h-12 sm:mx-2'><CirclePlay /> Demo</Button>
          <Button className=' border rounded-[8px] gap-3 text-white font-semibold text-[18px]  bg-blue-400 lg:w-[143px] w-80 h-12 bg-[#7F56D9]'>Signup</Button>
      </div>

      <div className='mx-auto '>
        <Image src="/img/Macbook Pro 16 mockup.png" width={1280} height={480} alt='' className='gap-[32px] hidden lg:block'/>
        <Image src="/img/Container.png" width={375} height={202} alt='' className='gap-[32px] py-[16px] lg:hidden '/>
      </div>
    </div>
  )
}

export default Introduction
