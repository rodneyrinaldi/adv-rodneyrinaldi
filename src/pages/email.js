import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import EmailComp from '../components/email'

import styles from '../styles/index.module.css'

function Email() {
  return (<>
    <Layout showback='yes'>
      <Title title="Fale conosco" />
      <div className={styles.row}>
        <EmailComp />
      </div>
    </Layout>
  </>)
}

export default Email