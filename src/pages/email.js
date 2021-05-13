import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import EmailComp from '../components/email'

import styles from '../styles/email.module.css'

export default function Email() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <div className={styles.title}>
          <h1>FALE CONOSCO</h1>
        </div>

        <div className={styles.grid}>
          <EmailComp />
        </div>

      </main>

      <Footer />

    </div>
  )
}
