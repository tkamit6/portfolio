'use client'

import { projectsData } from "@/lib/data";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

type projectProps = (typeof projectsData)[number];

export default function Project({
    title, description, tags, imageUrl, link
}: projectProps) {

    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    })

    const scaleYProgress = useTransform(scrollYProgress, [1, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return <motion.section ref={ref} style={{ scale: scaleYProgress, opacity: opacityProgress }} className='group  bg-gray-100 sm:max-w-[42rem] border-2 w-[100%] border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] m-auto mb-3 hover:bg-white transition shadow-md sm:mb-8 -z-10 rounded-lg even:pl-10 '>
        <div className='sm:group-even:ml-[18rem] group-even:ml-[6rem] w-[70%]  pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full'>
            <h3 className='text-2xl semibold font-medium'>{title}</h3>
            <p className='mt-2 leading-relaxed text-gray-700 '>{description}</p>
            <Link href={link} className="text-blue-500">{link}</Link>
            <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                {
                    tags.map((tag, index) => (
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full ' key={index} >{tag}</li>
                    ))
                }
            </ul>
        </div>
        <Image src={imageUrl} alt='image' quality={95} className='group-even:left-[-8rem] absolute top-8 -right-40 w-[70%] sm:w-[28rem] rounded-t-lg shadow-2xl group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:-rotate-2' />
    </motion.section>
}