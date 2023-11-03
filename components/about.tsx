'use client'

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <motion.section initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.175 }}  id='about' className='max-w-[45rem] text-center leading-8 scroll-mt-28'>
            <SectionHeading>About me </SectionHeading>
            <p className='mb-3 '>
                After graduating with a degree in{" "}
                <span className="font-medium">Commerce</span>, I decided to pursue my
                passion for web development. I enrolled in a coding bootcamp and learned{" "}
                <span className="font-medium">mern full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Javascript. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a react js
                developer.
            </p>
            <p>
                <span className="italic">When I'm not coding</span>, I enjoy watching movies, and roaming around with friends. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">Next Js</span>.
            </p>
        </motion.section>
    )
}
