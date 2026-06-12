"use client"

import * as React from "react"
import { useState, useEffect, useRef } from "react"
import {
  ShieldCheck,
  Calculator,
  FileSearch,
  PhoneCall,
  Scale,
  Handshake,
  Award,
  Users,
  Calendar,
  CheckCircle,
  Sparkles,
  Star,
  ArrowRight,
  Zap,
  TrendingUp,
} from "lucide-react"
import { motion, useScroll, useTransform, useInView, useSpring } from "framer-motion"

import executiveImage from "../../assets/images/corporate_executive_1779992016659.png"

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const isStatsInView = useInView(statsRef, { once: false, amount: 0.3 })

  // Parallax effect for decorative elements
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const services = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />,
      title: "Debt Collection",
      description:
        "Strategic debt recovery focusing on finding the pressure point to resolve outstanding accounts efficiently and effectively.",
      position: "left",
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />,
      title: "Remote Bookkeeping",
      description:
        "Precise management of daily financial records, bank reconciliations, and accounts payable or receivable for your business.",
      position: "left",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />,
      title: "Private Investigations",
      description:
        "Thorough tracing and tracking to locate debtors and gather actionable intelligence to support the recovery process.",
      position: "left",
    },
    {
      icon: <PhoneCall className="w-6 h-6" />,
      secondaryIcon: <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />,
      title: "Call Centre",
      description:
        "Direct communication and professional negotiation to recover outstanding accounts over 30 days while maintaining relationships.",
      position: "right",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      secondaryIcon: <CheckCircle className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />,
      title: "Legal Precision",
      description:
        "Documented steps and practical escalation planning to protect creditors, save time, and avoid unnecessary court delays.",
      position: "right",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      secondaryIcon: <Star className="w-4 h-4 absolute -top-1 -right-1 text-gray-500" />,
      title: "Conflict Facilitation",
      description:
        "Creating a structured forum for resolution while staying firm on the creditor outcome that needs to be achieved.",
      position: "right",
    },
  ]

  const stats = [
    { icon: <Award />, value: 15, label: "Years Experience", suffix: "+" },
    { icon: <Users />, value: 500, label: "Creditors Supported", suffix: "+" },
    { icon: <Calendar />, value: 24, label: "Hour Response", suffix: "" },
    { icon: <TrendingUp />, value: 95, label: "Recovery Rate", suffix: "%" },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full py-24 px-4 bg-dark-900 text-white overflow-hidden relative scroll-mt-28"
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-lime-500/5 blur-3xl pointer-events-none"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-3xl pointer-events-none"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-lime-500/30 pointer-events-none"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-white/10 pointer-events-none"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="flex flex-col items-center mb-12" variants={itemVariants}>
          <motion.span
            className="text-lime-500 font-bold tracking-widest text-xs mb-3 flex items-center gap-2 uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-4 h-4" />
            Discover Dark Water
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold mb-6 text-center">About Us</h2>
          <motion.div
            className="w-24 h-1 bg-lime-500 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
        </motion.div>

        <motion.p className="text-center max-w-3xl mx-auto mb-20 text-gray-400 leading-relaxed" variants={itemVariants}>
          Dark Water is a KZN-based investigative debt recovery and creditors support company operating across South Africa. 
          Debt collection isn't just about making calls—it's about understanding why the debt exists and finding the 
          pressure point to resolve it through 100% compliant and transparent strategies.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {/* Left Column */}
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first lg:order-none mb-12 lg:mb-0">
            <motion.div className="relative w-full max-w-sm" variants={itemVariants}>
              <motion.div
                className="rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              >
                <img
                  src={executiveImage}
                  alt="Dark Water Executive"
                  className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-dark-900/90 via-dark-900/20 to-transparent flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  <motion.a
                    href="#contact"
                    className="bg-lime-500 text-dark-900 px-6 py-3 rounded-full flex items-center gap-2 text-sm font-bold tracking-wide"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="absolute inset-0 border-2 border-white/5 rounded-[2rem] -m-4 z-[-1]"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              ></motion.div>



            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  variants={itemVariants}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 bg-dark-800 border border-white/10 p-10 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="flex-1 relative z-10">
            <h3 className="text-3xl font-display font-semibold mb-3">Ready to recover what's yours?</h3>
            <p className="text-gray-400">Let's create a customized recovery plan for your business.</p>
          </div>
          <motion.a
            href="#contact"
            className="bg-lime-500 hover:bg-lime-400 text-dark-900 px-8 py-4 rounded-full flex items-center gap-3 font-bold tracking-wide transition-colors relative z-10 shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

interface ServiceItemProps {
  icon: React.ReactNode
  secondaryIcon?: React.ReactNode
  title: string
  description: string
  variants: {
    hidden: { opacity: number; y?: number }
    visible: { opacity: number; y?: number; transition: { duration: number; ease: string } }
  }
  delay: number
  direction: "left" | "right"
}

function ServiceItem({ icon, secondaryIcon, title, description, variants, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      variants={variants}
      transition={{ delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-4 mb-4"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      >
        <motion.div
          className="text-lime-500 bg-lime-500/10 p-3.5 rounded-xl border border-lime-500/20 transition-all duration-300 group-hover:bg-lime-500/20 group-hover:border-lime-500/40 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          {icon}
          {secondaryIcon}
        </motion.div>
        <h3 className="text-xl font-semibold text-white group-hover:text-lime-500 transition-colors duration-300">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-gray-400 leading-relaxed pl-[4.5rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
      >
        {description}
      </motion.p>
      <motion.div
        className="mt-4 pl-[4.5rem] flex items-center text-lime-500 text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
      >
        <span className="flex items-center gap-2">
          Learn more <ArrowRight className="w-4 h-4" />
        </span>
      </motion.div>
    </motion.div>
  )
}

interface StatCounterProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix: string
  delay: number
}

function StatCounter({ icon, value, label, suffix, delay }: StatCounterProps) {
  const countRef = useRef(null)
  const isInView = useInView(countRef, { once: false })
  const [hasAnimated, setHasAnimated] = useState(false)

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 10,
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(value)
      setHasAnimated(true)
    } else if (!isInView && hasAnimated) {
      springValue.set(0)
      setHasAnimated(false)
    }
  }, [isInView, value, springValue, hasAnimated])

  const displayValue = useTransform(springValue, (latest) => Math.floor(latest))

  return (
    <motion.div
      className="bg-dark-800 border border-white/5 p-8 rounded-[2rem] flex flex-col items-center text-center group hover:border-white/10 hover:bg-dark-800/80 transition-all duration-300"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, delay },
        },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center mb-6 text-lime-500 group-hover:bg-lime-500/10 group-hover:border-lime-500/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        {icon}
      </motion.div>
      <motion.div ref={countRef} className="text-4xl font-display font-bold text-white flex items-center mb-2">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </motion.div>
      <p className="text-gray-400 text-sm font-medium">{label}</p>
      <motion.div className="w-12 h-1 rounded-full bg-white/10 mt-5 group-hover:bg-lime-500 group-hover:w-20 transition-all duration-500" />
    </motion.div>
  )
}
