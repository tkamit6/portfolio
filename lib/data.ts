import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import amsImg from "@/public/ams.png";
import discoverthehuntImg from "@/public/discoverthehunt.png";
import prontoImg from "@/public/prontobookstore.png";
import kamaaoImg from "@/public/kamaao.png";
import homeIcon from "@/public/system-regular-41-home.gif";
import user from "@/public/user.gif";
import contact from "@/public/contact.gif";
import kowledge from "@/public/kowledge.gif";
import mernJobImg from "@/public/mern-job-five.vercel.app_.png";
import emartImg from "@/public/emart.webp"
import pocketful from "@/public/1.svg"

export const links = [

  {
    name: "Home",
    hash: "home",
    icon: homeIcon
  },
  {
    name: "About",
    hash: "about",
    icon: user
  },
  {
    name: "Projects",
    hash: "projects",
    icon: homeIcon
  },
  {
    name: "Skills",
    hash: "skills",
    icon: kowledge
  },
  {
    name: "Experience",
    hash: "experience",
    icon: homeIcon
  },
  {
    name: "Contact",
    hash: "contact",
    icon: contact
  },
 
] as const;

export const experiencesData = [
  {
    title: "Next Js Developer",
    location: "Okhla, Delhi",
    description:
      "Pocketful Private Limited",
    icon: React.createElement(CgWorkAlt),
    date: "Jan 2024 - Feb 2024",
    headingColor: "text-[#1d965e]"
  },
  {
    title: "Junior Front-end Web Developer",
    location: "Vijay Vihar, Delhi",
    description:
      "Digi Interact Private Limited",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - Dec 2023",
    headingColor: "text-[#1d965e]"
  },
  {
    title: "Operation Executive",
    location: "Shalimar Bagh, Delhi",
    description:
      "Setindiabiz Private Limited.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2019 - Oct 2022",
    headingColor: "rgba(0,0,0)"
  },
  {
    title: "Documents Formatter Intern",
    location: "Remote",
    description:
      "IIT Bombay, Mumbai. It was basically work from home job where i have to indent some pages books which they provided me over overleaf. ",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2021- Feb 2022",
    headingColor: "rgba(13,110,253)"
  },
] as const;

export const projectsData = [
  {
    title: "Kamaao",
    description:
      "I worked on Frontend developing Tailwind CSS, websit is about to providing Jobs like job portal.",
    tags: ["React js", "Swiper Js", "Framer Motion", "Tailwind CSS", "Node Mailer"],
    imageUrl: kamaaoImg,
    link: 'kamaao.app/'
  },
  {
    title: "Pronto Book Store",
    description:
      "I worked on Frontend developing using HTML, CSS Javascript and for framework im using bootstrap.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: prontoImg,
    link: 'prontobookstore.com/'
  },
  {
    title: "E-Commerce",
    description:
      "Built e-commerce website for practices purpose using Next Js and Tailwind for authentication using Next Auth and for payment Stripe, fetching data from mongo db and 1 other free api.",
    tags: ["Next Js", "Next Auth", "Tailwind"],
    imageUrl: emartImg,
    link: 'emart-online.vercel.app/'
  },
  {
    title: "Bid Learn Grow",
    description:
      "Bid Learn Grow website is made on using React Js which is about a bidding website and i built here landing page.",
    tags: ["React", "Javascript", "Swiper Js", "Bootstrap"],
    imageUrl: discoverthehuntImg,
    link: 'bidlearngrow.com/'
  },
  {
    title: "AMS Clinic",
    description:
      "AMS Clinic website is made on wordpress as i already told i also have expertise of wordpress.",
    tags: ["Wodpress", "Elementor", "Contact Form 7"],
    imageUrl: amsImg,
    link: 'amsclinic.ca',
  },
  {
    title: "MERN Job Website",
    description:
      "MERN Job Website built using react.js tailwind css and for login im using google authentication.",
    tags: ["React.Js", "Tailwind CSS", "Node", "Mongo DB", "Firebase Auth"],
    imageUrl: mernJobImg,
    link: 'mern-job-five.vercel.app/',
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "Git",
  "Tailwind",
  "ContextAPI",
  "Framer Motion",
  "Bootstrap",
  "Postman",
] as const;