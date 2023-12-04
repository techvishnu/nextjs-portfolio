import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { SiUdemy } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import programsImg from "@/public/programs.png";
import toolsConsoleImg from "@/public/toolsconsole.png";
import dltleImg from "@/public/dlt.png";

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
    name: "Certifications",
    hash: "#certifications",
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
  /*
  {
    name: "Contact",
    hash: "#contact",
  },
  */
] as const;

export const experiencesData = [
  {
    title: "Content Creator",
    location: "YouTube",
    description:
      "I create content on YouTube about Windows, Linux, Android Applications, and other tech related topics. I also make informative content regarding internet and it's safety.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2019 - Jan 2021",
  },
  {
    title: "Core Committe Member",
    location: "VIT University",
    description:
      "I had contributed regarding various domains throught my clubs and chapters in the university included Technical Field and Non-Technical Field. I had also contributed to the university's official website and other projects.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2022",
  },
  {
    title: "Web Developer",
    location: "Scotchers Enterprises",
    description:
      "I had worked as a web developer for Scotchers Enterprises. I had worked on various projects including the company's official website. I had also worked on the company's internal projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2017 - Oct 2020",
  },
] as const;

export const certificationsData = [
  {
    title: "The Complete Web Developer: Zero to Mastery",
    location: "Udemy",
    description:
      "Certification earners demonstrate a robust grasp of web development, excelling in HTML, CSS, JavaScript, and contemporary frameworks. Equipped with hands-on experience in cutting-edge technologies, these certificate holders are well-prepared to address real-world web development challenges.",
    icon: React.createElement(SiUdemy),
    date: "Jul 2023",
    certificationLink:
      "https://www.udemy.com/certificate/UC-54c50525-a2ab-4448-860a-902abd8942ae/",
  },
  {
    title: "Oracle Database Developer Certified Professional",
    location: "Oracle",
    description:
      "Certification earners demonstrate advanced proficiency in PL/SQL for Oracle Database. Their skills encompass crafting efficient triggers, developing stored procedures, and managing complex data structures. This certification validates their ability to optimize SQL statements for enhanced performance and implement robust security measures. With this expertise, individuals showcase their capability to design and manage database applications effectively, positioning themselves as valuable assets in Oracle Database development",
    icon: React.createElement(SiOracle),
    date: "Nov 2023",
    certificationLink:
      "https://drive.google.com/file/d/170Z6ojbFhVmAa2VWVSX_eED5OcJCVua4/view",
  },
  {
    title: "Introduction to MongoDB",
    location: "MongoDB",
    description:
      "Certification earners demonstrate a solid grasp of MongoDB fundamentals, covering data modeling, querying, and basic administration tasks. This certification signifies their proficiency in utilizing MongoDB for handling unstructured data and creating scalable, flexible database solutions. With practical skills in MongoDB environments, individuals completing this certification are well-prepared to contribute effectively to projects requiring NoSQL database expertise",
    icon: React.createElement(DiMongodb),
    date: "Dec 2021 - Dec 2024",
    certificationLink:
      "https://learn.mongodb.com/c/Zoj1LuIaQR6BWMicdHAJ2A",
  },
] as const;

export const projectsData = [
  {
    title: "Terminal Portfolio",
    description:
      "My web portfolio is like a Linux terminal but on the web. Using HTML, CSS, and JavaScript, I've created a unique showcase for my projects. It offers a nostalgic command-line experience for visitors to explore my work. It's not just a portfolio; it's an interactive and engaging way to present my achievements.",
    tags: [
      "JavaScript",
      "HTML",
      "CSS",
    ],
    imageUrl: programsImg,
  },
  {
    title: "LinkTree Clone",
    description:
      "A LinkTree clone built using HTML and CSS. This project was built to learn more about HTML5. It's a simple project but it was a great learning experience. Hosted Using Github Pages. Gained More experience with HTML5 CSS3 and JavaScript.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
    ],
    imageUrl: dltleImg,
  },
  {
    title: "Linux Dotfiles",
    description:
      "My web portfolio is like a Linux terminal but on the web. Using HTML, CSS, and JavaScript, I've created a unique showcase for my projects. It offers a nostalgic command-line experience for visitors to explore my work. It's not just a portfolio; it's an interactive and engaging way to present my achievements. I use arch btw",
    tags: [
      "Shell",
      "Python",
      "GLSL",
      "CSS",
    ],
    imageUrl: toolsConsoleImg,
  },
] as const;

export const skillsData = [
  'Git',
  'HTML',
  'C++',
  'Java',
  'Python',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Tailwind',
  'Python',
  'PowerShell',
  'AWS',
  'Linux',
] as const;
