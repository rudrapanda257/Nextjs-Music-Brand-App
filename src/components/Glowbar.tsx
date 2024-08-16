"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import GithubGlode from "./GithubGlode";
import AnimatedTab from "./AnimatedTab";
import Instructors from "./Instructors";

const  Glowbar = () => {
    return (
      <>
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            
       Sauriann:Where Music Meets the World
            
          </motion.h1>
          <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-2xl"
          >
           Empowering musicians worldwide with premium instruments and accessories. Let your sound resonate with Sauriann.
            
          </motion.p>
          
        </LampContainer>
        <Instructors/>
        </>
      );
}

export default Glowbar

