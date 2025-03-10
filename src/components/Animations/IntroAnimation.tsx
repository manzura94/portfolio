'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: 'easeInOut' },
  },
}

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 1.5 } },
}

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      style={{
        background:
          'radial-gradient(600px at 0px 0px, rgba(29, 78, 216, 0.15), transparent 100%)',
      }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
    >
      <svg
        width="150"
        height="150"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.polygon
          points="50,10 90,30 90,70 50,90 10,70 10,30"
          stroke="#7FFFD4"
          strokeWidth="3"
          fill="transparent"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </svg>
      <motion.span
        className="absolute text-5xl font-bold text-[#7FFFD4]"
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        MJ
      </motion.span>
    </motion.div>
  )
}

export default IntroAnimation
