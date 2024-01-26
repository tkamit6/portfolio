'use client'

import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react'
import { BsSun, BsMoon } from 'react-icons/bs'

type Theme = "light" | "dark";
export default function ThemeSwitch() {

    const [theme, setTheme] = useState<Theme>("light")

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light")
            window.localStorage.setItem("theme", "light")
            document.documentElement.classList.remove("dark");
        }
    }

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!) ;

    const handleDonate = async () => {
        const stripe = await stripePromise;
        const response = await fetch("/api/donate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                items: "1",
                email: "tkamit6@gmail.com",
            }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            stripe?.redirectToCheckout({ sessionId: data.sessionId }); // Corrected line
            console.log("ok");
        } else {
            throw new Error("Failed to create Stripe Payment");
        }
    };

    


    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        if (localTheme) {
            setTheme(localTheme)

            if (localTheme === "dark") {
                document.documentElement.classList.remove("dark");
            }
        }
    }, [])
    return (<>
        <button className='fixed bottom-10 right-10 bg-gray-950 w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-black shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950' onClick={toggleTheme}>
            {
                theme === "light" ? <BsSun className='text-white' /> : <BsMoon />
            }
        </button>
        <button className='fixed  md:right-10 top-[70%] md:top-10 right-3 rotate-90 md:rotate-0 px-6 py-2 bg-opacity-80 backdrop-blur-[0.5rem] border border-black shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:text-white dark:bg-gray-950' onClick={handleDonate}>
            Donate
        </button>
    </>
    )
}
