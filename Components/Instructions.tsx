/**
 * Test Page - Instructions Section
 */

// Dependencies
"use client"; // Indicate this component is client-side

import React from 'react';
import Link from 'next/link'; // Use Next.js Link component
import INSTRUCTIONS from './Rules'; // Ensure Rules is correctly importing your instructions
import { motion } from 'framer-motion';

interface InstructionsProps {
    setTestInProgress: React.Dispatch<React.SetStateAction<boolean>>;
}

const Instructions: React.FC<InstructionsProps> = ({ setTestInProgress }) => {
    const handleStartTest = () => {
      window.location.href="/Assesment"
      setTestInProgress(true)
    };

    return (
        <section className='w-full bg-white mx-auto py-12 px-8 flex flex-col'>
            <h1 className='font-heading text-3xl md:text-5xl font-bold text-center text-gray-900'>
                Mental Health Check
            </h1>
            <h2 className='text-lg md:text-2xl font-medium text-center max-w-2xl mx-auto mt-4 text-gray-900'>
                Assess your well-being with a comprehensive 25-question test. 
                Based on the Burns Depression Checklist from *Feeling Good: the new mood therapy*.
            </h2>
            <div className='flex flex-col gap-8 mt-8 w-full'>
                {INSTRUCTIONS.map((instruction, index) => (
                    <motion.div
                        key={index} // Use index as the key
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                            delay: 0.05 * (index + 1),
                            type: 'keyframes',
                            duration: 0.2,
                        }}
                        viewport={{ once: true }}
                        className={`${
                            index % 2 === 0 
                                ? 'bg-gray-100 text-gray-900' // Gray text for bg-tertiary
                                : 'bg-gray-300 text-gray-900' // White text for bg-secondary
                        } w-full rounded-xl text-textPrimary grid grid-cols-1 md:grid-cols-2 py-8 px-12 place-items-center sticky shadow hover:-translate-y-1 hover:shadow-md transition-all`}
                        style={{
                            top: `${(index + 1) * 2}em`,
                        }}
                    >
                        <div>
                            <p className='font-heading font-bold text-base md:text-2xl'>
                                {instruction.text}
                            </p>
                        </div>
                        <div className='hidden md:block'>
                            <div className='max-w-xs rounded-full overflow-hidden'>
                                <img
                                    src={`${instruction.image}`} // Corrected image path
                                    alt={instruction.text}
                                    className='w-full h-auto object-contain'
                                    loading='lazy'
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            
            <div className='min-h-[20vh] md:min-h-[40vh] mt-12 flex flex-col items-center justify-center gap-8 text-center'>
                <h2 className='text-3xl md:text-5xl max-w-3xl font-heading text-gray-900'>
                    Don't wait anymore to start taking control of your mind and your life.
                </h2>
                <button
                    onClick={handleStartTest} // Use the handler function
                    className='px-8 text-gray-900 py-4 mx-auto border-secondary border-2 rounded-full font-semibold hover:bg-tertiary transition-all hover:border-secondaryDark hover:bg-gray-900 hover:text-white'
                >
                    Take test now
                </button>
                <Link href="/home" passHref>
                    <span className='text-gray-900 hover:underline cursor-pointer'>Go back home? Click here.</span>
                </Link>
            </div>
        </section>
    );
};

export default Instructions;
