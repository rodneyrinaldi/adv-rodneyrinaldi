import React from 'react'

import Contact from '../../components/contact'
import Header from '../../components/header'
import Footer from '../../components/footer'

import styles from '../../styles/representation.module.css'

export default function Family() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />
      <main className={styles.main}>
        <Header />
        <div className={styles.title}>
          <h1>Ações imobiliárias</h1>
        </div>
        <div className={styles.grid}>
          <div className={styles.grid}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
