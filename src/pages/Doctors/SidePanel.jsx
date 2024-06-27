import React from 'react'

const SidePanel = () => {
  return (
      <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
          <div className=" flex items-center justify-between">
              <p className="text__para mt-0 font-semibold">Precio</p>
              <span className="text-{16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">40.000 clp</span>
              
          </div>

          <div className="mt-[30px]">
              <p className="text__para mt-0 font-semibold text-headingColor"> horarios disponibles</p>
              <ul className="mt-3">
                  <li className="flex items-center justify-between mb-2">
                      <p className=" text-[15px] leading-6 text-textColor font font-semibold">Dias de semana</p>
                      <p className=" text-[15px] leading-6 text-textColor font font-semibold">8-5:30</p>
                  </li>
                  <li className="flex items-center justify-between mb-2">
                      <p className=" text-[15px] leading-6 text-textColor font font-semibold">Sabado</p>
                      <p className=" text-[15px] leading-6 text-textColor font font-semibold">9-4:00</p>
                  </li>
                  <li className="flex items-center justify-between mb-2">
                      <p className=" text-[15px] leading-6 text-textColor font font-semibold">Domingo</p>
                      <p className=" text-[15px] leading-6 text-textColor font font-semibold">9-2</p>
                  </li>
              </ul>
          </div>

          <button className="btn px-2 w-full rounded-md ">Solicitar cita</button>
    </div>
  )
}

export default SidePanel