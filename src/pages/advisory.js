import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Menu from '../components/menu'

import styles from '../styles/advisory.module.css'

export default function Advisory() {

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Head>
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <div className={styles.grid}>

          <Menu
            url='#'
            alt='......'
            pic='/judge.png'
            title='CONTENCIOSO'
            description='Representação legal contenciosa, mediada e consciliada. Negociações, cobranças e execuções.'
          />

          <Menu
            url='#'
            alt=''
            pic='/lawyer.png'
            title='CONSULTIVO'
            description='Consultoria trabalhista e empresarial, negociações, contratos, cobranças e execuções.'
          />
          <Menu
            url='#'
            alt='......'
            pic='/compliance.png'
            title='CONFORMIDADE'
            description='Elaboração e implantação de políticas de conformidade. Consultoria, suporte e treinamento.'
          />

          <Menu
            url='#'
            alt=' '
            pic='/privacy.png'
            title='PRIVACIDADE'
            description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/administrative.png'
            title='ADMINISTRATIVO'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />


          <Menu
            url='/doubts'
            alt='dúvidas jurídica'
            pic='/doubts.png'
            title='DÚVIDAS JURÍDICAS'
            description='Tire suas dúvidas em um sistema de perguntas e respostas direcionado.'
          />

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
