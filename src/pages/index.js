import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='no' />

      <main className={styles.main}>

        <div className={styles.logo}>
          <div style={{ display: 'flex' }}>
            <img src="/rr-logo.svg" alt="rodneyrinaldi" />
          </div>

          <div style={{ display: 'flex', width: 'auto' }}>
            <h1>Rodney Rinaldi</h1>
            <h2>ADVOGADO</h2>
          </div>
        </div>

        <code className={styles.code}>
          <h1>{"A todos é assegurado a defesa dos seus direitos e a proteção da sua dignidade, tendo garantido um processo justo e legal"}</h1>
        </code>

        <div className={styles.grid}>
          <Menu
            url='#'
            alt='manifesto'
            pic='/manifesto.png'
            title='MANIFESTO'
            description='Princípios definidores para um atendimento personalizado ético, eficiente e sustentável.'
          />

          <Menu
            url='#'
            alt='portfolio'
            pic='/portfolio.png'
            title='REPRESENTAÇÃO JURÍDICA'
            description='Atuação em direito civil consumidor, traânsito, família e sucessões. Direito trabalhista e previdenciário.'
          />

          <Menu
            url='#'
            alt='curriculum'
            pic='/curriculo.png'
            title='ASSESSORIA EMPRESARIAL'
            description='Contencioso e consultivo digital, contratual e trabalhista. Políticas de privacidade e conformidade.'
          />


          <Menu
            url='#'
            alt='editorial'
            pic='/editorial.png'
            title='EDITORIAL'
            description='Publicações, tutoriais, mapas mentais e artigos trazendo conhecimento para tomada de decisões.'
          />
        </div>
      </main>

      {/* <session className={styles.midias}>
        <a href="https://www.linkedin.com/in/rodneyrinaldi/">linkedin.com/in/rodneyrinaldi/</a>
        <a href="https://github.com/rodneyrinaldi">github.com/rodneyrinaldi</a>
      </session> */}

      <footer className={styles.footer}>
        <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo-dev.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>

    </div>
  )
}
