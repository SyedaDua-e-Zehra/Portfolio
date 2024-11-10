import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoCloudDownloadOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className='bg-white z-50 sticky top-0'>
      <header className="text-gray-600 body-font bg-yellow-400">
    <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src="/dzlogo.jpg" alt="dua" width={100} height={100} className='rounded-full' />

        <span className="ml-3 text-xl">Syeda Dua e Zehra</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/"} className="mr-5 hover:text-blue-600">Home</Link>
        <Link href={"#"} className="mr-5 hover:text-blue-600">About</Link>
        <Link href={"#"} className="mr-5 hover:text-blue-600">Skills</Link>
        <Link href={"#Contact"} className="mr-5 hover:text-blue-600">Contact</Link>
      </nav>
      <a href="/cv/myCv.pdf"></a>
      <button className="inline-flex items-center  bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-400 rounded text-base mt-4 md:mt-0">
      Download CV
      <IoCloudDownloadOutline className='text-xl ml-2' />
      </button>
    </div>
  </header>
  </div>
  )
}

export default Navbar