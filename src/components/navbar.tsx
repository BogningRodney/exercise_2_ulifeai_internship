import React from 'react'
import {
    Menubar,
    MenubarCheckboxItem,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarRadioGroup,
    MenubarRadioItem,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
  } from "@/components/ui/menubar"

  import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
import { ChevronDown, Menu } from 'lucide-react'
import Image from 'next/image'

const Navbar = () => {
  return (

    <Menubar className='pt-[12px] pb-[16px] lg:px-32 h-20 flex justify-between pe-4'>
        <div className='flex'>
        <MenubarMenu>
      <MenubarTrigger><span><Image src="/img/Logomark (6).png" width={32} height={32} alt=''/></span><span className=' text-[15px] lg:text-2xl text-bold'>Untitled UI</span></MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger className='hidden lg:block'>Home</MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger className='hidden lg:block lg:flex'>Products<ChevronDown /> </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger className='hidden lg:block lg:flex' >Resources<ChevronDown /> </MenubarTrigger>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger className='hidden lg:block'>Pricing </MenubarTrigger>
    </MenubarMenu>
        </div>

        <div>
        <Avatar className='hidden lg:block'>
      <AvatarImage src="/img/_Navigation actions.png" alt="@shadcn" />
      <AvatarFallback >CN</AvatarFallback>
    </Avatar>
    <Menu className='lg:hidden w-[32px] h-[32px]'/>
        </div>
    
  </Menubar>

  )
}

export default Navbar
