import Contact from "@/components/Contact/page";
import Hero from "@/components/Hero/page";
import About from "@/components/About/page";
import Skill from "@/components/Skills/page";
import Image from "next/image";

export default  function Home(){
    return(
        <div>
            <Hero />
            <Contact />
            <About />
            <Skill />
        </div>
    )
}


