import { motion, useInView, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import process1 from '@/assets/process1.png';
import process2 from '@/assets/process2.png';
import process3 from '@/assets/process3.png';

export const Process = () => {

    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)

    const isInViewFirst = useInView(firstRef, { once: true })
    const isInViewSecond = useInView(secondRef, { once: true })
    const isInViewThird = useInView(thirdRef, { once: true })

    const animationFirst = useAnimation()
    const animationSecond = useAnimation()
    const animationThird = useAnimation()

    useEffect(() => {
        if (isInViewFirst) {
            animationFirst.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!isInViewFirst) {
            animationFirst.start({
                x: -300,
                opacity: 0,
            })
        }
    }, [isInViewFirst, animationFirst])

    useEffect(() => {
        if (isInViewSecond) {
            animationSecond.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!isInViewSecond) {
            animationSecond.start({
                x: 300,
                opacity: 0,
            })
        }
    }, [isInViewSecond, animationSecond])

    useEffect(() => {
        if (isInViewThird) {
            animationThird.start({
                x: 0,
                opacity: 1,
                transition: {
                    type: 'spring',
                    duration: 2,
                    bounce: 0.2,
                }
            })
        }
        if (!isInViewThird) {
            animationThird.start({
                x: -300,
                opacity: 0,
            })
        }
    }, [isInViewThird, animationThird])

    const processRef = useRef(null)
    const isInView = useInView(processRef, { once: true })

    const animation = useAnimation()

    useEffect(() => {
        animation.start({
            y: 0,
            opacity: isInView ? 1 : 0,
            transition: {
                type: 'spring',
                duration: 1.7,
            }
        })
    }, [isInView, animation])

    return (
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] backgroundGradient overflow-hidden'>
            <motion.div
                className='flex flex-col sm:my-20 2xs:mt-20 2xs:mb-0'
                ref={processRef}
                animate={animation}
            >
                <p className='text-blue-mid font-bold text-lg sm:mx-auto sm:py-2'>Nuestro proceso</p>
                <h2 className='text-blue-dark font-semibold xs:text-4xl 2xs:text-2xl sm:mx-auto'>¿Como funciona?</h2>
            </motion.div>
            <div className='flex flex-col'>
                <motion.div
                    className='flex 2xs:flex-col 2xs:my-10 sm:flex-row sm:my-0 items-center w-full'
                    ref={firstRef}
                    animate={animationFirst}
                >
                    <div className='sm:w-1/2'>
                        <div className='flex flex-col border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 mr-2 mb-2'>
                            <p className='text-blue-mid font-semibold text-lg py-1'>Paso 1</p>
                            <h3 className='text-blue-dark font-semibold text-xl pb-4'>Descubrir y definir</h3>
                            <p className='text-blue-dark'>Comenzamos sumergiéndonos en su visión y objetivos. Con un gran enfoque en sus necesidades de desarrollo web, entenderemos su negocio de cerca, llevaremos a cabo investigaciones exhaustivas y participaremos en diálogos profundos para delinear el camino hacia su triunfo digital..</p>
                        </div>
                    </div>
                    <div className='sm:w-1/2 sm:pl-20'>
                        <img src={process1} alt="process-image" />
                    </div>
                </motion.div>
                <motion.div
                    className='flex 2xs:flex-col-reverse 2xs:my-10 sm:flex-row items-center w-full'
                    ref={secondRef}
                    animate={animationSecond}
                >
                    <div className='sm:w-1/2'>
                        <img src={process2} alt="process-image" />
                    </div>
                    <div className='sm:w-1/2'>
                        <div className='flex flex-col border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 mr-2 mb-2'>
                            <p className='text-blue-mid font-semibold text-lg py-1'>Paso 2</p>
                            <h3 className='text-blue-dark font-semibold text-xl pb-4'>Diseño y desarrollo</h3>
                            <p className='text-blue-dark'>Armados con un plan sólido, nuestros equipos capacitados se hacen cargo. Ellos diseñarán y construirán sus soluciones digitales, con un enfoque principal en un sitio web atractivo e innovador..</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='flex 2xs:flex-col 2xs:my-10 sm:flex-row items-center w-full'
                    ref={thirdRef}
                    animate={animationThird}
                >
                    <div className='sm:w-1/2'>
                        <div className='flex flex-col border-[1px] rounded-md bg-blue-light border-blue-light px-8 py-6 mr-2 mb-2'>
                            <p className='text-blue-mid font-semibold text-lg py-1'>Paso 3</p>
                            <h3 className='text-blue-dark font-semibold text-xl pb-4'>Entregar y optimizar</h3>
                            <p className='text-blue-dark'>La siguiente es la parte emocionante: lanzar sus soluciones digitales. Nuestro compromiso se extiende más allá de la simple entrega. Nos comprometemos a un perfeccionamiento y mejora continuos. Supervisaremos de cerca sus activos digitales, analizándolos y mejorándolos para garantizar que superen consistentemente sus expectativas..</p>
                        </div>
                    </div>
                    <div className='sm:w-1/2 sm:pl-20'>
                        <img src={process3} alt="process-image" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
