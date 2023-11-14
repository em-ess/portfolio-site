"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After my unfulfilling pursuit towards a career in{" "}
        <span className="font-medium">Healthcare</span>, I decided to pursue my
        passion for problem-solving. I discovered the perfect fit was
        programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack software development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is
        discovering the never-ending ways to improve a single issue. I{" "}
        <span className="underline">love</span> the feeling of continuously
        figuring out a new solution to a problem. My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Javascript, Typescript, Python and Java
        </span>
        . I am also familiar with HTML, CSS, Tailwind, MongoDB, and SQL. I am
        always looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, working out, and hanging out with family & friends. I am
        always <span className="font-medium">learning new things</span>. I am
        currently learning{" "}
        <span className="font-medium">
          piano and how to train for a half marathon
        </span>
        . I'm also working to become more proficient in Korean.
      </p>
    </motion.section>
  );
}
