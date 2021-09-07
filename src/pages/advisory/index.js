import React from 'react'

import Layout from '../../components/layout'
import MenuItem from '../../components/menuitem'
import Title from '../../components/title'

import styles from './index.module.css'

function Advisory() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="ASSESSORIA" />
        <div className={styles.row}>
          <MenuItem
            url='/document/?title=Contencioso'
            alt='Contencioso'
            pic='/areas/advisory/judge.png'
            title='Contencioso'
            description='Representação legal contenciosa, mediada e consciliada. Negociações, cobranças e execuções.'
          />

          <MenuItem
            url='/document/?title=Consultivo'
            alt='Consultivo'
            pic='/areas/advisory/lawyer.png'
            title='Consultivo'
            description='Consultoria trabalhista e empresarial, negociações, contratos, cobranças e execuções.'
          />
          <MenuItem
            url='/document/?title=Conformidade'
            alt='Conformidade'
            pic='/areas/advisory/compliance.png'
            title='Conformidade'
            description='Elaboração e implantação de políticas de conformidade. Consultoria, suporte e treinamento.'
          />

          <MenuItem
            url='/document/?title=Ações de Privacidade'
            alt='Privacidade'
            pic='/areas/advisory/privacy.png'
            title='Privacidade'
            description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
          />

          <MenuItem
            url='/document/?title=Contratual'
            alt='Contratual'
            pic='/areas/advisory/contract.png'
            title='Contratual'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='/document/?title=Digital'
            alt='Digital'
            pic='/areas/advisory/digital.png'
            title='Digital'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            url='/document/?title=Trabalhista'
            alt='Trabalhista'
            pic='/areas/advisory/labor.png'
            title='Trabalhista'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <MenuItem
            url='/document/?title=Consumidor'
            alt='Consumidor'
            pic='/areas/advisory/consume.png'
            title='Consumidor'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <MenuItem
            url='/document/?title=Administrativo'
            alt='Administrativo'
            pic='/areas/advisory/administrative.png'
            title='Administrativo'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <MenuItem
            type={true}
            url='/message'
            alt='contatenos'
            pic='/areas/contactus.png'
            title='Entre em Contato'
            description='Não encontrou o que procurava, envie uma mensagem e será atendido em até 24 horas.'
          />
        </div>
      </Layout>
    </>
  )
}

export default Advisory