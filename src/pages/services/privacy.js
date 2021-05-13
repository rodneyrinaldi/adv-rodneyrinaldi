import React from 'react'

import Contact from '../../components/contact'
import Header from '../../components/header'
import Footer from '../../components/footer'

import styles from '../../styles/services.module.css'

export default function Family() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />
      <main className={styles.main}>
        <Header />
        <div className={styles.code}>
          <h1>Ações de família</h1>
        </div>
        <div className={styles.grid}>
          <div>
            xxx
          </div>
          <div>
            xxx
          </div>

          <p>yyy</p>
          <p>yyy</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
