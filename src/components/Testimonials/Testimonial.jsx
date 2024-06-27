import React from 'react'
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import patientAvatar from "../../assets/images/patient-avatar.png"
import { HiStar } from "react-icons/hi"

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="patient-avatar" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Miguel Testor</h4>
                <p className="text__para">Excelente servicio y atención.</p>
                <div className="flex">
                  <HiStar className="text-yellow-500" />
                  <HiStar className="text-yellow-500" />
                  <HiStar className="text-yellow-500" />
                  <HiStar className="text-yellow-500" />
                  <HiStar className="text-yellow-500" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* Añadir más SwiperSlide según sea necesario */}
      </Swiper>
    </div>
  )
}

export default Testimonial
