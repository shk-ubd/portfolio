import React from "react";
import { FaAngular, FaGithub, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import blogAppImg from "../public/blog-app.png";
// import gadgetHubImg from "../public/gadgethub.jpeg";
// import businessAcademyImg from "../public/business-academy.jpeg";
import raahguzarImg from "../public/raahguzar.png";
import engroHumsafarImg from "../public/engro-humsafar.png";
import apnaPetImg from "../public/apnapet.png";

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
    title: "Frontend Developer Intern",
    location: "MT Pixels",
    description:
      "I developed and implemented several interactive dashboards using AngularJS, enhancing data visualization and user experience.",
    icon: React.createElement(FaAngular),
    date: "2024 - present",
  },
  {
    title: "Software Engineering Student",
    location: "University of Karachi, Karachi",
    description:
    "Pursuing a degree in Software Engineering, covering subjects such as Calculus, Computer Logic Design, Object-Oriented Concepts, Data Structures, Software Development, and Artificial Intelligence. Gaining a strong foundation in both theoretical and practical aspects of software engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
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
    title: "Engro Humsafar",
    description: 
      "Engro Fertilizers Dealer Management System for Dealers. An ongoing project, working at MT Pixels.",
    tags: ["Admin Portal", "Engro", "MT Pixels", "AngularJS"],
    imageUrl: engroHumsafarImg,
    link: "#"
  },
  {
    title: "Rahguzaar Admin App",
    description: 
      "An admin portal for the Rahguzaar app, a project by OGRA (Oil & Gas Regulatory Authority), a government agency. Developed while working at MT Pixels.",
    tags: ["Admin Portal", "Government Project", "MT Pixels", "AngularJS"],
    imageUrl: raahguzarImg,
    link: "#"
  },
 
  {
    title: "ApnaPet Dashboard App",
    description: 
      "Designed and developed a dashboard application for the Pet Planet website, a platform for buying and selling pets. Implemented advanced state management and data visualization using React and TypeScript.",
    tags: ["Admin Portal", "Pet Planet", "MT Pixels", "React", "TypeScript"],
    imageUrl: apnaPetImg,
    link: "#"
  },
  // {
  //   title: "BlogApp",
  //   description:
  //     "A Fullstack blogging app where users can signup, login, and post blog articles. Made with React, Tailwind CSS, and Appwrite.",
  //   tags: ["React", "Tailwind CSS", "Appwrite", "React Hook Form", "TinyMCE"],
  //   imageUrl: blogAppImg,
  //   link: "https://shk-ubd-blogapp.netlify.app/"
  // },
  // {
  //   title: "GadgetHub",
  //   description:
  //     "An ecommerce store using React, Sanity as a CMS, Tailwind CSS for styling, and Stripe for payments.",
  //   tags: ["React", "Sanity", "Tailwind CSS", "Stripe"],
  //   imageUrl: gadgetHubImg,
  //   link: "https://github.com/shk-ubd/gadgethub"
  // },
  // {
  //   title: "Business Academy",
  //   description:
  //     "An app for a business academy providing course info. Built with NextJS and styled with TailwindCSS and Aceternity UI.",
  //   tags: ["NextJS", "Tailwind CSS", "Aceternity UI"],
  //   imageUrl: businessAcademyImg,
  //   link: "https://shk-ubd-business-academy.vercel.app/"
  // },
] as const;


export const skillsData = [
  "Angular",
  "TypeScript",
  "React",
  "JavaScript",
  "Next.js",
  "Redux",
  "HTML",
  "CSS",
  "Tailwind",
  "Git",
  "Appwrite",
  "Python"
] as const;
