import React from 'react'

import Layout from '../components/layout'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

function Index() {
  return (
    <>
      <Layout showback='no' showcard='yes'>
        <div className={styles.grid}>
          <Menu
            url='/processes'
            alt='Processos'
            pic='/menu/processes.png'
            title='Processos'
            description='Ações judiciais, extrajudiciais ou orgãos públicos em variadas áreas do direito'
          />

          <Menu
            url='/advisory'
            alt='Assessoria'
            pic='/menu/advisory.png'
            title='Assessoria'
            description='Assessoria jurídica preventiva ou defensiva nas questões administrativas ou privadas'
          />

          <Menu
            url='/skills'
            alt='Competências'
            pic='/menu/skills.png'
            title='Competências'
            description='Compromisso com um trabalho ético, seguro e de qualidade'
          />

          <Menu
            url='/curriculum'
            alt='Curriculum'
            pic='/menu/curriculum.png'
            title='Curriculum'
            description='Publicação de artigos, tutoriais, mapas mentais e tira dúvidas'
          />

          <Menu
            url='/manifest'
            alt='Manifesto'
            pic='/menu/manifest.png'
            title='Manifesto'
            description='Compromisso com um trabalho ético, seguro e de qualidade'
          />

          <Menu
            url='/editorial'
            alt='Editorial'
            pic='/menu/editorial.png'
            title='Documentos'
            description='Publicação de artigos, tutoriais, mapas mentais e tira dúvidas'
          />
        </div>
      </Layout>
    </>
  )
}

export default Index