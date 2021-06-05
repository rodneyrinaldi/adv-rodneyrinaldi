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
          url='/processes'
          alt='Processos'
          pic='/images/processes.png'
          title='Processos'
          description='Ações judiciais, extrajudiciais ou orgãos públicos em variadas áreas do direito'
        />

        <Menu
          url='/advisory'
          alt='Assessoria'
          pic='/images/advisory.png'
          title='Assessoria'
          description='Assessoria jurídica preventiva ou defensiva nas questões administrativas ou privadas'
        />

        <Menu
          url='/manifest'
          alt='Manifesto'
          pic='/images/manifest.png'
          title='Manifesto'
          description='Compromisso com um trabalho ético, seguro e de qualidade'
        />

        <Menu
          url='/editorial'
          alt='Editorial'
          pic='/images/editorial.png'
          title='Editorial'
          description='Publicação de artigos, tutoriais, mapas mentais e tira dúvidas'
        />

        {/* <Menu
          type={true}
          url='/contactus'
          alt='contatenos'
          pic='/images/contactus.png'
          title='Outros assuntos?'
          description='Não encontrou o que procurava, envie uma mensagem e será atendido em até 24h.'
        /> */}

        <br /><br />
      </div>
    </Layout>
  </>)
}

export default Index