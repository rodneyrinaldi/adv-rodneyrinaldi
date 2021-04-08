import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Menu from '../components/menu'

import styles from '../styles/representation.module.css'

export default function Manifest() {
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
          <img src='./representation.png' alt='manifesto' className={styles.logo} />
          <h1>REPRESENTAÇÃO JURÍDICA</h1>
        </div>

        <div className={styles.grid}>
          <Menu
            url='/doubts'
            alt='dúvidas jurídica'
            pic='/question.png'
            title='DÚVIDAS JURÍDICA'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt='......'
            pic='/representation.png'
            title='CAUSAS CONSUMIDOR'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt='......'
            pic='/representation.png'
            title='CAUSAS ERRO MÉDICO'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt=' '
            pic='/representation.png'
            title='CAUSAS IMOBILIÁRIAS'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt=''
            pic='/representation.png'
            title='CAUSAS TRÂNSITO'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt='......'
            pic='/representation.png'
            title='CAUSAS FAMÍLIA'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt='......'
            pic='/representation.png'
            title='CAUSAS TRABALHISTAS'
            description='.................. .................. .................. ..................'
          />

          <Menu
            url='#'
            alt='......'
            pic='/representation.png'
            title='CAUSAS PREVIDENCIÁRIAS'
            description='.................. .................. .................. ..................'
          />
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
