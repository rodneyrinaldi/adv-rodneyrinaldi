import React from 'react'
import { motion } from 'framer-motion'

import styles from './footer.module.css'

function Footer() {
  return (
    <>
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
        {/* <div className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
        </div> */}

        <footer className={styles.footer}>
          <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
          <a href="https://rodneyrinaldi.com"><img src="/rr-logo-dev.svg"
            alt="rodneyrinaldi" /></a>
          <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
        </footer>
      </motion.div>
    </>
  )
}

export default Footer