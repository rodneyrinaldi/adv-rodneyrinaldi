import React from 'react';
import Head from 'next/head'
import styles from './header.module.css'

function Header() {
  return (
    <>
      <Head>
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.logo}>
        <div>
          <img src="/rr-logo.svg" alt="rodneyrinaldi" />
        </div>
        <div>
          <h1>Rodney Rinaldi</h1>
          <h2>ADVOGADO</h2>
        </div>
      </div>
    </>
  )
}

export default Header