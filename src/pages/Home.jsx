import React from 'react'
import heroImg1 from '../assets/images/hero-img01.png'
import heroImg02 from '../assets/images/hero-img02.png'
import heroImg03 from '../assets/images/hero-img03.png'
import icon01 from '../assets/images/icon01.png'
import icon02 from '../assets/images/icon02.png'
import icon03 from '../assets/images/icon03.png'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import About from '../components/About/About'
import ServiceList from '../components/Services/ServiceList'
import featureImg from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import avatarIcon from '../assets/images/avatar-icon.png'
import DoctorList from '../components/Doctors/DoctorList'
import faqImg from '../assets/images/faq-img.png'
import FaqList from '../components/Faq/FaqList'


const Home = () => {
  return (
    <>
      {/*=============== hero section===================*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className='container'>
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*=============== hero content===================*/}
            <div className="lg:w-[570px]">
              <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                Bienvenido a CREA, tu centro de rehabilitación
              </h1>
              <p className="text__para">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nemo vitae, soluta voluptatibus, magni dicta id inventore facilis voluptatem placeat, esse adipisci voluptate. Consequuntur repellat ratione corrupti, voluptatem enim at.
              </p>
              <button className="btn">solicita una cita</button>
              {/*=============== hero image===================*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">30+</h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">años ayudando </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">5000+</h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">clientes </p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">Localizacion</h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Los Angeles, Chile </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full mb-[30px]" src={heroImg1} alt="" />
              </div>
              <div className="flex flex-col gap-[30px]">
                <img src={heroImg02} alt="" className='w-full' />
                <img src={heroImg03} alt="" className='w-full' />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=============== hero section end===================*/}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Contamos con el mejor servicio fisioterapeuta</h2>
            <p className="text__para text-center">Profesionalismo y calidad para Los Angeles, pioneros en la los tratamientos físicos en la ciudad</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Encuentra tu fisioterapeuta</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Tratamiento de calidad acreditado por la comunidad, validado por profesionales de la salud</p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Encuentranos</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Sede principal en Los Angeles, Chile</p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">Agenda tu cita</h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">Te contactaremos para confirmar tu cita con tu fisioterapeuta elegido</p>
                <Link to='/doctors' className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none">
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      {/*=============== service section ===================*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nuestros servicios</h2>
            <p className="text__para text-center">Ofrecemos una amplia gama de servicios de fisioterapia para ayudarte a recuperarte de lesiones y mejorar tu calidad de vida</p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*=============== service section end ===================*/}
      {/*=============== feature section ===================*/}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Recibe tratamiento virtual <br /> en todo momento</h2>
              <ul className="spl-4">
                <li className="text__para">1. Agenda tu hora de atención directamente</li>
                <li>2. Conéctate con tu fisioterapeuta en línea</li>
                <li>3. Recibe tratamiento virtual en tiempo real</li>
              </ul>
              <Link to={'/'}><button className='btn'> Conoce más </button></Link>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className='w-3/4' alt="" />
              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]'>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">tue, 24</p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">10:00 am</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>
                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full text-center">Consulta</div>
                <div className="flex items-center gap-[6px] lg:gap-[6px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Gregorio Azócar</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*=============== our doctors ===================*/}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Nuestros Doctores</h2>
            <p className="text__para text-center">Ofrecemos una amplia gama de servicios de fisioterapia para ayudarte a recuperarte de lesiones y mejorar tu calidad de vida</p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/*=============== our doctors end ===================*/}
      {/*=============== FAQ section===============*/}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Lo mas preguntado por nuestros pacientes!</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*=============== FAQ section end===============*/}
      {/*================= Testimonios===================*/}

      {/*================= Testimoniales end===================*/}
    </>
  )
}

export default Home
