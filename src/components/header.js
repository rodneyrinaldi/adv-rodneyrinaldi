import React from 'react';
import Head from 'next/head'
import { motion } from 'framer-motion'

import variants from '../components/variants'

import styles from './header.module.css'

function Header() {
  return (<>
    <Head>
      <title>adv.rodneyrinaldi</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <motion.div initial="initial" exit="exit" animate="enter" variants={variants}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div>
            <img src="/images/rr-logo.svg" alt="rodneyrinaldi" />
          </div>
          <div>
            <h1>Rodney Rinaldi</h1>
            <h2>ADVOGADO</h2>
          </div>
        </div>
      </div>
    </motion.div>
  </>)
}

export default Header