import React from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

import styles from './menu.module.css';

const variants = {
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
  },
  hover: { scale: 1.04 }
}

function Menu({ url, alt, pic, title, description, type }) {
  return (<>
    <div className={(!type ? styles.wrapperCard : styles.wrapperCardRed)}>
      <Link href={url}>
        <a>
          <motion.div variants={variants} className={styles.wrapperMotion}
            initial="initial" animate="enter" exit="exit" whileHover="hover"
          >
            <div className={styles.wrapperIcon}>
              <img src={pic} alt={alt} className={styles.icon} />
            </div>
            <h1 className={(!type ? styles.wrapperTitle : styles.wrapperTitleRed)} >{title}</h1>
            <h1 className={(!type ? styles.wrapperDescription : styles.wrapperDescriptionRed)} >{description}</h1>
          </motion.div>
        </a>
      </Link>
    </div>
  </>);
}

export default Menu