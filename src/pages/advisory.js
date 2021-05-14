import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

export default function Advisory() {
  return (<>
    <Layout showback='yes'>
      <Title title="Acessoria empresarial" />
      <div className={styles.grid}>

        <Menu
          url='advisory/litigation'
          alt='......'
          pic='/judge.png'
          title='CONTENCIOSO'
          description='Representação legal contenciosa, mediada e consciliada. Negociações, cobranças e execuções.'
        />

        <Menu
          url='advisory/advisory'
          alt=''
          pic='/lawyer.png'
          title='CONSULTIVO'
          description='Consultoria trabalhista e empresarial, negociações, contratos, cobranças e execuções.'
        />
        <Menu
          url='advisory/compliance'
          alt='......'
          pic='/compliance.png'
          title='CONFORMIDADE'
          description='Elaboração e implantação de políticas de conformidade. Consultoria, suporte e treinamento.'
        />

        <Menu
          url='advisory/privacy'
          alt=' '
          pic='/privacy.png'
          title='PRIVACIDADE'
          description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
        />

        <Menu
          url='advisory/contract'
          alt='......'
          pic='/contract.png'
          title='CONTRATUAL'
          description='Interações com a administração. Licitações, contratos e licenças.'
        />

        <Menu
          url='advisory/digital'
          alt='......'
          pic='/digital.png'
          title='DIGITAL'
          description='Interações com a administração. Licitações, contratos e licenças.'
        />

        <Menu
          url='advisory/labor'
          alt=''
          pic='/work.png'
          title='TRABALHISTA'
          description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
        />

        <Menu
          url='advisory/consumer'
          alt=' '
          pic='/consumer.png'
          title='CONSUMIDOR'
          description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
        />

        <Menu
          url='advisory/administrative'
          alt='......'
          pic='/administrative.png'
          title='ADMINISTRATIVO'
          description='Interações com a administração. Licitações, contratos e licenças.'
        />

        <Menu
          url='/doubts'
          alt='dúvidas jurídica'
          pic='/doubts.png'
          title='DÚVIDAS JURÍDICAS'
          description='Tire suas dúvidas em um sistema de perguntas e respostas direcionado.'
        />

      </div>

      <div className={styles.grid}>
        <Menu
          type={true}
          url='/contactus'
          alt='contatenos'
          pic='/contactus.png'
          title='ENTRE EM CONTATO'
          description='Não encontrou o assunto que procura, entre em contato 
            e vamos auxiliá-lo a encontrar a melhor forma de lidar com sua necessidade.'
        />
      </div>
    </Layout>
  </>)
}
