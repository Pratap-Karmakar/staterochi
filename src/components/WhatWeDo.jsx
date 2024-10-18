'use client'

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Pagination } from "swiper/modules"
import { Crop, Pencil, Monitor, BookOpen, Rocket, ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/Card"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

const fadeIn = (direction = "up", delay = 0.3) => {
  const x = direction === "left" ? 30 : direction === "right" ? -30 : 0
  const y = direction === "up" ? 30 : direction === "down" ? -30 : 0

  return {
    hidden: {
      opacity: 0,
      x,
      y,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        delay: delay,
      },
    },
    exit: {
      opacity: 0,
      x: direction === "left" ? 30 : direction === "right" ? -30 : 0,
      y: direction === "up" ? 30 : direction === "down" ? -30 : 0,
      transition: {
        duration: 0.7,
      },
    },
  }
}

const serviceData = [
  {
    icon: <Crop className="h-6 w-6" />,
    title: "Custom Web Applications",
    description:
      "From dynamic web apps to sophisticated online platforms, we design and develop tailor-made web applications that cater to your unique business needs.",
    link: "/webapp",
  },
  {
    icon: <Pencil className="h-6 w-6" />,
    title: "Website Design & Development",
    description:
      "Our team of expert designers and developers craft stunning, user-friendly websites that not only look great but also function seamlessly across all devices.",
    link: "/webapp",
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "E-Commerce Solutions",
    description:
      "We create robust, secure, and scalable e-commerce platforms that provide a seamless shopping experience for your customers, helping you grow your business effortlessly.",
    link: "/ecommercesolution",
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Mobile App Development",
    description:
      "Whether you need an iOS app, an Android app, or a cross-platform solution, we have the expertise to deliver high-quality mobile applications that engage and retain users.",
    link: "/mobileapp",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Digital Strategy & Consulting",
    description:
      "Our digital strategy and consulting services offer you the guidance and insights needed to make informed decisions, optimize your digital presence, and achieve your business goals.",
    link: "/digitalstrategy",
  },
]

export default function WhatWeDo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false })

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-900 text-primary-foreground py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Blurred Top Edge */}
      <div className="absolute top-0 left-0 w-full h-40 sm:h-60 bg-gradient-to-b from-zinc-900 to-transparent blur-3xl" />
      
      <div className="container mx-auto" ref={ref}>
        <div className="flex flex-col items-center justify-center gap-12">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            className="text-center max-w-3xl"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-primary">
              What we do.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-primary-foreground mb-8 px-4 sm:px-0">
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and mobile solutions
              tailored to your business. We're committed to turning your digital ideas into reality
              with cutting-edge technology and expert services.
            </p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            exit="exit"
            className="w-full max-w-6xl"
          >
            <Swiper
              breakpoints={{
                340: {
                  slidesPerView: 1,
                  spaceBetween: 16,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="w-full h-auto"
            >
              {serviceData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Link href={item.link} passHref>
                    <Card className="h-[350px] sm:h-[400px] bg-card hover:bg-card/90 transition-colors duration-300 group cursor-pointer">
                      <CardHeader className="flex flex-row items-center justify-between">
                        <div className="p-2 rounded-full bg-primary/10">
                          {item.icon}
                        </div>
                        <ArrowUpRight className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-lg sm:text-xl mb-2 text-primary group-hover:text-primary/80 transition-colors duration-300">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-primary-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
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
