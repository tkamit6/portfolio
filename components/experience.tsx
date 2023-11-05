'use client'

import React from 'react'
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
    return (
        <section className='max-w[50rem]'>
            <SectionHeading>My Experience</SectionHeading>
            <VerticalTimeline>
                {experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement contentStyle={{
                            background: "#fff",
                            boxShadow: "0px 0px 15px -7px rgba(0,0,0,0.5)",
                            border: "1px solid rgba(0,0,0,0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                            visibility:"visible",
                            zIndex:"-1",
                            borderRadius:"20px"

                        }}
                            contentArrowStyle={{
                                borderRight: "0.4rem solid red"
                            }}
                            date={item.date}
                            icon={item.icon}
                        >
                            <h3 className={`font-semibold text-lg capitalize ${item.headingColor}`}>{item.title}</h3>
                            <p className='font-normal !mt-0'>{item.location}</p>
                            <p className='font-normal !mt-0 text-gray-700 '>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>

        </section>
    )
}
