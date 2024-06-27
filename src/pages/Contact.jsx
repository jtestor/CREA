import React from 'react'

const Contact = () => {
  return (
    <section>
      <div className=" px-4 mx-auto max-w-screen-md">
        <h2 className=" heading text-center"> contactanos</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text__para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi iure explicabo quia fugit officia iusto suscipit expedita alias quae, distinctio ea commodi, eaque blanditiis! Eius aperiam porro qui aut.</p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form__label">Tu mail</label>
            <input type="email" id="email" placeholder="hola@gmail.com" className="form__input mt-1"/>
          </div>
          <div>
            <label htmlFor="subject" className="form__label">cual es tu tema?</label>
            <input type="email" id="subject" placeholder="escribe en que podemos ayudarte" className="form__input mt-1"/>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form__label">como podemos ayudarte?, escribe tu mensaje aqui</label>
            <textarea rows="6" type="email" id="message" placeholder="escribe en que podemos ayudarte" className="form__input mt-1"/>
          </div>
          <button type="submit" className="btn rounded sm:w-fit">Enviar</button>
        </form>      
      </div>
    </section>
  )
}

export default Contact