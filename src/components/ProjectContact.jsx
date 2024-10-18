"use client"

import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function ProjectContact() {
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
      className="w-full min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center overflow-hidden relative p-4 sm:p-6 md:p-8 lg:p-10"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Responsive star background */}
      {[...Array(100)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Explore the Cosmos
          </motion.h1>
        </motion.div>
        <motion.div variants={itemVariants}>
          <motion.p 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 text-gray-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Embark on a Stellar Journey
          </motion.p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-400">
            Discover the wonders of the universe and unravel the mysteries of space.
          </p>
        </motion.div>
      </div>

      <motion.div 
        className="mt-4 sm:mt-6 md:mt-8"
        variants={itemVariants}
      >
        <motion.div
          className="relative overflow-hidden rounded-full"
          whileHover="hover"
          initial="initial"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
            initial={{ y: "100%" }}
            variants={{
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.button
            className="relative z-10 text-base sm:text-lg md:text-xl lg:text-2xl px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-3 md:py-4 transition-colors duration-300 bg-transparent border-2 border-white rounded-full"
            variants={{
              initial: { color: "#ffffff" },
              hover: { color: "#ffffff" },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExplore}
          >
            Launch Mission
          </motion.button>
        </motion.div>
      </motion.div>
      
      {/* Responsive floating planets */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle at 30% 30%, hsl(${Math.random() * 360}, 70%, 50%), hsl(${Math.random() * 360}, 100%, 20%))`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 60 + 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Responsive orbiting asteroid belt */}
      <motion.div
        className="absolute w-[150%] h-[150%] border-[1px] border-gray-600 rounded-full"
        style={{ borderStyle: 'dashed' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(30)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-gray-400"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}