import React, { useState, useRef, useEffect, forwardRef } from 'react'
import { Accordion } from '@/shared/Accordion'
import { useAnimation, useInView, motion } from 'framer-motion';
import { useFormContext } from '@/components/Form/FormContext'

export const Faq = forwardRef(function Faq(props, ref) {

    const { isFormVisible, setIsFormVisible } = useFormContext()

    const toggleForm = () => setIsFormVisible(!isFormVisible)

    const [list, setList] = useState([
        {
            heading: '¿Qué servicios ofrece la Agencia Digital ViteDev?',
            description: "Nuestra agencia ofrece una amplia gama de servicios que incluyen desarrollo web/aplicaciones, marketing digital, marketing en redes sociales, gestión de cuentas y creación de contenidos..",
            active: 1,
        },
        {
            heading: '¿Cómo puedo empezar a trabajar con la Agencia Digital ViteDev?',
            description: "Puedes empezar contactando con nosotros a través de nuestro Email o WhatsApp y organizaremos una consulta para analizar las necesidades de tu negocio y cómo podemos ayudarte..",
        },
        
        {
            heading: '¿Qué resultados puedo esperar al colaborar con ViteDev Digital Agency?',
            description: "Nuestros clientes suelen experimentar una mayor visibilidad en línea, una identidad de marca más poderosa y un crecimiento empresarial. Los resultados específicos varían según sus objetivos y las estrategias que implementamos..",
        },
        {
            heading: '¿Qué diferencia a ViteDev Digital Agency de otras agencias de marketing digital? ',
            description: "ViteDev Digital Agency ofrece servicios personalizados adaptados a los requisitos únicos de cada cliente. Nos enfocamos en diseñar estrategias innovadoras y ofrecer orientación experta, ayudando a nuestros clientes a lograr sus objetivos comerciales..",
        },
        {
            heading: '¿Quiénes son los clientes típicos de ViteDev Digital Agency?',
            description: "Atendemos a negocios de todo tipo y tamaño, desde nuevas emprendimienitos hasta corporaciones establecidas. Nuestra clientela abarca diversas industrias, incluidas empresas de tecnología y negocios minoristas..",
        },
        {
            heading: "¿Cuál es el costo de los servicios de ViteDev Digital Agency?",
            description: "El costo de nuestros servicios depende de sus necesidades comerciales específicas. Recomendamos contactar con nosotros para un presupuesto personalizado..",
        },
    ]);

    const textRef = useRef(null)
    const isInView = useInView(textRef, { once: true })
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
        <section className={`2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[32rem] 2xl:py-20 lg:pb-6 lg:pt-20 2xs:py-6 transition duration-500 ease-in-out `} ref={ref} >
            <div className=' flex 2xs:flex-col sm:flex-row w-full xs:px-4'>
                <motion.div 
                    className='flex flex-col sm:w-1/2'
                    ref={textRef}
                    animate={animation}>
                    <h3 className='font-semibold sm:text-4xl 2xs:text-2xl text-white pb-4'>Preguntas frecuentes</h3>
                    <p className='text-white sm:pb-8 xs:pr-20 '>Si tiene más preguntas después de leerlas, no dude en enviarnos un mensaje o programar una llamada..</p>
                </motion.div>
                <div className='sm:w-1/2'>
                    {
                        list.map((item, key) => (
                            <Accordion datas={item} key={key} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
})
