'use client'

import React from 'react';
import {motion} from 'framer-motion';

type SectionHeadingProps ={
    children: React.ReactNode
};

export default function SectionHeading({
    children}: SectionHeadingProps) {
  return (
    <motion.h2 initial={{opacity:0 , y:100}} animate={{opacity:1, y:0}} transition={{delay:0.2}} className='text-4xl mb-8 font-medium capitalize text-center'>{children}</motion.h2>
  )
}
