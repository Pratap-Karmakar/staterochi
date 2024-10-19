'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import logo from '../assets/naiyo24.png'

export default function Component() {
  const [particles, setParticles] = useState([])
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  // Initialize particles
  useEffect(() => {
    const newParticles = Array.from({ length: 100 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      rotate: Math.random() * 360,
    }))
    setParticles(newParticles)
  }, [])

  // Use IntersectionObserver to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Particle Effect */}
      {inView && particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: '#FF9800',
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
      {inView && (
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="mb-8"
        >
          <div className="w-40 rounded-full  p-4 shadow-lg">
            <Image src={logo} width={128} height={128} alt="NAIYO24 Logo" className="rounded-full"/>
          </div>
        </motion.div>
      )}

      {/* Title Animation */}
      {inView && (
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4 text-center drop-shadow-lg"
          style={{ textShadow: '0px 0px 15px rgba(255, 152, 0, 0.8)' }}
        >
          NAIYO24
        </motion.h1>
      )}

      {/* Subtitle Animation */}
      {inView && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-2xl md:text-3xl text-orange-400 mb-8 text-center"
          style={{ textShadow: '0px 0px 10px rgba(255, 152, 0, 0.8)' }}
        >
          PRIVATE LIMITED
        </motion.p>
      )}

      {/* Slogan Animation */}
      {inView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative"
        >
          <motion.p
            animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-xl md:text-2xl text-orange-200 font-semibold text-center"
            style={{ textShadow: '0px 0px 10px rgba(255, 152, 0, 0.6)' }}
          >
            Innovating Your Digital Presence
          </motion.p>
        </motion.div>
      )}

      {/* Description Animation */}
      {inView && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-8 text-gray-300 max-w-3xl text-center px-4 md:px-0 leading-relaxed"
        >
          At NAIYO24 PRIVATE LIMITED, We're committed to transforming your digital dreams into reality. 
          As a leading provider of online application and website development services, our mission is 
          to deliver cutting-edge solutions that propel your business forward in the digital world.
        </motion.p>
      )}

      {/* Call to Action Button */}
      {inView && (
        <motion.a
          href="#"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.1 }}
          className="mt-12 px-6 py-3 bg-orange-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          Get Started
        </motion.a>
      )}

      {/* Wavy Line */}
      {inView && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-0 left-0 w-full"
        >
          <svg 
            viewBox="0 0 1440 320" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="none"
            className="w-full h-auto"
          >
            <path 
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" 
              fill="#FF9800"
            />
          </svg>
        </motion.div>
      )}
    </div>
  )
}
