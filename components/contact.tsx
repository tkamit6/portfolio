'use client'

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa';
import { delay, motion } from 'framer-motion';
import { sendEmail } from '@/action/senEmail';
import toast from "react-hot-toast";
import Swal from 'sweetalert2';

export default function Contact() {
    // const [formData, setFormData] = useState<{ senderMessage: string; senderEmail: string }>({
    //     senderEmail: '',
    //     senderMessage: '',
    // })

    const [senderEmail, setSenderEmail] = useState('')
    const [message, setMessage] = useState('');


    const sendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log(senderEmail, message);
        toast.success("Email sent successfully!");
        Swal.fire({
            title: "Something went wrong!",
            text: "Call me at +918802665778",
            icon: "error",
            showCloseButton: false,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `<a href="tel:+918802665778">Call</a>`,
            confirmButtonAriaLabel: "Thumbs up, great!",
        });
    }


    return (
        <motion.section id='contact' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.250 }} className='my-20 w-[min(100%,38rem)]'>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 text-center'>Please contact me directly at <a className='underline' href='mailto:tkamit6@gmail.com'>tkamit6@gmail.com</a>{" "}
                or through this form <br /> +91-8802665778</p>
            <form onSubmit={sendMessage} className='mt-10 flex flex-col gap-6'>
                <input name="senderEmail" onChange={(e) => setSenderEmail(e.target.value)} value={senderEmail}
                    type="email" required placeholder='Your Email' className='h-12 rounded-lg border border-black/10 p-4 shadow-sm dark:bg-gray-50/10' />
                <textarea name="senderMessage" onChange={(e) => setMessage(e.target.value)} value={message}
                    required placeholder='Your Message' className='h-52 rounded-lg border-black/10 p-4 shadow-md dark:bg-gray-50/10' />
                <button type='submit' className='group hover:scale-110 h-[3rem] w-[8rem] bg-gray-900  text-white rounded-full outline-none transition justify-center items-center flex gap-2'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-2' /> </button>
            </form>
        </motion.section>
    )
}
