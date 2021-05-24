import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/representation.module.css'

export default function PrintContract() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações de família" />
      <div className={styles.row}>
        <h1>Contrato Advocatício</h1>
        <p></p>

        <input type="submit" value="EMITIR" className={styles.button} />

        <p></p>
      </div>
    </Layout>
  </>)
}