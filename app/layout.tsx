import ActiveSectionContextProvider from '@/context/active-section-context'
import Header from '../components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context/theme-context';
import { SpeedInsights } from "@vercel/speed-insights/next"
// import { initGA, logPageView } from '../path-to-analytics-file/analytics';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amit | Personal Portfolio Web App',
  description: "I'm Amit an energetic developer specializing in Frontend development, React Js, Tailwind CSS, Javascript ES6 able to develop responsive websites and web apps.",
  name:"google-site-verification",
  content:"tcLcVD1vFzsT_f9GRWgA4Lb8A5_4nYpwb81hRZ5YyvE"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <meta name="google-site-verification" content="tcLcVD1vFzsT_f9GRWgA4Lb8A5_4nYpwb81hRZ5YyvE" />
      <body className={`${inter.className} bg-gray-50 text-gray-950 pt-28 sm:pt-36 relative !scroll-smooth dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <div className=' absolute top-[-6rem] right-[6rem] h-[31.25rem] w-[32.24rem] -z-10 rounded-full blur-[6rem] sm:w-[68rem]'></div>
        <div className='bg-[#bdb7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50.24rem] -z-10 rounded-full blur-[10rem] sm:w-[68rem] md:left-[-35rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem]'></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <SpeedInsights/>
            {children}
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
