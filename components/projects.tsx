"use client"

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Project from './project';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

type projectProps = (typeof projectsData)[number];


export default function Projects() {
    // const { ref, inView } = useInView({
    //     threshold: 0.2,
    // });
    // const { setActiveSection } = useActiveSectionContext();

    // useEffect(() => {
    //     if (inView) {
    //         setActiveSection("Projects")
    //     }
    // },[])
    return (
        <section id='projects'  className='scroll-mt-28 mx-auto w-[100%] sm:w-[100%] ' >
            <SectionHeading>My projects </SectionHeading>
            {
                projectsData.map((project, index) => (
                    <div key={index}>
                        <Project {...project} />
                    </div>
                ))
            }

        </section>
    )
}

