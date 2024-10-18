"use client"

import React, { useState, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"

export default function Footer() {
  const controls = useAnimation()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    controls.start("visible")
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <motion.footer
      className="relative text-white pt-20 sm:pt-32 md:pt-44 w-full min-h-screen bg-zinc-900 py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 flex flex-col overflow-hidden"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <ParticleBackground />
      <div className="max-w-7xl mx-auto flex-grow flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        <motion.div className="lg:w-1/2 flex flex-col justify-between" variants={itemVariants}>
          <div className="space-y-6">
            <motion.h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
              variants={itemVariants}
            >
              About.
            </motion.h2>
            <motion.p className="max-w-md text-base sm:text-lg text-gray-300" variants={itemVariants}>
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We're committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </motion.p>
          </div>
          <motion.div className="mt-8 lg:mt-0 font-semibold text-xl sm:text-2xl text-gray-300" variants={itemVariants}>
            Naiyo24 pvt ltd.
          </motion.div>
        </motion.div>
        <motion.div className="lg:w-1/2 space-y-8 sm:space-y-12" variants={itemVariants}>
          <motion.h3 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-100" variants={itemVariants}>
            Quick Links.
          </motion.h3>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 gap-8" variants={containerVariants}>
            <LinkSection
              title="Social"
              links={[
                { label: "Facebook", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Twitter", href: "#" }
              ]}
              variants={itemVariants}
            />
            <LinkSection
              title="Company"
              links={[
                { label: "About Us", href: "/about" },
                { label: "Careers", href: "#" },
                { label: "Contact", href: "/contact" }
              ]}
              variants={itemVariants}
            />
            <LinkSection
              title="Legal"
              links={[
                { label: "Privacy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Cookies", href: "#" }
              ]}
              variants={itemVariants}
            />
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-zinc-800 text-center text-xs sm:text-sm text-gray-400"
        variants={itemVariants}
      >
        © {new Date().getFullYear()} NAIYO24 PRIVATE LIMITED. All Rights Reserved.
      </motion.div>
    </motion.footer>
  )
}

const LinkSection = ({ title, links, variants }) => (
  <motion.div className="space-y-3 sm:space-y-4" variants={variants}>
    <h4 className="text-xl sm:text-2xl font-semibold text-gray-200">{title}.</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <motion.li key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href={link.href} className="text-sm sm:text-base text-gray-300 hover:text-purple-400 transition-colors">
            {link.label}
          </Link>
        </motion.li>
      ))}
    </ul>
  </motion.div>
)

const ParticleBackground = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
      }))
    }

    setParticles(generateParticles())

    const handleResize = () => {
      setParticles(generateParticles())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}