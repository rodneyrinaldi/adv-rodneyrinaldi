import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'

import data from '../../data/skills.json'

import styles from './index.module.css'

function Skills() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="HABILIDADES" />
        <div className={styles.row}>

        </div>
      </Layout>
    </>
  )
}

export default Skills