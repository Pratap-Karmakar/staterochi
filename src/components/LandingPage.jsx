"use client"

import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResponsiveLanding() {
  return (
    <div className="relative flex flex-col justify-between min-h-screen overflow-hidden bg-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#FFA801]/20 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* <header className="relative z-10 p-4 sm:p-6 lg:p-8">
        <motion.h2
          className="text-2xl font-bold text-emerald-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          InnovateTech
        </motion.h2>
      </header> */}

      <main className="relative flex-grow flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="w-full max-w-6xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block text-[#FFA801] mb-2"
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.4 }}
            >
              Transforming Concepts
            </motion.span>
            <motion.span
              className="block font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2"
              initial={{ x: 1000 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.6 }}
            >
              into seamless
            </motion.span>
            <motion.span
              className="block text-[#FFA801] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4"
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{ type: "spring", damping: 12, stiffness: 100, delay: 0.8 }}
            >
              User Experiences
            </motion.span>
          </motion.h1>
        </div>
      </main>

      <footer className="relative mt-auto border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <motion.p
              className="text-xs sm:text-sm text-slate-300 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Naiyo24 pvt ltd. Shaping the Future, <span className="text-[#FFA801]">Today.</span>
            </motion.p>
            <motion.p
              className="text-xs sm:text-sm text-slate-300 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              Empowering Businesses through Innovative Technology.
            </motion.p>
            <Link href="/contact" passHref>
              <motion.button
                className="group py-2 sm:py-3 px-6 sm:px-8 bg-[#FFA801] text-black rounded-full cursor-pointer flex items-center gap-2 transition-all duration-300 hover:from-emerald-600 hover:to-amber-600 hover:scale-105 shadow-lg hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-sm sm:text-base font-semibold">Get Started</span>
                <ArrowRight className="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110" />
              </motion.button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}