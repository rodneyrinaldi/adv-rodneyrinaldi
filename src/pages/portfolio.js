import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Project from '../components/project'

import data from '../data/projects.json'

import styles from '../styles/portfolio.module.css'

export default function Manifesto() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" className={styles.logo1} />
        <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />

        <h1>PORTFÓLIO DE PRODUTOS E SERVIÇOS</h1>

        <div className={styles.grid}>
          {
            data.map(function (item) {
              return (
                <Project
                  url={item.url}
                  alt={item.alt}
                  pic={item.pic}
                  title={item.title}
                  description={item.description}
                />
              )
            })
          }
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
