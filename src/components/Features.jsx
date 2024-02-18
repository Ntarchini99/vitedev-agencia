import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Feature from './Features/Feature'

export const Features = () => {

    const featuresRef = useRef(null)
    const isInView = useInView(featuresRef, { once: true })

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
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] py-20 bg-[#efeffe] relative z-40' >
            <div>
                
            </div>
            <motion.div
                ref={featuresRef} 
                animate={animation}
            >
                <p className='text-blue-mid font-bold text-lg'>Al elegirnos, usted...</p>
                <h2 className='text-blue-dark font-semibold xs:text-4xl 2xs:text-2xl sm:my-2 2xs:my-1'>Libere todo el potencial de su visión</h2>
                <p className='text-blue-dark md:pb-10 2xs:pb-6 sm:pr-80'>Respaldada por un Portfolio de más de <span className='text-blue-mid font-bold'>+70 proyectos ejecutados con éxito</span>, Nuestra agencia cuenta con experiencia en branding, marketing y desarrollo de aplicaciones/web de vanguardia.</p>
            </motion.div>
            <div>
                <Feature />
            </div>
        </section>
    )
}