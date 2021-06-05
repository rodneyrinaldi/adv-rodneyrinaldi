import React from 'react'
import { motion } from 'framer-motion'

import variants from '../components/variants'

import styles from './footer.module.css'

function Footer() {
  return (
    <>
      <motion.div initial="initial" exit="exit" animate="enter" variants={variants}>
        <div className={styles.container}>
          <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
          <a href="https://rodneyrinaldi.com"><img src="/images/rr-logo-dev.svg"
            alt="rodneyrinaldi" /></a>
          <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
        </div>
        <div className={styles.container}>
          <p>Travessa Dona Paula 13 Higienópolis São Paulo SP (11) 2246-2556</p>
        </div>
      </motion.div>
    </>
  )
}

export default Footer