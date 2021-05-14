import React from 'react'
import { motion } from 'framer-motion'

import variants from '../components/variants'

import styles from './main.module.css'

function Main({ children }) {
  return (<>
    <motion.div initial="initial" exit="exit" animate="enter" variants={variants}>
      <div className={styles.container}>
        {children}
      </div>
    </motion.div>
  </>)
}

export default Main