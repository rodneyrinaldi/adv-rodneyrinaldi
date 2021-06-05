import React from 'react'

import Layout from '../components/layout'
import Title from '../components/title'
import EmailComp from '../components/email'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

export default function ContactUs() {
  const wapp = 'https://api.whatsapp.com/send?phone=+5511981417040&text=Olá, gostaria de obter maiores informações.'

  return (<>
    <Layout showback='yes'>
      <Title title="Fale conosco" />
      <div className={styles.grid}>
        <Menu
          url='/email'
          alt='enviar um e-mail'
          pic='/images/email.png'
          title='ENVIAR UM E-MAIL'
          description='Envie sua mensagem com seu nome, melhor e-mail e mensagem detalhando sua necessidade com maior clareza e detalhes possíveis.'
        />
        <Menu
          url={wapp}
          alt='enviar mensagem por app'
          pic='/images/whatsapp.png'
          title='ENVIAR UM CHAT'
          description='Envie sua mensagem com seu nome, melhor e-mail e mensagem detalhando sua necessidade com maior clareza e detalhes possíveis.'
        />
      </div>
    </Layout>
  </>)
}