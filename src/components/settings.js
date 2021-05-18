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
          <form onSubmit={handleSubmit}>
            <label htmlFor="contactName">Nome</label>
            <input type="text" id="contactName"
              onChange={e => setName(e.target.value)} />

            <label htmlFor="contactEmail">Email</label>
            <input type="email" id="contactEmail"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Nacionalidade</label>
            <input type="email" id="contactNacionalidade"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Profissão</label>
            <input type="email" id="contactProfissao"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Telefone</label>
            <input type="email" id="contactTelefone"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">RG</label>
            <input type="email" id="contactRg"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">CPF/CNPJ</label>
            <input type="email" id="contactCpfCnpj"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Endereço</label>
            <input type="email" id="contactEndereco"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Cidade</label>
            <input type="email" id="contactCidade"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Estado</label>
            <input type="email" id="contactEstado"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">CEP</label>
            <input type="email" id="contactCep"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactEmail">Contra quem</label>
            <input type="email" id="contactContraQuem"
              onChange={e => setEmail(e.target.value)} />

            <label htmlFor="contactMessage">Motivo resumido</label>
            <textarea id="contactMessage"
              onChange={e => setMessage(e.target.value)} />
            <input type="submit" value="E N V I A R" className={styles.goForward} />
            <p>
              <input type="checkbox" id="myCheck" />
              Concordo com a {' '}
              <Link href="/policies">
                <a href="#" style={{ textDecoration: 'underline' }}>Política de Privacidade e Proteção de Dados</a>
              </Link>
            </p>
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

