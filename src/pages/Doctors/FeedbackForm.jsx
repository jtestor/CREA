import React, { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [reviewText, setReviewText] = useState('')

  const handleSubmitReview = async e => {
    e.preventDefault()
    // Lógica para enviar el feedback al backend
  }

  return (
    <form onSubmit={handleSubmitReview}>
      <div>
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Califica tu experiencia!*
        </h3>
        <div className="flex">
          {[...Array(5)].map((_, index) => {
            index += 1; // Incrementar índice para que comience desde 1
            return (
              <button
                key={index}
                type="button"
                className={`${index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"} bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => { setRating(0); setHover(0); }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            )
          })}
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Comparte tus sugerencias
        </h3>
        <textarea
          className="border border-solid border-[#0066ff] w-full px-4 py-3 rounded-md focus:border-primaryColor"
          placeholder="Escribe aquí tus sugerencias"
          rows="5"
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>

      <button type="submit" className="btn mt-4">Enviar feedback</button>
    </form>
  )
}

export default FeedbackForm
