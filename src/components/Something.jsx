"use client"

import React from "react"
import { motion, useAnimation, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useRouter } from 'next/navigation'
import { ChevronRight } from "lucide-react"

const fadeIn = ({ direction = "up", delay = 0 }) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
    x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
      delay,
      duration: 0.8,
    },
  },
})

const lineVariants = {
  hidden: { width: "0%" },
  visible: { width: "100%" },
}

const FloatingShape = ({ animate }) => (
  <motion.div
    className="absolute rounded-full bg-gradient-to-r from-primary to-secondary opacity-20"
    style={{
      width: `${Math.random() * 100 + 80}px`,
      height: `${Math.random() * 100 + 80}px`,
    }}
    animate={animate}
    transition={{
      duration: Math.random() * 20 + 15,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
)

const GlowingOrb = () => (
  <motion.div
    className="absolute w-72 h-72 bg-gradient-to-r from-primary to-secondary rounded-full filter blur-3xl opacity-30"
    animate={{
      scale: [1, 1.3, 1],
      opacity: [0.2, 0.5, 0.2],
      rotate: [0, 360],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
)

export default function Something() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const controls = useAnimation()
  const router = useRouter()

  React.useEffect(() => {
    if (inView) {
      controls.start("show")
    }
  }, [controls, inView])

  const handleLearnMore = () => {
    router.push('/about')
  }

  return (
    <div className="relative bg-background w-full min-h-screen overflow-hidden flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] opacity-10 bg-repeat" />

      {/* Floating Animated Shapes */}
      {[...Array(20)].map((_, index) => (
        <FloatingShape
          key={index}
          animate={{
            x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`],
            y: [`${Math.random() * 100}vh`, `${Math.random() * 100}vh`],
            rotate: [0, 360],
          }}
        />
      ))}

      {/* Glowing Orbs */}
      <GlowingOrb />
      <GlowingOrb />

      <div
        ref={ref}
        className="container mx-auto flex flex-col items-center justify-center space-y-8 sm:space-y-12 relative z-10 text-center"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn({ direction: "up" })}
          className="space-y-4 sm:space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
            Welcome to{" "}
            <AnimatePresence>
              <motion.span
                key="company-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-primary block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
              >
                NAIYO24 PRIVATE LIMITED
              </motion.span>
            </AnimatePresence>
          </h2>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-primary to-secondary w-24 mx-auto"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeIn({ direction: "up", delay: 0.2 })}
          className="space-y-6 sm:space-y-8 max-w-2xl"
        >
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
            <AnimatePresence>
              {["Innovating", "Your", "Digital", "Presence"].map((word, index) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="inline-block mr-2"
                >
                  {word}
                </motion.span>
              ))}
            </AnimatePresence>
          </h3>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={lineVariants}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="h-1 bg-gradient-to-r from-secondary to-primary w-24 mx-auto"
          />
          <motion.p
            variants={fadeIn({ direction: "up", delay: 0.4 })}
            className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-4 sm:px-0"
          >
            At NAIYO24 PRIVATE LIMITED, we're committed to transforming your digital dreams into reality. As a leading
            provider of online application and website development services, our mission is to deliver cutting-edge
            solutions that propel your business forward in the digital world.
          </motion.p>
          <motion.button
            variants={fadeIn({ direction: "up", delay: 0.6 })}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:from-primary/90 hover:to-secondary/90 transform hover:-translate-y-2 shadow-lg hover:shadow-xl flex items-center justify-center"
            onClick={handleLearnMore}
          >
            Learn More
            <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-secondary via-primary to-secondary"
      />
    </div>
  )
}
