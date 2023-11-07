import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import masteryMade from "@/public/masterMade.png";
import amsImg from "@/public/ams.png";
import discoverthehuntImg from "@/public/discoverthehunt.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import prontoImg from "@/public/prontobookstore.png";
import kamaaoImg from "@/public/kamaao.png";
import homeIcon from "@/public/system-regular-41-home.gif";
import user from "@/public/user.gif";
import contact from "@/public/contact.gif";
import kowledge from "@/public/kowledge.gif";

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
    title: "Junior Front-end Web Developer",
    location: "Vijay Vihar, Delhi",
    description:
      "Digi Interact Private Limited",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - Current",
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
    link: 'kamao.vercel.app/'
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
    title: "Bid Learn Grow",
    description:
      "Bid Learn Grow website is made on using React Js which is about a bidding website and i built here landing page.",
    tags: ["React", "Javascript", "Swiper Js", "Bootstrap"],
    imageUrl: discoverthehuntImg,
    link: 'discoverthehunt.com/ <br/> teal-marzipan-91fafb.netlify.app/'
  },
  {
    title: "AMS Clinic",
    description:
      "AMS Clinic website is made on wordpress as i already told i also have expertise of wordpress.",
    tags: ["Wodpress", "Elementor", "Contact Form 7"],
    imageUrl: amsImg,
    link: 'amsclinic.co.in/',
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