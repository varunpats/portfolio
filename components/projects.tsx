"use client"

import { Fragment } from 'react';
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from './project';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function Projects() {
    const ref = useSectionInView("Projects", 0.5);

    return (
        <motion.section ref={ref} id="projects" className='px-4 scroll-mt-28 mb-28 sm:px-0'>
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </motion.section>
    )
}

type ProjectProps = typeof projectsData[number]
