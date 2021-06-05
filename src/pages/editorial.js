import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

export default function Editorial() {
  return (<>
    <Layout showback='yes'>
      <Title title="Editorial" />
      <div className={styles.grid}>
        <Menu
          url='#'
          alt='......'
          pic='/images/editorial.png'
          title='O Direito e a Justiça'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />

        <Menu
          url='#'
          alt=''
          pic='/images/editorial.png'
          title='A Inconstitucionalidade no Trânsito'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />

        <Menu
          url='#'
          alt=''
          pic='/images/editorial.png'
          title='A Irracionalidade da Política na Minorias'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />

      </div>
    </Layout>
  </>)
}