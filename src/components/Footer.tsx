import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='px-4 sm:ps-16 sm:pe-12'>
        <div className='grid grid-cols-2 sm:grid-cols-6 place-content-center border-b pb-12 '>
            <div >
                <h4 className='font-semibold  text-sm text-[#667085] my-2'>Product</h4>
                <ul>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Overview</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Feature</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Solution </a><span>new</span></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Tutorials</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Pricing</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Releases</a></li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold  text-sm text-[#667085] my-2'>Resources</h4>
                <ul>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Blog</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="#">Newsletter</a></li>
                    <li className='font-semibold text-base text-[#475467]'>Events</li>
                    <li className='font-semibold text-base text-[#475467]'>Help centre</li>
                    <li className='font-semibold text-base text-[#475467]'>Tutorials</li>
                    <li className='font-semibold text-base text-[#475467]'>Support</li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold  text-sm text-[#667085] my-2'>Social</h4>
                <ul>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Twitter</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="#">Linkedln</a></li>
                    <li className='font-semibold text-base text-[#475467]'>Facebool</li>
                    <li className='font-semibold text-base text-[#475467]'>GitHub</li>
                    <li className='font-semibold text-base text-[#475467]'>AngelList</li>
                    <li className='font-semibold text-base text-[#475467]'>Dribbble</li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold  text-sm text-[#667085] my-2'>Compagny</h4>
                <ul>
                    <li className='font-semibold text-base text-[#475467]'><a href="">About us</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="#">Carees</a></li>
                    <li className='font-semibold text-base text-[#475467]'>Press</li>
                    <li className='font-semibold text-base text-[#475467]'>News</li>
                    <li className='font-semibold text-base text-[#475467]'>Media kit</li>
                    <li className='font-semibold text-base text-[#475467]'>Contact</li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold  text-sm text-[#667085] my-2'>Use cases</h4>
                <ul>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Startups</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="#">Enterprise</a></li>
                    <li className='font-semibold text-base text-[#475467]'>Government</li>
                    <li className='font-semibold text-base text-[#475467]'>SaaS</li>
                    <li className='font-semibold text-base text-[#475467]'>Marketplaces</li>
                    <li className='font-semibold text-base text-[#475467]'>Ecommerce</li>
                </ul>
            </div>

            <div>
                <h4 className='font-semibold  text-sm text-[#667085] my-2'>Legal</h4>
                <ul>
                    <li className='font-semibold text-base text-[#475467]'><a href="">Terms</a></li>
                    <li className='font-semibold text-base text-[#475467]'><a href="#">Privacy</a></li>
                    <li className='font-semibold text-base text-[#475467]'>Cookies</li>
                    <li className='font-semibold text-base text-[#475467]'>Licenses</li>
                    <li className='font-semibold text-base text-[#475467]'>Settings</li>
                    <li className='font-semibold text-base text-[#475467]'>Contact</li>
                </ul>
            </div>
        </div>

        <div className='mt-4 mb-4 sm:flex sm:justify-between'>
            <div className='flex items-center'>
            <Image src="/img/Logomark (6).png" width={32} height={32} alt=''/><span className=' text-[15px] lg:text-2xl text-bold'>Untitled UI</span>
            </div>
            
            <h4 className='font-semibold  text-sm text-[#667085] my-2'>© 2077 Untitled UI. All rights reserved.</h4>
        </div>
    </footer>
  )
}

export default Footer
