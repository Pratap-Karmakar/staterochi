'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import naiyo24 from '../assets/naiyo24.png'
import Image from 'next/image'

export default function Component() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      rotate: Math.random() * 360,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-blue-900 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Particle Effect */}
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute bg-blue-500 rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: particle.rotate,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Logo Animation */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: 1, rotate: 360 }}
        transition={{ duration: 1.5, type: "spring" }}
        className="mb-8"
      >
        <div className="w-40 rounded-full bg-white p-4 shadow-lg">
          <Image src={naiyo24} alt="NAIYO24 Logo" className="rounded-full"/>
        </div>
      </motion.div>

      {/* Title Animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-center drop-shadow-lg"
        style={{ textShadow: '0px 0px 15px rgba(255, 255, 255, 0.8)' }}
      >
        NAIYO24
      </motion.h1>

      {/* Subtitle Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-2xl md:text-3xl text-blue-400 mb-8 text-center"
        style={{ textShadow: '0px 0px 10px rgba(0, 150, 255, 0.8)' }}
      >
        PRIVATE LIMITED
      </motion.p>

      {/* Slogan Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative"
      >
        <motion.p
          animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl md:text-2xl text-blue-200 font-semibold text-center"
          style={{ textShadow: '0px 0px 10px rgba(255, 255, 255, 0.6)' }}
        >
          Innovating Your Digital Presence
        </motion.p>
      </motion.div>

      {/* Description Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-8 text-gray-300 max-w-3xl text-center px-4 md:px-0 leading-relaxed"
      >
        At NAIYO24 PRIVATE LIMITED, we're committed to transforming your digital dreams into reality. 
        As a leading provider of online application and website development services, our mission is 
        to deliver cutting-edge solutions that propel your business forward in the digital world.
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="#"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="mt-12 px-6 py-3 bg-blue-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        Get Started
      </motion.a>
    </div>
  )
}
