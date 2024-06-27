import React, { useState } from 'react'
import doctorImg from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from './DoctorAbout'
import Feedback from './Feedback'
import SidePanel from './SidePanel'

const DoctorDetails = () => {
  const [tab, setTab] = useState('sobre')

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} className='w-full' alt="Doctor" />
              </figure>

              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  Kinesiologo
                </span>
              
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Dr. Nombre del Doctor
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" />4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor">(272)</span>
                </div>
                <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px]">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque natus corporis velit, ea sit amet laudantium nemo ad fuga dolor quos commodi, ut a, eum dolorum quisquam ratione deleniti sunt?
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">  
              <button onClick={() => setTab("sobre")} className={`${tab === "sobre" && "border-b-2 border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>Sobre</button>
              <button onClick={() => setTab("feedback")} className={`${tab === "feedback" && "border-b-2 border-solid border-primaryColor"} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}>Feedback</button>
            </div>

            <div className="mt-[50px]">
              {tab === "sobre" && (<DoctorAbout />)}
              {tab === "feedback" && (<Feedback />)}
            </div>
          </div>

          <div >
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails
