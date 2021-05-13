import React from 'react'
import { useRouter } from 'next/router'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import PageIndex from '../components/services/pageindex'

import styles from '../styles/manifest.module.css'

export default function Service(query) {
  const router = useRouter()
  const { key } = router.query
  const ServicePage = PageIndex[key]

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />
      <main className={styles.main}>
        <Header />
        <div className={styles.grid}>
          <ServicePage />
        </div>
      </main>
      <Footer />
    </div>
  )
}
