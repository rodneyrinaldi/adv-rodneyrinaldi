import React, { useState } from "react";
import Head from 'next/head'
import Link from 'next/link'

import { StateContext, AreaContext, ActionContext }
  from '../contexts/selection'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Selection from '../components/selection'

import styles from '../styles/editorial.module.css'

export default function Doubts() {
  const [area, setArea] = useState(null)
  const [action, setAction] = useState(null)

  return (
    <div id='toppage' name='toppage' className={styles.container}>
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
    </div>
  )
}
