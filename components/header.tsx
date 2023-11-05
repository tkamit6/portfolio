'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Header() {

    const { activeSection, setActiveSection } = useActiveSectionContext()

    return <header className='z-[999] realtive'>
        <motion.div className=' fixed left-1/2 -translate-x-1/2 w-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-xl shadow-black/[0.03] backdrop-blur-[0.5rem] rounded-full h-[3.25rem] top-3 sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full'
            initial={{ y: -100, x: '-50%', opacity: 0 }}
            animate={{ y: 0, x: '-50%', opacity: 1 }}>
            <nav className='flex flex-wrap fixed left-1/2 h-12 -translate-x-1/2 sm:h-[initial] py-0'>
                <ul className='flex w-[22rem] flex-wrap  item-center justify-center gap-y-1 text-[0.8rem] sm:text-[1rem] font-medium text-gray-500 sm:flex-nowrap sm:w-[initial] sm:gap-5'>
                    {
                        links.map((link) => (
                            <motion.li key={link.hash} initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }} className='relative h3/4 flex items-center justify-center'>
                                <Link href={link.hash} onClick={() => setActiveSection(link.name)} className={`flex items-center justify-center px-1 py-3 hover:text-gray-950 transition ${activeSection === link.name ? 'text-gray-950' : ''}  `}>
                                    {link.name}
                                    {link.name === activeSection && (<motion.span layoutId='activeSection' transition={{ type: 'spring', stiffness: 580, damping: 50 }} className='bg-gray-400 w-[100%] h-1 absolute bottom-1 left-0 rounded-full -z-10'></motion.span>)}
                                </Link>
                            </motion.li>
                        ))
                    }
                </ul>
            </nav>
        </motion.div>
    </header>
}
