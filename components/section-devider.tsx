'use client'

import React from 'react'
import { motion } from 'framer-motion';

export default function SectionDevider() {
  return (
    <motion.div initial={{opacity:0, y:100}} animate={{opacity:1, y:0}} transition={{delay: 0.125}} className='bg-[#ff4081] my-24 h-16 w-1 rounded-full hidden md:block'></motion.div>
  )
}
