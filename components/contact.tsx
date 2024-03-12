"use client"

import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';

export default function Contact() {
    const ref = useSectionInView("Contact", 0.3);

    return (
        <motion.section
            id="contact"
            ref={ref}
            className='mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}
        >
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-6'>
                Please contact me directly at{" "}
                <a className="underline" href="mailto:varunpatil2502@gmail.com">
                    varunpatil2502@gmail.com
                </a>{" "}
                or through this form.
            </p>
            <form className='mt-10 flex flex-col' action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                    toast.error(error)
                    return;
                }

                toast.success('Email sent successfully!')
            }}>
                <input type='email' className='h-14 px-4 rounded-lg borderBlack' placeholder='Your email' name="email" maxLength={60} required />
                <textarea className='h-52 my-3 p-4 rounded-lg borderBlack' placeholder='Your message' name="message" maxLength={2000} required />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}
