'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const teamData = [
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Srijani Ghosh",
    title: "BDM SEO and Marketing",
  },
  {
    quote: "Ongoing Projects - Niayo24, Nariii",
    name: "Sambik Karmakar",
    title: "IT Full Stack Graphic Designer",
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Aaryan Sinha Roy",
    title: "API, Server-side programming and App Deployment",
  },
  // Add more team members here...
]

export default function TeamData() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamData.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamData.length) % teamData.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(nextSlide, 5000)
      return () => clearInterval(timer)
    }
  }, [isHovered])

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex flex-col justify-center items-center p-4 md:p-8">
      <div className="max-w-4xl w-full text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Our Team at Naiyo24 pvt ltd.
        </h2>
        <p className="text-base md:text-lg text-gray-700">
          We founded Naiyo24 pvt ltd. with the belief that a powerful presentation can spark interest and drive business outcomes more effectively than words alone.
        </p>
      </div>

      <div 
        className="relative w-full max-w-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 border border-gray-200">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-4">
              <img
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${teamData[currentIndex].name}`}
                alt={teamData[currentIndex].name}
                className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-200 shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                {teamData[currentIndex].name}
              </h3>
              <p className="text-gray-600 mb-4">
                {teamData[currentIndex].title}
              </p>
              <p className="text-gray-500 italic text-sm md:text-base">
                &quot;{teamData[currentIndex].quote}&quot;
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-4 md:-left-8 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-lg"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -right-4 md:-right-8 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 md:p-3 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 shadow-lg"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {teamData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
              index === currentIndex ? 'bg-gray-800 w-4 md:w-6' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}