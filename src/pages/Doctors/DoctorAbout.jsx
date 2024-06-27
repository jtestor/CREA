import React from 'react'

const DoctorAbout = () => {
  return (
      <div>
          <div>
              <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
                  Sobre el
                  <span className="text-irisBlueColor font-bold text-[24px] leading-9"> miguelito</span>
              </h3>
              <p className='text__para'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ullam ex fuga! Commodi pariatur adipisci suscipit quam est nulla tempora explicabo, ducimus impedit eaque, quisquam in fugiat culpa cumque possimus!</p>
          </div>

          <div className="mt-12">
              <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">Educación</h3>
              <ul className="pt-4 md:p-5">
                  <li className='flex flex-col sm:flex-row sm:justify-between sm:items- end md:gap-5 mb-[30px] '>
                      <div>
                          <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>2008</span>
                          <p className="text-[16px] leading-6 font-medium text-textColor"> PHD en kinesiologia</p>
                          
                      </div>
                      <p className="text-[14px] leading-6 font-medium text-textColor"> Universidad del descanso(UDD)</p>
                  </li>
              </ul>
              
          </div>



    </div>
  )
}

export default DoctorAbout