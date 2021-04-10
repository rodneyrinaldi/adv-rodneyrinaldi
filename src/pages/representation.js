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
        <title>dev.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <div className={styles.grid}>

          <Menu
            url='#'
            alt='......'
            pic='/family.png'
            title='AÇÕES DE FAMÍLIA'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/consumer.png'
            title='AÇÕES DE CONSUMO'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/doctor.png'
            title='AÇÕES MÉDICAS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt=' '
            pic='/house.png'
            title='AÇÕES IMOBILIÁRIAS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt=''
            pic='/traffic.png'
            title='AÇÕES DE TRÂNSITO'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/work.png'
            title='AÇÕES TRABALHISTAS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/old.png'
            title='AÇÕES PREVIDENCIÁRIAS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='/doubts'
            alt='dúvidas jurídica'
            pic='/doubts.png'
            title='DÚVIDAS JURÍDICAS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
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
