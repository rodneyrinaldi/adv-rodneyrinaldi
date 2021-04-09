import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'

import { StateContext, AreaContext, ActionContext }
  from '../contexts/selection'

import Contact from '../components/contact'
import Header from '../components/header'
import Selection from '../components/selection'

import styles from '../styles/editorial.module.css'

export default function Doubts() {
  const [area, setArea] = useState(null)
  const [action, setAction] = useState(null)

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <session className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
      </session>

      <footer className={styles.footer}>
        <a href="https://adv.rodneyrinaldi.com">adv.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>

    </div>
  )
}
