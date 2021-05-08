import Head from 'next/head'
import { useRouter } from 'next/router'

import Contact from '../components/contact'
import Header from '../components/header'
import ServiceMD from '../components/service'

import styles from '../styles/manifest.module.css'

export default function Service() {
  const router = useRouter()
  const { service } = router.query

  const ttl = "Causas de família"
  const txt = "service/family.md"

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <code className={styles.code}>
          <h1>{ttl}</h1>
        </code>

        <div className={styles.grid}>
          <ServiceMD param='Just a link: https://reactjs.com.' />
        </div>

      </main>

      <session className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
      </session>

      <footer className={styles.footer}>
        <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo-dev.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>


    </div>
  )
}
