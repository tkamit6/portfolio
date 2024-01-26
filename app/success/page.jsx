'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function page() {
    return (
        <motion.div class=" h-screen">
            <div class=" p-6  md:mx-auto"
                initial={{ y: -100, x: '-50%', opacity: 0 }}
                animate={{ y: 0, x: '-50%', opacity: 1 }}>
                <svg viewBox="0 0 24 24" class="text-green-600 bg-white rounded-full w-16 h-16 mx-auto my-6">
                    <path fill="currentColor"
                        d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
                    </path>
                </svg>
                <div class="text-center">
                    <h3 class="md:text-2xl text-base font-semibold text-center">Payment Done!</h3>
                    <p class="my-2">Thank you for completing your secure online payment.</p>
                    <p> Have a great day!  </p>
                    <div class="py-10 text-center">
                        <a href="/" class="px-12 bg-green-600 rounded-full dark:bg-gray-950 text-white font-semibold py-3">
                            GO BACK
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
