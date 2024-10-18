"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function CosmicExplorer() {
  const router = useRouter()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  }

  const handleExplore = () => {
    router.push('/explore')
  }

  return (
    <motion.div 
      ref={ref}
      className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900 text-white flex flex-col justify-center items-center overflow-hidden relative p-4 sm:p-6 md:p-8 lg:p-10"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Enhanced star background */}
      {[...Array(200)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      <div className="text-center relative z-10 max-w-4xl mx-auto">
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Cosmic Explorer
          </motion.h1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 text-gray-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Embark on an Interstellar Odyssey
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 text-gray-400">
            Unravel the mysteries of the cosmos and chart your course through the stars.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-6 sm:mt-8 md:mt-10"
        variants={itemVariants}
      >
        <motion.div
          className="relative overflow-hidden rounded-full"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.button
            className="relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl px-8 sm:px-10 md:px-12 lg:px-16 py-3 sm:py-4 md:py-5 transition-colors duration-300 bg-transparent border-2 border-white rounded-full"
            variants={{
              initial: { color: "#ffffff" },
              hover: { color: "#ffffff" },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
          >
            Launch Expedition
          </motion.button>
        </motion.div>
      </motion.div>
      

      {/* Animated nebula effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,0,255,0.2) 0%, rgba(0,0,255,0.2) 50%, rgba(0,255,255,0.2) 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.div>
  )
}