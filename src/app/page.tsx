import AnimatedTab from "@/components/AnimatedTab";
import FeaturedCourses from "@/components/FeaturedCourses";
import Floatingdock from "@/components/Floatingdock";
import GithubGlode from "@/components/GithubGlode";
import Glowbar from "@/components/Glowbar";
import  HeroSection from "@/components/HeroSection"; 
import ImageSlider from "@/components/ImageSlider";
import Instructors from "@/components/Instructors";
import SlideCard from "@/components/SlideCard";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UnplashCard from "@/components/UnplashCard";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    <h1 className="text-2xl text-center"></h1>
    <HeroSection/>
    <Floatingdock/>

    <ImageSlider/>
    <UnplashCard/>
    <SlideCard/>
     
    <MusicSchoolTestimonials/>
    <Instructors/>
    <FeaturedCourses/> 
    <GithubGlode/>
    <AnimatedTab/>
    </main>

  );
}
