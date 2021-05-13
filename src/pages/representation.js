import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'
import Menu from '../components/menu'

import styles from '../styles/representation.module.css'

export default function Representation() {

  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <Contact showback='yes' />

      <main className={styles.main}>
        <Header />

        <code className={styles.code}>
          <h1>{"REPRESENTAÇÃO JURÍDICA"}</h1>
        </code>

        <div className={styles.grid}>

          <Menu
            url='services/privacy'
            alt=' '
            pic='/privacy.png'
            title='AÇÕES DE PRIVACIDADE'
            description='Elaboração e implantação de políticas de privacidade. Consultoria, suporte e treinamento. DPO como serviço.'
          />

          <Menu
            url='services/family'
            alt=''
            pic='/family.png'
            title='AÇÕES DE FAMÍLIA'
            description='Questões familiares como uniões, separações, sucessões, inventários e testamentos.'
          />

          <Menu
            url='services/consumer'
            alt=' '
            pic='/consumer.png'
            title='AÇÕES DE CONSUMO'
            description='Problemas referentes a compras de produtos ou serviços em lojas físicas ou na internet.'
          />

          <Menu
            url='services/service'
            alt=''
            pic='/services.png'
            title='AÇÕES DE SERVIÇOS'
            description='Problemas com contratos de serviços em geral como telefonia, internet, escolares, médicas e etc.'
          />

          <Menu
            url='services/medicine'
            alt=''
            pic='/doctor.png'
            title='AÇÕES MÉDICAS'
            description='Problemas com planos de saúde, com hospitais, com laboratórios e ou erros médicos.'
          />

          <Menu
            url='services/building'
            alt=''
            pic='/house.png'
            title='AÇÕES IMOBILIÁRIAS'
            description='Imóveis na planta, novos ou usados. Compra, venda e locação residencial ou comercial.'
          />

          <Menu
            url='services/traffic'
            alt=''
            pic='/traffic.png'
            title='AÇÕES DE TRÂNSITO'
            description='Suspensões, cassações e crimes de trânsito. Defesas prévias e recursos de multas no JARI e CETRAN..'
          />

          <Menu
            url='services/labor'
            alt=''
            pic='/work.png'
            title='AÇÕES TRABALHISTAS'
            description='Contratações, demissões, cálculos e indenizações. Assédio comercial e sexual ou discriminação.'
          />

          <Menu
            url='services/pension'
            alt=''
            pic='/old.png'
            title='AÇÕES PREVIDENCIÁRIAS'
            description='Processos administrativo ou judicial, simulações, cálculos e recursos.'
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