import React from 'react';
import logoNav from '@/assets/nave-sola-remove.png';
import { motion } from 'framer-motion';

export const Navbar = () => {

    return (
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] relative'>
            <div className='backgroundGradientNavbar absolute inset-0 z-10 w-full h-[1000px]'></div>
            <div className='flex justify-between items-center mx-auto py-4 relative z-10'>
                <motion.div
                    initial={{ opacity: 0, y: -60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.7,
                        delay: 1.9,
                        type: 'spring',
                        bounce: 0.5,
                    }}>
                    <a href="/" className=''>
                        <img src={logoNav} alt="logo" className='2xs:w-20 sm:w-[30%] hover:scale-110 transition duration-500 spring' />
                    </a>
                </motion.div>
                <div className='sm:flex 2xs:hidden pt-3 items-center'>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2,
                            type: 'spring',
                            bounce: 0.5,
                        }}
                    >
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.7,
                            delay: 2.1,
                            type: 'spring',
                            bounce: 0.5,
                        }}
                    >
                        <a
                            className=' inline-block font-semibold bg-blue-dark px-6 py-4 rounded-full hover:bg-blue-dark-opaque transition duration-500'
                            href="mailto:vitedevagency@gmail.com"
                            target='_blank'
                        >
                            <span className='text-white'>Enviar un Email</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
