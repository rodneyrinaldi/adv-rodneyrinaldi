import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'
import MenuFile from '../../components/menufile'

import Pdf from '../../components/pdf'

import styles from './index.module.css'

function Editorial() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="Publicações" />
        {/* <div className={styles.row}>
          <MenuFile title='Inventário Extrajudicial' pic='./images/article-building.png' />
        </div> */}
        <Pdf />
      </Layout>
    </>
  )
}

export default Editorial