import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'

import styles from '../styles/index.module.css'

export default function ContactUs() {
  const wapp = 'https://api.whatsapp.com/send?phone=+5511981417040&text=Olá, gostaria de obter maiores informações.'

  return (
    <div id='toppage' name='toppage' className={styles.container}>

      <Contact showback='no' />

      <main className={styles.main}>
        <Header />

        <code className={styles.code}>
          <h1>{"ENTRE EM CONTATO"}</h1>
        </code>
        <div className={styles.grid}>

          <Menu
            url='/email'
            alt='enviar um e-mail'
            pic='/email.png'
            title='ENVIAR UM E-MAIL'
            description='Envie sua mensagem com seu nome, melhor e-mail e mensagem detalhando sua necessidade com maior clareza e detalhes possíveis.'
          />

          <Menu
            url={wapp}
            alt='enviar mensagem por app'
            pic='/whatsapp.png'
            title='ENVIAR UM CHAT'
            description='Envie sua mensagem com seu nome, melhor e-mail e mensagem detalhando sua necessidade com maior clareza e detalhes possíveis.'
          />

        </div>

      </main>

      <Footer />

    </div>

  )
}
