import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Menu from '../components/menu'

import styles from '../styles/representation.module.css'

export default function Representation() {

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
          <h1>{"REPRESENTAÇÃO JURÍDICA"}</h1>
        </code>

        <div className={styles.grid}>

          <Menu
            url='#'
            alt='......'
            pic='/family.png'
            title='AÇÕES DE FAMÍLIA'
            description='Questões familiares como uniões, separações, sucessões, inventários e testamentos.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/consumer.png'
            title='AÇÕES DE CONSUMO'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/doctor.png'
            title='AÇÕES MÉDICAS'
            description='Problemas com planos de saúde, com hospitais, com laboratórios e ou erros médicos.'
          />

          <Menu
            url='#'
            alt=' '
            pic='/house.png'
            title='AÇÕES IMOBILIÁRIAS'
            description='Imóveis na planta, novos ou usados. Compra, venda e locação residencial ou comercial.'
          />

          <Menu
            url='#'
            alt=''
            pic='/traffic.png'
            title='AÇÕES DE TRÂNSITO'
            description='Suspensões, cassações e crimes de trânsito. Defesas prévias e recursos de multas no JARI e CETRAN..'
          />

          <Menu
            url='#'
            alt='......'
            pic='/work.png'
            title='AÇÕES TRABALHISTAS'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/old.png'
            title='AÇÕES PREVIDENCIÁRIAS'
            description='Processos administrativo ou judicial, simulações, cálculos e recursos.'
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
