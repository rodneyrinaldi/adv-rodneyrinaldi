import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'

import styles from '../styles/manifest.module.css'

export default function ContactUs() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <code className={styles.code}>
          <h1>{"ENTRE EM CONTATO"}</h1>
        </code>

        <div className={styles.grid}>
          <p>.
          </p>
        </div>

      </main>

      <Footer />

    </div>
  )
}
