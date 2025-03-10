'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import IntroAnimation from './Animations/IntroAnimation'
import Header from './Header'
import Hero from './Hero'

export default function IntroWrapper() {
  const [showAnimation, setShowAnimation] = useState(true)

  useEffect(() => {
    setTimeout(() => setShowAnimation(false), 3000)
  }, [])

  return (
    <>
      {showAnimation ? (
        <IntroAnimation onComplete={() => setShowAnimation(false)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full"
        >
          <div className="flex flex-col h-full justify-between items-center  min-h-screen p-8 pb-20 gap-1 sm:p-5 ">
            <div className="flex justify-between w-full max-w-6xl h-full flex-1 gap-5 mt-[80px]">
              <Header />
              <main className="flex gap-10 w-1/2 lg:w-[52%] ">
                <Hero />
              </main>
            </div>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
              footer
            </footer>
          </div>
        </motion.div>
      )}
    </>
  )
}
