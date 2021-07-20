import React from 'react'

import Layout from '../../components/layout'
import MenuItem from '../../components/menuitem'
import Title from '../../components/title'

import styles from './index.module.css'

function Processes() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="PROCESSOS" />
        <div className={styles.row}>
          <MenuItem
            url='processes/privacy'
            alt='Privacidade'
            pic='/images/privacy.png'
            title='Ações de Privacidade'
            description='Invasão de privacidade, defesa de direitos da personalidade, notificação de autoridades.'
          />

          <MenuItem
            url='processes/family'
            alt=''
            pic='/images/family.png'
            title='Ações de Família'
            description='Questões familiares como uniões, separações, sucessões, inventários e testamentos.'
          />

          <MenuItem
            url='processes/consumer'
            alt='Consumidor'
            pic='/images/consumer.png'
            title='Ações de Consumo'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <MenuItem
            url='processes/service'
            alt=''
            pic='/images/services.png'
            title='Ações de Serviços'
            description='Problemas com contratos de serviços em geral como telefonia, internet, escolares, médicas e etc.'
          />

          <MenuItem
            url='processes/medicine'
            alt=''
            pic='/images/doctor.png'
            title='Ações Médicas'
            description='Problemas com planos de saúde, com hospitais, com laboratórios e ou erros médicos.'
          />

          <MenuItem
            url='processes/building'
            alt=''
            pic='/images/house.png'
            title='Ações Imobiliárias'
            description='Imóveis na planta, novos ou usados. Compra, venda e locação residencial ou comercial.'
          />

          <MenuItem
            url='processes/traffic'
            alt=''
            pic='/images/traffic.png'
            title='Ações de Trânsito'
            description='Suspensões, cassações e crimes de trânsito. Defesas prévias e recursos de multas no JARI e CETRAN..'
          />

          <MenuItem
            url='processes/labor'
            alt=''
            pic='/images/work.png'
            title='Ações Trabalhistas'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <MenuItem
            url='processes/pension'
            alt=''
            pic='/images/old.png'
            title='Ações Previdenciárias'
            description='Processos administrativo ou judicial, simulações, cálculos e recursos.'
          />

          <MenuItem
            url='/doubts'
            alt='dúvidas jurídica'
            pic='/images/doubts.png'
            title='Dúvidas Jurídicas'
            description='Tire suas dúvidas em um sistema de perguntas e respostas direcionado.'
          />

          <MenuItem
            type={true}
            url='/contactus'
            alt='contatenos'
            pic='/images/contactus.png'
            title='Entre em Contato'
            description='Não encontrou o que procurava, envie uma mensagem e será atendido em até 24 horas.'
          />
        </div>
      </Layout>
    </>
  )
}

export default Processes