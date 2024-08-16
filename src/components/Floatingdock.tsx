"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";


const Floatingdock = () => {

   
        const links = [
          {
            title: "Home",
            icon: (
              <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
          },
       
          {
            title: "LinkedIn",
            icon: (
              <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/rudra-narayan-panda-306b1a19b/",
          },
          {
            title: "Products",
            icon: (
              <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/courses",
          },
          // {
          //   title: "Aceternity UI",
          //   icon: (
          //     <Image
          //       src=""
          //       width={20}
          //       height={20}
          //       alt="Aceternity Logo"
          //     />
          //   ),
          //   href: "#",
          // },
          {
            title: "Contact Us",
            icon: (
              <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/contact",
          },
          
       
          {
            title: "Twitter",
            icon: (
              <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/RUDRAPA82676604",
          },
          {
            title: "GitHub",
            icon: (
              <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/rudrapanda257",
          },
        ];
  return (
    <div className="flex items-center justify-center h-[5rem] w-full mb-10 ">
      <FloatingDock
        mobileClassName="translate-y-5" // only for demo, remove for production
        items={links}
      />
    </div>
  )
}

export default Floatingdock
