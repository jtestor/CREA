import React from 'react'
import DoctorCard from '../../components/Doctors/DoctorCard'
import { doctors } from '../../assets/data/doctors'

const Doctors = () => {
  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Encuentra un doctor</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input 
              type="search" 
              className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"  
              placeholder="buscar doctor" 
            />
            <button className="btn mt-0 rounded-[0px] rounded-r-md ">search</button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid content-center grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  ">
            {doctors.map((doctor) =>
              <DoctorCard key={doctor.id} doctor={doctor} />)}
          </div>

        </div>
      </section>
    </>
  )
}

export default Doctors
