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
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt=''
            pic='/lawyer.png'
            title='CONSULTIVO'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/administrative.png'
            title='ADMINISTRATIVO'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/compliance.png'
            title='CONFORMIDADE'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt=' '
            pic='/privacy.png'
            title='PRIVACIDADE'
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
        <a href="https://dev.rodneyrinaldi.com">dev.rodneyrinaldi.com</a>
        <a href="https://rodneyrinaldi.com"><img src="/rr-logo-dev.svg"
          alt="rodneyrinaldi" /></a>
        <a href="https://dpo.rodneyrinaldi.com">dpo.rodneyrinaldi.com</a>
      </footer>


    </div>
  )
}
