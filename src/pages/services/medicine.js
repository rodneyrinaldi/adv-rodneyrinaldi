import React from 'react'

import Contact from '../../components/contact'
import Header from '../../components/header'
import Footer from '../../components/footer'

import styles from './services.module.css'

export default function Family() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />
      <main className={styles.main}>
        <Header />
        <div className={styles.title}>
          <h1>Ações de família</h1>
        </div>
        <div className={styles.grid}>

        </div>
      </main>
      <Footer />
    </div>
  )
}
