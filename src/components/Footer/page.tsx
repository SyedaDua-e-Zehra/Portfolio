import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF,FaYoutube,FaTwitter,FaInstagram,FaTiktok } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <div>
        <footer className="text-gray-600 body-font bg-gray-500">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src="/dzlogo.jpg" alt="dua" width={100} height={100} className='rounded-full' />

      <span className="ml-3 text-xl">Syeda Dua e Zehra</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Syeda Dua e Zehra 
     
    </p>
    <div>
    <div className='flex space-x-4 mb-4 py-1'>
        <Link href="#" ><FaFacebookF className='w-6 h-6 rounded-full bg-blue-800 text-white pt-1 pb-1'/></Link>
        <Link href="#" ><FaTwitter className='w-6 h-6 rounded-full bg-blue-400 text-white pt-1 pb-1'/></Link>
        <Link href="#" ><FaInstagram className='instagram w-6 h-6 rounded-full  text-white pt-1 pb-1'/></Link>
        <Link href="#" ><FaTiktok className='w-6 h-6 rounded-full bg-black text-white pt-1 pb-1'/></Link>
        <Link href="#" ><FaYoutube className='w-6 h-6 rounded-full bg-red-600 text-white pt-1 pb-1'/></Link>
    </div>
    <Link href="mailto:syedaduaezehrar@gmail.com"  target="_blank" className='text-blue-800 underline flex items-center gap-3'> 
    <AiOutlineMail className='size-5'/>
    mailto:syedaduaezehrar@gmail.com</Link>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer