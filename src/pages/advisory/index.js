import React from 'react'

import Layout from '../../components/layout'
import MenuItem from '../../components/menuitem'
import Title from '../../components/title'

import styles from './index.module.css'

function Advisory() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="PROCESSOS" />
        <div className={styles.row}>
          <MenuItem
            url='advisory/litigation'
            alt='Contencioso'
            pic='/images/judge.png'
            title='Contencioso'
            description='Representação legal contenciosa, mediada e consciliada. Negociações, cobranças e execuções.'
          />

          <MenuItem
            url='advisory/advisory'
            alt='Consultivo'
            pic='/images/lawyer.png'
            title='Consultivo'
            description='Consultoria trabalhista e empresarial, negociações, contratos, cobranças e execuções.'
          />
          <MenuItem
            url='advisory/compliance'
            alt='Conformidade'
            pic='/images/compliance.png'
            title='Conformidade'
            description='Elaboração e implantação de políticas de conformidade. Consultoria, suporte e treinamento.'
          />

          <MenuItem
            url='advisory/privacy'
            alt='Privacidade'
            pic='/images/privacy.png'
            title='Privacidade'
            description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
          />

          <MenuItem
            url='advisory/contract'
            alt='Contratual'
            pic='/images/contract.png'
            title='Contratual'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='advisory/digital'
            alt='Digital'
            pic='/images/digital.png'
            title='Digital'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='advisory/labor'
            alt='Trabalhista'
            pic='/images/work.png'
            title='Trabalhista'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <MenuItem
            url='advisory/consumer'
            alt='Consumidor'
            pic='/images/consumer.png'
            title='Consumidor'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <MenuItem
            url='advisory/administrative'
            alt='Administrativo'
            pic='/images/administrative.png'
            title='Administrativo'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='/doubts'
            alt='Dúvidas Jurídicas'
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

export default Advisory