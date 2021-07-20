import React from 'react'
import Link from 'next/link'

import styles from './index.module.css'

function Card() {
  return (
    <>
      <Link href='/'>
        <a href='/'>
          <div className={styles.row}>
            <img src='/images/rr-card-front.png' alt='cartão de visita' style={{ width: '500px', padding: '10px' }} />
            <img src='/images/rr-card-back.png' alt='cartão de visita' style={{ width: '500px', padding: '10px' }} />
          </div>
        </a>
      </Link>
    </>
  )
}

export default Card