'use client'

import React, { useRef, useState, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination, Autoplay } from "swiper/modules"
import { Crop, Pencil, Monitor, BookOpen, Rocket, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

const fadeIn = (direction = "up", delay = 0.3) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : -40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.2,
      delay,
    },
  },
})

const serviceData = [
  {
    icon: <Crop className="h-6 w-6" />,
    title: "Custom Web Applications",
    description:
      "From dynamic web apps to sophisticated online platforms, we design and develop tailor-made web applications that cater to your unique business needs.",
    link: "/webapp",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Pencil className="h-6 w-6" />,
    title: "Website Design & Development",
    description:
      "Our team of expert designers and developers craft stunning, user-friendly websites that not only look great but also function seamlessly across all devices.",
    link: "/webapp",
    gradient: "from-blue-500 to-teal-500",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "E-Commerce Solutions",
    description:
      "We create robust, secure, and scalable e-commerce platforms that provide a seamless shopping experience for your customers, helping you grow your business effortlessly.",
    link: "/ecommercesolution",
    gradient: "from-green-500 to-yellow-500",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Mobile App Development",
    description:
      "Whether you need an iOS app, an Android app, or a cross-platform solution, we have the expertise to deliver high-quality mobile applications that engage and retain users.",
    link: "/mobileapp",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Digital Strategy & Consulting",
    description:
      "Our digital strategy and consulting services offer you the guidance and insights needed to make informed decisions, optimize your digital presence, and achieve your business goals.",
    link: "/digitalstrategy",
    gradient: "from-indigo-500 to-purple-500",
  },
]

export default function Component() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, threshold: 0.2 })
  const controls = useAnimation()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start("show")
    }
  }, [isInView, controls])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-primary-foreground py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"
            style={{
              backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`,
            }}
          />
        ))}
      </div>

      {/* Custom cursor */}
      <motion.div
        className="fixed w-6 h-6 rounded-full bg-primary mix-blend-difference pointer-events-none z-50"
        animate={{ x: cursorPosition.x - 12, y: cursorPosition.y - 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <div className="flex flex-col items-center justify-center gap-16">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate={controls}
            className="text-center max-w-3xl"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 bg-clip-text text-[#FFA801] bg-gradient-to-r from-primary to-primary-foreground">
              What we do.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-12 px-4 sm:px-0 leading-relaxed">
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and mobile solutions
              tailored to your business. We're committed to turning your digital ideas into reality
              with cutting-edge technology and expert services.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate={controls}
            className="w-full max-w-7xl"
          >
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              modules={[FreeMode, Pagination, Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="w-full h-auto pb-12"
            >
              {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={item.link}>
                    <Card className="h-[300px] bg-black sm:h-[300px] bg-card/5 backdrop-blur-sm hover:bg-card/10 transition-all duration-300 group border-none shadow-xl">
                      <CardHeader className="flex flex-row items-center">
                        <div className={`p-2 rounded-full bg-[#FFA801]`}>
                          {item.icon}
                        </div>
                      </CardHeader>
                      <CardContent className="relative h-full">
                        <CardTitle className="text-xl sm:text-2xl mb-3 text-primary group-hover:text-primary/80 transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-primary-foreground/70 group-hover:text-primary-foreground transition-colors duration-300">
                          {item.description}
                        </CardDescription>
                        <div className="absolute bottom-4 right-4">
                          <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform text-[#FFA801] group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </div>
                      </CardContent>
                      <div className={`absolute bottom-0 left-0 h-1 w-full bg-[#FFA801] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                    </Card>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  )
}