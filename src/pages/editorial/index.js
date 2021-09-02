import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from './index.module.css'

function Editorial() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="DOCUMENTOS" />
        <div className={styles.row}>

        </div>
      </Layout>
    </>
  )
}

export default Editorial