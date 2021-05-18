import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'

import styles from '../styles/index.module.css'

function Settings() {
  return (<>
    <Layout showback='yes'>
      <Title title="Preparações" />
      <div className={styles.row}>
        <p>
          Impressão do contrato de serviços.
        </p>
        <p>
          Impressão da procuração.
        </p>
      </div>
    </Layout>
  </>)
}

export default Settings
