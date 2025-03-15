'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import IntroAnimation from './Animations/IntroAnimation'
import Header from './Header'
import Hero from './Hero'
import Contact from './Contact'
import Gmail from './Gmail'

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
          <div className="flex flex-col h-full items-center  min-h-screen p-8 pb-20 gap-1 sm:p-10 ">
            <div className="flex w-full max-[1023px]:flex-col max-[1023px]:p-20 max-[800px]:p-0 xl:max-w-6xl lg:max-w-5xl h-full flex-1 mt-[80px] max-[1023px]:mt-[15px] max-[1023px]:pt-[15px] ">
              <Contact />
              <Header />
              <main className="flex gap-10 w-1/2 max-[1023px]:w-full   xl:ml-[40vw] lg:ml-[45vw]">
                <Hero />
              </main>
              <Gmail />
            </div>
          </div>
        </motion.div>
      )}
    </>
  )
}
