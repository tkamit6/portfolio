'use client'

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa';
import { delay, motion } from 'framer-motion';
import toast, { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2';
import loadingSVG from '../public/loading.svg'

interface FormData {
    name: string;
    email: string;
}

export default function Contact() {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/mailsend', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                // alert('Form submitted successfully!');
                console.log(result);
                toast.success('Success - Amit Will Contact You Soon!');
                setLoading(false);

            } else {
                setLoading(false);
                alert('Error submitting form');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Error submitting form');
            setLoading(false);
        }
    };


    return (
        <motion.section id='contact' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.250 }} className='my-20 w-[min(100%,38rem)]'>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 text-center'>Please contact me directly at <a className='underline' href='mailto:tkamit6@gmail.com'>tkamit6@gmail.com</a>{" "}
                or through this form <br /> +91-8802665778</p>
            <form onSubmit={handleSubmit} className='mt-10 flex flex-col gap-6'>
                <input name="email" onChange={handleChange} value={formData.email}
                    type="email" required placeholder='Your Email' className='h-12 rounded-lg border border-black/10 p-4 shadow-sm dark:bg-gray-50/10' />
                <input name="name" onChange={handleChange} value={formData.name}
                    required placeholder='Your Message - Mobile Number' className='h-52 rounded-lg border-black/10 p-4 shadow-md dark:bg-gray-50/10' />
                <button type='submit' className='group hover:scale-110 h-[3rem] w-[8rem] bg-gray-900  text-white rounded-full outline-none transition okk justify-center items-center flex gap-2' disabled={loading}>  {loading ? '...' : 'Submit'} <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:opacity-100 group-hover:translate-x-2' /> </button>
            </form>
            <Toaster
                toastOptions={{
                    className: '',
                    duration: 5000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    success: {
                        duration: 7000,
                        
                    },
                }}
                position="top-center"
                reverseOrder={false}
            />
        </motion.section>
    )
}
