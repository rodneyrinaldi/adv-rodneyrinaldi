import Head from 'next/head'
import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Menu from '../components/menu'

import styles from '../styles/editorial.module.css'

export default function Editorial() {

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
            pic='/editorial.png'
            title='O DIREITO E A JUSTIÇA'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt=''
            pic='/editorial.png'
            title='A INCONSTITUCIONALIDADE DO TRÂNSITO'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam reprehenderit alias architecto corrupti pariatur laboriosam iure dignissimos perspiciatis assumenda. Quidem sint molestias quisquam repudiandae soluta suscipit eaque voluptas commodi porro.'
          />

          <Menu
            url='#'
            alt=''
            pic='/editorial.png'
            title='A IRRACIONALIDADE DA POLÍTICA DAS MINORIAS'
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
