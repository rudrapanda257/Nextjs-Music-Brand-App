"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";




const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <Image
                src=""
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };

const data = [
  {
    category: "Guitar Fundamentals",
    title: "Learn the basics of playing guitar with our comprehensive beginner's course.",
    src: "https://images.unsplash.com/photo-1508186736123-44a5fcb36f9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Advanced Vocal Techniques",
    title: "Enhance your singing with advanced vocal techniques for intermediate to advanced learners.",
    src: "https://images.unsplash.com/photo-1581283869631-baae04233b04?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
      category: "Piano for Beginners",
      title: "Start your musical journey with foundational piano skills taught by expert instructors..",
      src: "https://images.unsplash.com/photo-1667589179475-6ddb8f8cd89a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Drumming Mastery",
      title: "Master the drums with our comprehensive course covering all skill levels.",
      src: "https://images.unsplash.com/photo-1483000805330-4eaf0a0d82da?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    
   
    
    {
      category: "Piano",
      title: "Learn the art of jazz improvisation with this course designed for all levels.",
      src: "https://images.unsplash.com/photo-1694629376140-7aec10e41d8c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Music Production Fundamentals",
      title: "Dive into music production with this introductory course on the basics of sound engineering and mixing.",
      src: "https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
  ];


  const UnplashCard = () => {
    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
      return (
        <div className="w-full h-full py-20">
          <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
            Today is the Best day to Start.
          </h2>
          <Carousel items={cards} />
        </div>
      );
  }  


  
export default UnplashCard
