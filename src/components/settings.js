import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import emailjs from 'emailjs-com'

import styles from './settings.module.css'

function Settings(props) {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // const { query: { service }, } = router
  const service = 'fale conosco adv.rodneyrinaldi.com'

  function handleSubmit(e) {
    e.preventDefault()

    // console.log('props')
    // console.log(props.emailjsServiceId)
    // console.log(props.emailjsTemplateId)
    // console.log(props.emailjsUserId)
    // console.log('env')
    // console.log(process.env.EMAILJS_SERVICE_ID)
    // console.log(process.env.EMAILJS_TEMPLATE_ID)
    // console.log(process.env.EMAILJS_USER_ID)

    const fields = `{name:${name}, email:${email}, message:${message}}`
    const params = { sitename: service, emailaddress: email, emailmessage: fields }

    //return

    emailjs.send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      params,
      process.env.EMAILJS_USER_ID
    ).then((result) => {
      console.log(result.text)
    }, (error) => {
      console.log(error.text)
    })

    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <>
      <div className={styles.container}>
        <div>
          <h1>
            Dados cadastrais para emissão do contrato e procuração
          </h1>
          <p>
            Informe os dados abaixo para a impressão do contrato de representação advocatícia e procuração para representação legal.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="contactName">Nome</label>
            <input type="text" id="contactName"
              onChange={e => setName(e.target.value)} />

            <label htmlFor="contactEmail">Email</label>
            <input type="email" id="contactEmail"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactMobilel">Telefone</label>
            <input type="text" id="contactMobilel"
              onChange={e => setEmail(e.target.value)} />
            <br /><br />

            <label htmlFor="contactNacionality">Nacionalidade</label>
            <input type="text" id="contactNacionality"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactProfession">Profissão</label>
            <input type="text" id="contactProfession"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactIdentity">RG, emissor e data</label>
            <input type="text" id="contactIdentity"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactIdentity2">CPF/CNPJ</label>
            <input type="text" id="contactIdentity2"
              onChange={e => setEmail(e.target.value)} />
            <br /><br />

            <label htmlFor="contactAddress">Endereço</label>
            <input type="text" id="contactAddress"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactCity">Cidade</label>
            <input type="text" id="contactCity"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactState">Estado</label>
            <input type="text" id="contactState"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactZipcode">CEP</label>
            <input type="text" id="contactZipcode"
              onChange={e => setEmail(e.target.value)} />
            <br /><br />

            <label htmlFor="contactAgainstWho">Contra quem</label>
            <input type="text" id="contactAgainstWho"
              onChange={e => setEmail(e.target.value)} />
            <br /><br />

            <label htmlFor="contactMessage">Motivo resumido ( fatos relevantes )</label>
            <textarea id="contactMessage"
              onChange={e => setMessage(e.target.value)} />

            <input type="submit" value="IMPRIMIR E ENVIAR" className={styles.button} />

            <p>
              <input type="checkbox" id="myCheck" />
              Concordo com a {' '}
              <Link href="/policies">
                <a href="#" style={{ textDecoration: 'underline' }}>Política de Privacidade e Proteção de Dados</a>
              </Link>
            </p>
            <br /><br />
          </form>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // console.log('getStaticProps')
  // console.log(process.env.EMAILJS_SERVICE_ID)
  // console.log(process.env.EMAILJS_TEMPLATE_ID)
  // console.log(process.env.EMAILJS_USER_ID)
  return {
    props: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsUserId: process.env.EMAILJS_USER_ID
    },
    query: {

    }
  }
}

export async function getServerProps() {
  // console.log('getServerProps')
  // console.log(process.env.EMAILJS_SERVICE_ID)
  // console.log(process.env.EMAILJS_TEMPLATE_ID)
  // console.log(process.env.EMAILJS_USER_ID)
  return {
    props: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsUserId: process.env.EMAILJS_USER_ID
    },
    query: {

    }
  }
}

export default Settings

