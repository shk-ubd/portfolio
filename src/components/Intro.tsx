"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "@/../public/sheikh-ubaidullah.jpg";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "../../lib/hooks";
import { useActiveSection } from "@/context/active-section-context";

function Intro() {
  const ref = useSectionInView("Home");
  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-2 max-w-[50rem] min-h-[70vh] text-center sm:mb-0 scroll-mt-96"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePhoto}
              alt="Sheikh Ubaid Ullah"
              width="192"
              height="192"
              quality="75"
              priority={true}
              className="h-24 w-24 object-cover border-white border-[0.35rem] shadow-xl rounded-full"
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
            className="text-4xl absolute bottom-0 right-0 "
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
  className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  <span className="font-bold">Hello, I&apos;m Sheikh Ubaid Ullah.</span> I&apos;m a{" "}
  <span className="font-bold">frontend developer</span> with a strong focus on{" "}
  <span className="underline">React JS</span> and{" "}
  <span className="font-bold">Angular</span>. I specialize in creating{" "}
  <span className="italic">dynamic, responsive web applications</span> that deliver seamless user experiences.
</motion.h1>
            

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full border border-black/15 hover:border-black/20 outline-none focus:scale-110 hover:scale-110  active:scale-105 transition dark:bg-white/10"
          download={"CV-SheikhUbaidUllah"}
          href="/CV.pdf"
          title="Download CV"
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-4 mb-10 mt-4  sm:m-0 sm:gap-2">
          <a
            className=" bg-white p-4 text-xl flex text-[#0077B5] items-center gap-2 rounded-full border border-black/15  focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition hover:text-[#2077B0] hover:border-black/20 dark:bg-white/10 "
            href="https://www.linkedin.com/in/sheikh-ubaid/"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my LinkedIn profile"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-xl flex text-gray-950 items-center gap-2 rounded-full border border-black/15 focus:scale-[1.15] hover:scale-[1.15]  active:scale-105 transition hover:text-gray-950 hover:border-black/20 dark:bg-white/10"
            href="https://github.com/shk-ubd"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit my GitHub profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Intro;
