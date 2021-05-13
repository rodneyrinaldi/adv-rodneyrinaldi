import Link from 'next/link'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'

import styles from '../styles/advisory.module.css'

export default function Advisory() {

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <code className={styles.code}>
          <h1>{"ASSESSORIA EMPRESARIAL"}</h1>
        </code>

        <div className={styles.grid}>

          <Menu
            url='#'
            alt='......'
            pic='/judge.png'
            title='CONTENCIOSO'
            description='Representação legal contenciosa, mediada e consciliada. Negociações, cobranças e execuções.'
          />

          <Menu
            url='#'
            alt=''
            pic='/lawyer.png'
            title='CONSULTIVO'
            description='Consultoria trabalhista e empresarial, negociações, contratos, cobranças e execuções.'
          />
          <Menu
            url='#'
            alt='......'
            pic='/compliance.png'
            title='CONFORMIDADE'
            description='Elaboração e implantação de políticas de conformidade. Consultoria, suporte e treinamento.'
          />

          <Menu
            url='#'
            alt=' '
            pic='/privacy.png'
            title='PRIVACIDADE'
            description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/contract.png'
            title='CONTRATUAL'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <Menu
            url='#'
            alt='......'
            pic='/digital.png'
            title='DIGITAL'
            description='Interações com a administração. Licitações, contratos e licenças.'
          />

          <Menu
            url='/service?key=labor'
            alt=''
            pic='/work.png'
            title='TRABALHISTA'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <Menu
            url='/service?key=consumer'
            alt=' '
            pic='/consumer.png'
            title='CONSUMIDOR'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <Menu
            url='#'
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


      </main>

      <Footer />

    </div>
  )
}
