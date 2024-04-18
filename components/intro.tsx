'use client'

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithub, FaGithubSquare } from 'react-icons/fa';
import dp from '../public/dp1.webp'

export default function Intro() {
    return (
        <section id='home' className='max-w-[50rem] text-center scroll-mt-96 sm:mb-0'>
            <div className='flex justify-center items-center'>
                <div className='relative'>
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{
                        type: 'tween', duration: 0.2
                    }} >
                        <Image src={dp} alt="User" width="200" height="200" priority={true} className=' border-0 rounded-full border-white object-cover shadow-2xl' />
                    </motion.div>
                    <motion.span initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{
                        type: 'spring', stiffness: 425, delay: 0.1, duration: 1
                    }} className='absolute bottom-0 right-0 text-3xl '>✌️</motion.span>
                </div>
            </div>
            <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} className='mb-10 mt-4 px-4 text-2xl font-medium leading-[1.5rem] sm:text-3xl '>
                <span className="font-bold">Hello, I &apos; m Amit.</span> I&apos;m a{" "}
                <span className="font-bold">Front-end developer</span> and <span className="font-bold"></span> with{" "}
                <span className="font-bold">good knowledge</span> experience and expertise. I enjoy
                building <span className="italic">sites & web apps</span>.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{
                delay: 0.1
            }} className='flex justify-center gap-4 text-lg font-medium flex-wrap'>
                <Link href="#contact" className='bg-gray-900 group text-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:bg-gray-950 transition duration-300' >Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' /> </Link>
                <a href='/CV.pdf' download={true} className='flex group focus:scale-110 hover:scale-110 transition duration-300 bg-white px-7 py-2 items-center gap-2 rounded-full dark:bg-white/10' > Download CV <HiDownload className='opacity-70 group-hover:translate-y-2 transition' /></a>
                <a href='https://www.linkedin.com/in/amitaggarwal8/' target='_blank' className='flex group focus:scale-110 hover:scale-110 transition duration-300 bg-white p-5 items-center gap-2 rounded-full dark:bg-white/10'> <BsLinkedin className='opacity-70 group-hover:scale-3 transition dark:text-white/90'  /></a>
                <a href='https://github.com/tkamit6' target='_blank' className='flex bg-white group focus:scale-110 hover:scale-110 transition duration-300 p-4 items-center gap-2 rounded-full text-[1.35rem] dark:bg-white/10 '> <FaGithubSquare className='opacity-70 dark:text-white/90  group-hover:scale-3 transition ' /></a>
            </motion.div>
        </section>
    )
}
