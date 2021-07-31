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
            url='advisory'
            alt='Contencioso'
            pic='/images/traffic-barrier.png'
            title='Contencioso'
            description='Representação legal contenciosa, mediada e consciliada. Negociações, cobranças e execuções.'
          />

          <MenuItem
            url='advisory'
            alt='Consultivo'
            pic='/images/traffic-barrier.png'
            title='Consultivo'
            description='Consultoria trabalhista e empresarial, negociações, contratos, cobranças e execuções.'
          />
          <MenuItem
            url='advisory'
            alt='Conformidade'
            pic='/images/traffic-barrier.png'
            title='Conformidade'
            description='Elaboração e implantação de políticas de conformidade. Consultoria, suporte e treinamento.'
          />

          <MenuItem
            url='advisory'
            alt='Privacidade'
            pic='/images/traffic-barrier.png'
            title='Privacidade'
            description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
          />

          <MenuItem
            url='advisory'
            alt='Contratual'
            pic='/images/traffic-barrier.png'
            title='Contratual'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='advisory'
            alt='Digital'
            pic='/images/traffic-barrier.png'
            title='Digital'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='advisory'
            alt='Trabalhista'
            pic='/images/traffic-barrier.png'
            title='Trabalhista'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <MenuItem
            url='advisory'
            alt='Consumidor'
            pic='/images/traffic-barrier.png'
            title='Consumidor'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <MenuItem
            url='advisory'
            alt='Administrativo'
            pic='/images/traffic-barrier.png'
            title='Administrativo'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='/'
            alt='Dúvidas Jurídicas'
            pic='/images/traffic-barrier.png'
            title='Dúvidas Jurídicas'
            description='Tire suas dúvidas em um sistema de perguntas e respostas direcionado.'
          />

          <MenuItem
            type={true}
            url='/'
            alt='contatenos'
            pic='/images/traffic-barrier.png'
            title='Entre em Contato'
            description='Não encontrou o que procurava, envie uma mensagem e será atendido em até 24 horas.'
          />
        </div>
      </Layout>
    </>
  )
}

export default Advisory