import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'
import React from 'react'

const SisyphusSection = () => {
  return (
        <section className='my-16 p-4'>
            <div className="logo flex w-40 items-center mx-auto mt-12 mb-8">
                <span><Image src="/img/Logomark (2).png" width={29} height={44} className='sm:w-6 sm:h-auto mx-2' alt=''/></span>
                <span className='text-6 sm:text-2xl text-[#101828] font-normal text-xl'>Sisyphus</span>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-medium text-3xl text-center text-[#101828] sm:text-4xl'>
                    We’ve been using Untitled to kick start every new project and can’t imagine working without it.
                </p>
            <Avatar className='mt-8'>
                <AvatarImage src="/img/Avatar.png" alt="@shadcn" />
                 <AvatarFallback >CN</AvatarFallback>
            </Avatar>
            <h3 className='mt-2'>Candice Wu</h3>
            <p className='mb-2 text-4 font-normal text-[#475467]'>Product Manager, Sisyphus</p>
            </div>
        </section>
  )
}

export default SisyphusSection
