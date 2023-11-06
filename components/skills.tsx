'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data';
import { motion } from 'framer-motion';

export default function Skills() {
    const fadeInAnimationVariants = {
        initial: { opacity: 0, y: 100 },
        animate: (index: number) => ({ opacity: 1, y: 0, transition: { delay: 0.05 * index } })
    }
    return (
        <section id='skills' className='max-w-[53rem] scroll-mt-28 text-center'>
            <SectionHeading>Skills</SectionHeading>
            <ul className='flex flex-wrap justify-center text-md text-gray-800 gap-2'>
                {
                    skillsData.map((skill, index) => (
                        <motion.li variants={fadeInAnimationVariants} initial="initial" whileInView="animate" custom={index} key={index} className='bg-white border border-black/[0.1] dark:bg-white/10 dark:text-white/80 shadow-xl rounded-xl px-5 py-3'>{skill}</motion.li>
                    ))
                }
            </ul>

        </section>
    )
}
