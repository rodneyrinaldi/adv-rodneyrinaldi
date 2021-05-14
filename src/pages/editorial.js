import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

export default function Editorial() {
  return (<>
    <Layout showback='yes'>
      <Title title="Fale conosco" />
      <div className={styles.grid}>
        <Menu
          url='#'
          alt='......'
          pic='/editorial.png'
          title='O DIREITO E A JUSTIÇA'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />

        <Menu
          url='#'
          alt=''
          pic='/editorial.png'
          title='A INCONSTITUCIONALIDADE DO TRÂNSITO'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />

        <Menu
          url='#'
          alt=''
          pic='/editorial.png'
          title='A IRRACIONALIDADE DA POLÍTICA DAS MINORIAS'
          description='Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        />

      </div>
    </Layout>
  </>)
}