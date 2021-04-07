import { useState } from 'react';
import { useRouter } from "next/router"
import Link from 'next/link'
import Image from 'next/image'
import emailjs from 'emailjs-com'

import styles from './index.module.css'

function Contact(props) {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // const { query: { service }, } = router
  const service = 'contact us rodneyrinaldi.com'

  function handleSubmit(e) {
    e.preventDefault()

    console.log(props.EMAILJS_USER_ID)
    console.log(props.EMAILJS_TEMPLATE_ID)
    console.log(props.EMAILJS_USER_ID)

    console.log(process.env.EMAILJS_SERVICE_ID)
    console.log(process.env.EMAILJS_TEMPLATE_ID)
    console.log(process.env.EMAILJS_USER_ID)



    return


    const fields = `{name:${name}, email:${email}, message:${message}}`
    const params = { sitename: service, emailaddress: email, emailmessage: fields }

    emailjs.send(
      props.EMAILJS_SERVICE_ID,
      props.EMAILJS_TEMPLATE_ID,
      params,
      props.EMAILJS_USER_ID
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
      <header className="stripDark">
        <div className={styles.tierHeader}>
          <Link href="/">
            <a>
              <Image
                src="/rodneyrinaldi.svg"
                alt="foto rodney rinaldi"
                layout="intrinsic"
                width={300}
                height={50}
              />
            </a>
          </Link>
        </div>
      </header>

      <main className='stripLight'>
        <div className={styles.tierMain}>

          <h2>Contato</h2>
          <h3>
            Tire suas dúvidas, modele suas ideias, desenvolva seu projeto.
          </h3>

          <div className={styles.tierArticles}>
            <div className={styles.imgArticle}>
              <Image
                src="/contact.png"
                alt="customer centricity"
                layout="intrinsic"
                width={200}
                height={200}
              />
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="contactName">Nome</label>
                <input type="text" id="contactName"
                  onChange={e => setName(e.target.value)} />
                <label htmlFor="contactEmail">Email</label>
                <input type="email" id="contactEmail"
                  onChange={e => setEmail(e.target.value)} />
                <label htmlFor="contactMessage">Mensagem</label>
                <textarea id="contactMessage"
                  onChange={e => setMessage(e.target.value)} />
                <input type="submit" value="ENVIAR" className={styles.goForward} />
                <p><input type="checkbox" id="myCheck" onclick="" />Concordo com a Política de Privacidade e Proteção de Dados</p>
              </form>
            </div>
          </div>

        </div>
      </main>

      <footer className='stripDark'>
        <div className={styles.tierFooter}>
          <nav>
            <ul>
              <li>
                <Link href="/advocacy">
                  <a>
                    <Image
                      src="/adv2.svg"
                      alt="rodney rinaldi adv"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
                Advocacia
              </li>
              <li>
                <Link href="/technology">
                  <a>
                    <Image
                      src="/dev2.svg"
                      alt="rodney rinaldi dev"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
                  Tecnologia
              </li>
              <li>
                <Link href="/compliance">
                  <a>
                    <Image
                      src="/dpo2.svg"
                      alt="rodney rinaldi dpo"
                      layout="intrinsic"
                      width={64}
                      height={64}
                    />
                  </a>
                </Link>
               Privacidade
              </li>
            </ul>
          </nav>
        </div>
        <a className={styles.goBack} onClick={() => router.back()}>
          <Image
            src="/back.svg"
            alt="voltar"
            layout="intrinsic"
            width={14}
            height={14}
          />
          <span>VOLTAR</span>
        </a>
        <br />
      </footer>

    </>
  )
}

export async function getServerProps() {
  console.log(process.env.EMAILJS_SERVICE_ID)
  console.log(process.env.EMAILJS_TEMPLATE_ID)
  console.log(process.env.EMAILJS_USER_ID)
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

export default Contact

