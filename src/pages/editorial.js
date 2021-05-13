import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'

import styles from '../styles/editorial.module.css'

export default function Editorial() {

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <code className={styles.code}>
          <h1>{"EDITORIAL"}</h1>
        </code>

        <div className={styles.grid}>

          <Menu
            url='#'
            alt='......'
            pic='/editorial.png'
            title='O DIREITO E A JUSTIÇA'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
          />

          <Menu
            url='#'
            alt=''
            pic='/editorial.png'
            title='A INCONSTITUCIONALIDADE DO TRÂNSITO'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
          />

          <Menu
            url='#'
            alt=''
            pic='/editorial.png'
            title='A IRRACIONALIDADE DA POLÍTICA DAS MINORIAS'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
          />

        </div>

      </main>

      <Footer />

    </div>
  )
}
