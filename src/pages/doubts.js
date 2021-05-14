import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'

import { StateContext, AreaContext, ActionContext }
  from '../contexts/selection'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Selection from '../components/selection'

import styles from '../styles/index.module.css'

export default function Doubts() {
  const [area, setArea] = useState(null)
  const [action, setAction] = useState(null)

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <motion.div
        initial="initial" exit="exit" animate="enter"
        variants={{
          initial: { scale: 1, x: 0, y: 0, opacity: 0 },
          enter: {
            scale: 1, x: 0, y: 0, opacity: 1,
            transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
          },
          exit: {
            scale: 0.6,
            y: 100,
            opacity: 0,
            transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
          }
        }}>
        <Contact showback='yes' />

        <main className={styles.main}>
          <Header />

          <div className={styles.title}>
            <h1>DÚVIDAS JURÍDICAS</h1>
          </div>

          <div className={styles.grid}>
            <AreaContext.Provider value={setArea}>
              <ActionContext.Provider value={setAction}>
                <Selection />
              </ActionContext.Provider>
            </AreaContext.Provider>
          </div>

        </main>

        <Footer />

      </motion.div>
    </div>
  )
}
