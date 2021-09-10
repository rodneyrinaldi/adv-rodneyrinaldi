import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'
import MenuFile from '../../components/menufile'

import styles from './index.module.css'

function Editorial() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="Publicações" />
        <div className={styles.row}>
          <MenuFile title='Posse | Inventário' pic='./images/article-building.png' 
            file='https://www.adv.rodneyrinaldi.com/download/civil-usucapiao-2108.pdf' />
        </div>
      </Layout>
    </>
  )
}

export default Editorial