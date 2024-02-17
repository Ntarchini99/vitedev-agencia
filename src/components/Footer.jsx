import { React, forwardRef } from 'react'
import logoFooter from '@/assets/vitedevv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'


export const Footer = forwardRef(function Footer(props, ref) {

    return (
        <section className='2xs:px-[1rem] md:px-[6rem] xl:px-[16rem] 2xl:px-[28rem] 3xl:px-[42rem] sm:py-8 2xs:py-6 bg-blue-dark relative overflow-hidden'>
            <div className='flex justify-between items-center w-full border-b-[1px] border-blue-mid relative z-20'>
                <div className='pb-4'>
                    <a href="#">
                        <img src={logoFooter} alt="logo" className='2xs:w-20 sm:w-[25%] hover:scale-110 transition duration-500 spring' />
                    </a>
                </div>
                <div className='mt-10'>
                    <ul className='flex lg:gap-4 2xs:gap-2'>                      
                        <li className='hover:scale-125 transition duration-500 spring'>
                            <a href="https://www.instagram.com/vitedev_agencia/" target='_blank' className='flex gap-5 items-center cursor-pointer'>
                                <FontAwesomeIcon icon={faInstagram} style={{color: "#fff"}} className='fa-lg' />
                            </a>
                        </li>
                        <li className='hover:scale-125 transition duration-500 spring'>
                            <a href="https://www.linkedin.com/in/vitedev-agency-3942652a4/" target='_blank' className='flex gap-5 items-center cursor-pointer'>
                                <FontAwesomeIcon icon={faLinkedin} style={{color: "#fff"}} className='fa-lg' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex pt-8'>
                <div className='mx-auto'>
                    <p className='text-white text-sm '>© ViteDev Agencia Digital 2023. Todos los derechos Reservados.</p>
                </div>
            </div>
            <div className='absolute inset-l-96 top-40 ml-48 w-[900px] h-[500px] backgroundGradientFooter opacity-60 scale-150 z-10'></div>
        </section>
    )
})