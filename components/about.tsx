"use client";

import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const ref = useSectionInView("About");

    return <motion.section ref={ref} className='px-4 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 sm:px-0'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>

        <p className="mb-3">
            In my early days of graduation I got incline towards programming. In the last semester of{" "}<span className="font-medium">Computer Application</span> post graduation, got internship in a product-based organization. After working as a trainee for 3 months, secured permanant job as a Web developer. This job paved my way towards{" "}
            <span className="font-medium">Web development</span>.{" "}
            <span className="italic">My favourite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
                React, Next.js, Angular, and JavaScript
            </span>
            . Also familiar with TypeScript and Bootstrap. I am always looking to
            learn new technologies, currently mastering{" "}
            <span className="font-medium">Node.js</span>.
        </p>

        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, watching movies, and playing with my cat. Also enjoy{" "}
            <span className="font-medium">learning new things</span>, currently
            grasping{" "}
            <span className="font-medium">German</span> language.
        </p>
    </motion.section>
}
