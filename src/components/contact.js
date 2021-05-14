import React from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import styles from './contact.module.css';

function Contact(props) {
  const router = useRouter()
  const wapp = 'https://api.whatsapp.com/send?phone=+5511981417040&text=Olá, gostaria de obter maiores informações.'

  return (
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
      <div className={styles.wrapper}>
        <a href={wapp} target='_blank'>
          <img src="/whatsapp.svg" alt="whatsapp" className={styles.icon} target="_blank" />
        </a>
        <a onClick={() => router.push('/email')}>
          <img src="/email.svg" alt="whatsapp" className={styles.icon} />
        </a>
        <a onClick={() => router.push('/doubts')}>
          <img src="/question.svg" alt="dúvidas" className={styles.icon} />
        </a>
        <br /><br />
        <a href='/'>
          <img src="/home.svg" alt="go home" className={styles.icon} />
        </a>
        <a href='#toppage'>
          <img src="/top.svg" alt="go top" className={styles.icon} />
        </a>
        {props.showback === 'yes'
          ? <a onClick={() => router.back()}>
            <img src="/back.svg" alt="go back" className={styles.icon} /></a>
          : <></>
        }
      </div>
    </motion.div>
  );
}

export default Contact;