import { Fragment } from 'react';
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from './project';
import { useActiveSection } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';

export default function Projects() {
    const { ref, inView } = useInView();
    const { setActiveSection } = useActiveSection();

    if (inView) {
        setActiveSection("Projects");
    }

    return (
        <section ref={ref} id="projects" className='scroll-mt-28'>
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <Fragment key={index}>
                        <Project {...project} />
                    </Fragment>
                ))}
            </div>
        </section>
    )
}

type ProjectProps = typeof projectsData[number]
