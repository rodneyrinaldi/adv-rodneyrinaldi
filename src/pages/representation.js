import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

function Representation() {
  return (<>
    <Layout showback='yes'>
      <Title title="Representação Jurídica" />
      <div className={styles.grid}>
        <Menu
          url='representation/privacy'
          alt=' '
          pic='/privacy.png'
          title='Ações de Privacidade'
          description='Invasão de privacidade, defesa de direitos da personalidade, notificação de autoridades.'
        />

        <Menu
          url='representation/family'
          alt=''
          pic='/family.png'
          title='Ações de Família'
          description='Questões familiares como uniões, separações, sucessões, inventários e testamentos.'
        />

        <Menu
          url='representation/consumer'
          alt=' '
          pic='/consumer.png'
          title='Ações de Consumo'
          description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
        />

        <Menu
          url='representation/service'
          alt=''
          pic='/services.png'
          title='Ações de Serviços'
          description='Problemas com contratos de serviços em geral como telefonia, internet, escolares, médicas e etc.'
        />

        <Menu
          url='representation/medicine'
          alt=''
          pic='/doctor.png'
          title='Ações Médicas'
          description='Problemas com planos de saúde, com hospitais, com laboratórios e ou erros médicos.'
        />

        <Menu
          url='representation/building'
          alt=''
          pic='/house.png'
          title='Ações Imobiliárias'
          description='Imóveis na planta, novos ou usados. Compra, venda e locação residencial ou comercial.'
        />

        <Menu
          url='representation/traffic'
          alt=''
          pic='/traffic.png'
          title='Ações de Trânsito'
          description='Suspensões, cassações e crimes de trânsito. Defesas prévias e recursos de multas no JARI e CETRAN..'
        />

        <Menu
          url='representation/labor'
          alt=''
          pic='/work.png'
          title='Ações Trabalhistas'
          description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
        />

        <Menu
          url='representation/pension'
          alt=''
          pic='/old.png'
          title='Ações Previdenciárias'
          description='Processos administrativo ou judicial, simulações, cálculos e recursos.'
        />

        <Menu
          url='/doubts'
          alt='dúvidas jurídica'
          pic='/doubts.png'
          title='Dúvidas Jurídicas'
          description='Tire suas dúvidas em um sistema de perguntas e respostas direcionado.'
        />

        <Menu
          type={true}
          url='/contactus'
          alt='contatenos'
          pic='/contactus.png'
          title='Entre em Contato'
          description='Não encontrou o que procurava, envie uma mensagem e será atendido em até 24 horas.'
        />
      </div>
    </Layout>
  </>)
}

export default Representation