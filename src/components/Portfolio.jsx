import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { projects } from './Routes/projects';
import { ProjectCard } from './Routes/ProjectCard';
import Slider from '../shared/Slider';
import RunningLine from './RunningLine';


export const Portfolio = () => {

    const portfolioRef = useRef(null)
    const isInView = useInView(portfolioRef, { once: true })

    const animation = useAnimation()

    useEffect(() => {
        animation.start({
            opacity: isInView ? 1 : 0,
            transition: {
                type: 'spring',
                duration: 1.7,
            }
        })
    }, [isInView, animation])

    return (
        <>
            <RunningLine />
            <section className='2xs:mx-[1rem] md:mx-[6rem] xl:mx-[16rem] 2xl:mx-[28rem] 3xl:mx-[32rem] my-20 border-b-[1px]'>
                <motion.div
                    className='md:pb-10 2xs:pb-6'
                    ref={portfolioRef}
                    animate={animation}
                >
                    <p className='text-blue-mid font-bold text-lg'>Nuestros trabajo</p>
                    <h2 className='text-blue-dark font-semibold xs:text-4xl 2xs:text-2xl sm:my-2 2xs:my-1'>Descubra nuestras vitrinas creativas</h2>
                    <p className='text-blue-dark sm:pr-80'>Interactúe con nuestro portafolio, una colección de proyectos que refleja nuestra pasión por dar vida a los conceptos. De la estrategia al diseño, sea testigo de nuestro viaje para transformar ideas en realidades tangibles..</p>
                </motion.div>
                <Slider />
                <div className='md:grid grid-cols-3 gap-3 2xs:hidden'>
                    {projects.map((project) => (
                            <ProjectCard project={project} />
                    ))}
                </div>
                <div className='flex 2xs:my-10 md:my-20'>
                    <a
                        className='mx-auto  px-6 py-4 rounded-full'
                        href="https://github.com/Ntarchini99"
                        target='_blank'
                    >
                        <button class="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            Github
                        </button>

                    </a>
                </div>
            </section>
        </>
    )
}

