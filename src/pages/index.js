import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

function Index() {
  return (<>
    <Layout showback='no'>
      <Title
        title="A injustiça em qualquer lugar é uma ameaça à justiça por toda parte"
        subtitle="( Martin Luther King )"
      />
      <div className={styles.grid}>
        <Menu
          url='/representation'
          alt='Representação'
          pic='/representation.png'
          title='Representação'
          description='Atuação em juízo, órgãos públicos e empresas nas causas 
            familiares, trabalhistas, empresariais, consumo, privacidade, trânsito dentre outras.'
        />

        <Menu
          url='/advisory'
          alt='Assessoria'
          pic='/advisory.png'
          title='Assessoria'
          description='Atuação preventiva e reparativa nas demandas civis junto a
            órgãos públicos nas causas consumeristas, empregatícias e empresariais.'
        />

        <Menu
          url='/manifest'
          alt='Manifesto'
          pic='/manifest.png'
          title='Manifesto'
          description='Princípios e fundamentos para um atendimento personalizado, eficiente, ético e sustentável.'
        />

        <Menu
          url='/editorial'
          alt='Editorial'
          pic='/editorial.png'
          title='Editorial'
          description='Publicações, tutoriais, mapas mentais e artigos trazendo conhecimento para tomada de decisões.'
        />

        {/* <Menu
          type={true}
          url='/contactus'
          alt='contatenos'
          pic='/contactus.png'
          title='Outros assuntos?'
          description='Não encontrou o que procurava, envie uma mensagem e será atendido em até 24h.'
        /> */}
      </div>
    </Layout>
  </>)
}

export default Index