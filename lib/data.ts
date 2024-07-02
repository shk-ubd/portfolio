import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import blogAppImg from "../public/blog-app.png";
import gadgetHubImg from "../public/gadgethub.jpeg";
import businessAcademyImg from "../public/business-academy.jpeg";
import spaceTourismImg from "../public/space-tourism.jpeg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Student",
    location: "University of Karachi, Karachi",
    description:
    "Pursuing a degree in Software Engineering, covering subjects such as Calculus, Computer Logic Design, Object-Oriented Concepts, Data Structures, Software Development, and Artificial Intelligence. Gaining a strong foundation in both theoretical and practical aspects of software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - present",
  },
  {
    title: "Personal Projects",
    location: "Remote",
    description:
      "Developed several web development projects to enhance my skills in React, Next.js, and other modern web technologies. Projects include BlogApp, GadgetHub, Business Academy, and Space Tourism.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
  // {
  //   title: "Open Source Contributor",
  //   location: "Remote",
  //   description:
  //     "Contributed to various open-source projects, enhancing my collaborative skills and understanding of real-world software development practices.",
  //   icon: React.createElement(FaGithub),
  //   date: "2023 - present",
  // },
] as const;


export const projectsData = [
  {
    title: "BlogApp",
    description:
      "A Fullstack blogging app where users can signup, login, and post blog articles. Made with React, Tailwind CSS, and Appwrite.",
    tags: ["React", "Tailwind CSS", "Appwrite", "React Hook Form", "TinyMCE"],
    imageUrl: blogAppImg,
  },
  {
    title: "GadgetHub",
    description:
      "An ecommerce store using React, Sanity as a CMS, Tailwind CSS for styling, and Stripe for payments.",
    tags: ["React", "Sanity", "Tailwind CSS", "Stripe"],
    imageUrl: gadgetHubImg,
  },
  {
    title: "Business Academy",
    description:
      "An app for a business academy providing course info. Built with NextJS and styled with TailwindCSS and Aceternity UI.",
    tags: ["NextJS", "Tailwind CSS", "Aceternity UI"],
    imageUrl: businessAcademyImg,
  },
  {
    title: "Space Tourism",
    description:
      "A frontend website for a space tourism company. Developed with React, Tailwind CSS, and Vite.",
    tags: ["React", "Tailwind CSS", "Vite"],
    imageUrl: spaceTourismImg,
  },
] as const;


export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Python",
  "Appwrite",
  "Firebase",
  "Framer Motion",
] as const;