'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa';
import { delay, motion } from 'framer-motion';
import { sendEmail } from '@/action/senEmail';

export default function Contact() {
    
    return (
        <motion.section id='contact' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.250 }} className='my-20 w-[min(100%,38rem)]'>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 text-center'>Please contact me directly at <a className='underline' href='mailto:tkamit6@gmail.com'>tkamit6@gmail.com</a>{" "}
                or through this form</p>
            <form action={ async (formData) => {
                console.log(formData.get("senderEmail"));
                console.log(formData.get("message"));
                await sendEmail(formData)
            }} className='mt-10 flex flex-col gap-6'>
                <input type="email" name='senderEmail' required placeholder='Your Email' className='h-10 rounded-lg border border-black/10 p-4 shadow-sm  ' />
                <textarea name='message' required placeholder='Your Message' className='h-52 rounded-lg border-black/10 p-4 shadow-md' />
                <button type='submit' className='group hover:scale-110 h-[3rem] w-[8rem] bg-gray-900  text-white rounded-full outline-none transition justify-center items-center flex gap-2'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-2' /> </button>
            </form>
        </motion.section>
    )
}
