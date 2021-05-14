import React from 'react';
import Head from 'next/head'
import { motion } from 'framer-motion'

import styles from './header.module.css'

function Header() {
  return (
    <>
      <Head>
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
        <div className={styles.logo}>
          <div>
            <img src="/rr-logo.svg" alt="rodneyrinaldi" />
          </div>
          <div>
            <h1>Rodney Rinaldi</h1>
            <h2>ADVOGADO</h2>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Header