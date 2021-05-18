import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import SettingsComp from '../components/settings'

import styles from '../styles/index.module.css'

function Settings() {
  return (<>
    <Layout showback='yes'>
      <Title title="Preparações" />
      <div className={styles.row}>
        <SettingsComp />
      </div>
    </Layout>
  </>)
}

export default Settings
