import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import lewisvilleypImg from "@/public/lewsivilleyp.png";
import jemcodingImg from "@/public/jemcoding.png";
import templateImg from "@/public/template.png";

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
    title: "Graduated bootcamp",
    location: "San Francisco, CA",
    description:
      "I graduated a full-stack software development bootcamp.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Dallas, TX",
    description:
      "I worked as a front-end developer for clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
  {
    title: "Full-Stack Developer",
    location: "Dallas, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Java, AWS and more. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "750-YP",
    description:
      "A public event management web application for a sector created by the Chamber of Commerce of Lewisville, TX.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Material UI", "Typescript"],
    imageUrl: lewisvilleypImg,
  },
  {
    title: "Jem Coding",
    description:
      "A free education platform focused on game development and a niche approach to curriculum.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: jemcodingImg,
  },
  {
    title: "On-body",
    description:
      "An ecommerce web site for soap merchandise.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: templateImg,
  },
  {
    title: "Check",
    description:
      "Coming Soon...",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: templateImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "AWS",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "MUI",
  "Redux",
  "SQL",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;