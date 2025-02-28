import React from 'react'
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'
 const About = () => {
   return (
     <section>
        <div className="container">
            <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">
            {/*=============== about img===================*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right:[-30%] md:right-[-7%] lg:right-[22%]">
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>

            {/*=============== about content===================*/}

            <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className='heading'>
                Orgullosos de ser los mejores en la zona
            </h2>
            <p className='text__para'>Nuestros fisioterapeutas están altamente capacitados para brindar el mejor servicio a nuestros pacientes.</p>
            <p className="text__para mt-[30px]">
                Lo mejor es algo que se puede lograr con dedicación y esfuerzo, y eso es lo que nos caracteriza, la dedicación y el esfuerzo por ser los mejores en la zona, con la mejor tecnología y un ambiente agradable para su recuperación.
            </p>

            <Link to='/'>
            <button className='btn'> Leer más </button>
            </Link> 
            </div>
            </div>
        </div>
     </section>
   )
 }
 
 export default About