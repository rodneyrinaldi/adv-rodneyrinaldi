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
          <a href="https://rodneyrinaldi.com"><img src="/rr-logo-dev.svg"
            alt="rodneyrinaldi" /></a>
          <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
        </div>
      </motion.div>
    </>
  )
}

export default Footer