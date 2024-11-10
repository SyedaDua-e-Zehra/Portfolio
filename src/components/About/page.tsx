import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about">
      <section className="text-white body-font custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[300px] h-[400px]"
              alt="hero"
              src="/dua.jpg"
              width={300}
              height={500}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-400">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
          
        I'm a dedicated software developer with a strong background in building efficient,
         scalable web applications. Skilled in React.js, Next.js, and modern development practices, 
         I create seamless, user-centered solutions that drive impact. Passionate about continuous learning,
         I strive to stay at the forefront of technology to deliver high-quality, innovative projects.
            </p>
            
            <div className="flex justify-center">
              <a href={"/assests/cv/myCv.pdf"}>
                <button className="inline-flex text-white bg-yellow-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

      