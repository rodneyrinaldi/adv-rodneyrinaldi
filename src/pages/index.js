import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

function Index() {
  return (<>
    <Layout showback='no'>
      <Title title="A injustiça em qualquer lugar é uma ameaça à justiça por toda parte. Martin Luther King" />
      <div className={styles.grid}>
        <Menu
          url='/representation'
          alt='representação jurídica'
          pic='/representation.png'
          title='REPRESENTAÇÃO'
          description='Atuação em juízo, órgãos públicos e empresas nas causas 
            familiares, trabalhistas, empresariais, consumo, privacidade, trânsito dentre outras.'
        />

        <Menu
          url='/advisory'
          alt='assessoria empresarial'
          pic='/advisory.png'
          title='ASSESSORIA'
          description='Atuação preventiva e reparativa nas demandas civis junto a
            órgãos públicos nas causas consumeristas, empregatícias e empresariais.'
        />

        <Menu
          url='/manifest'
          alt='manifesto'
          pic='/manifest.png'
          title='MANIFESTO'
          description='Princípios e fundamentos para um atendimento personalizado, eficiente, ético e sustentável.'
        />

        <Menu
          url='/editorial'
          alt='editorial'
          pic='/editorial.png'
          title='EDITORIAL'
          description='Publicações, tutoriais, mapas mentais e artigos trazendo conhecimento para tomada de decisões.'
        />
      </div>
    </Layout>
  </>)
}

export default Index