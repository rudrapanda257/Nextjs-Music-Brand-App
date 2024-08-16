import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import FloatingDock  from "./Floatingdock";
import Link from 'next/link'; 

const HeroSection = () => {
  
      return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" mt-10 p-9 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <br />SAURIANN <br /> Elevate Your Sound..
        </h1>
        <p className="mt-7 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
       
        Sauriann is a vibrant music brand dedicated to bringing you the best in sound and style. Explore our range of high-quality instruments, accessories, and gear, designed for both budding artists and seasoned musicians. 
        </p>
        <p className="mt-10 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
        <Link href={"/courses"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white  dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
         >
        Explore Me 
        </Button>
        </Link>  
        </p>
       
      
      </div>
    </div>
  );
    
}

export default HeroSection

