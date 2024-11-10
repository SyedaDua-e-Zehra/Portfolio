"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';
import Image from 'next/image'
import Link from 'next/link'
const Hero = () => {
  return (
    <section className="text-yellow-400 body-font bg-fixed bg-cover bg-center custom-image">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">
         I am
          <br className="hidden lg:inline-block" />
          <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
        </h1>
        <div className='w-[70px] h-[6px] bg-yellow-700'>

        </div>
        <p className="mb-8 leading-relaxed">
        I'm a dedicated software developer with a strong background in building efficient,
         scalable web applications. Skilled in React.js, Next.js, and modern development practices, 
         I create seamless, user-centered solutions that drive impact. Passionate about continuous learning,
         I strive to stay at the forefront of technology to deliver high-quality, innovative projects.
        </p>
        <div className="flex justify-center">
          <Link href="#Contact">
          <button className="inline-flex text-white bg-yellow-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
            Contact
          </button>
           </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded mx-auto w-[25rem] h-auto"
          alt="hero"
          src="/dua.jpg"
          width={100}
          height={100}
        />
      </div>
    </div>
  </section>
  
  )
}

export default Hero