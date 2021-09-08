import React from 'react';
import Head from 'next/head'
import Link from 'next/link'

import styles from './index.module.css'

function Header(props) {
  return (<>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>adv.rodneyrinaldi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div>
          <img src="/rr-adv.svg" alt="rodneyrinaldi" className={styles.logo1} />
        </div>
        <div >
          <img src="/rodneyrinaldi.svg" alt="rodneyrinaldi" className={styles.logo2} />
        </div>
        <div>
          <div className={styles.advm}>ADV</div>
          <div className={styles.adv}>ADVOGADO</div>
        </div>
      </div>
      {props.showcard === 'yes'
        ? <Link href='/card'>
          <a href='/card' className={styles.card}>
            <img src="/rr-card.svg" alt="cartão visitas" className={styles.logo3} />
          </a>
        </Link>
        : <></>
      }
  </>)
}

export default Header