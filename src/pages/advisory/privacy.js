import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/processes.module.css'

export default function Privacy() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações de privacidade" />
      <div className={styles.row}>

        <h1>
          ...
        </h1>

        <div className={styles.image}>
          <Image
            src="/images/article-privacy-a.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>

        <p>
          ...
        </p>

        <h2>Procedimentos</h2>

        <p>
          1) ...
        </p>

        <h2>Metodologia</h2>

        <p>
          <ul style={{ listStyleType: 'disc'}}>
            <li>Procurar o entendimento, exaurir as vias amigáveisl, e exercício da boa fé;</li>
            <li>Aceitação da negociação com urbanismo focando-se no melhor para as partes, evitar processos judiciais fazendo uso dos sistemas de consciliação/mediação;</li>
            <li>Por fim, representação civilizada objetivando-se a estabilização legal justa.</li>
          </ul>
        </p>

        <p style={{ paddingTop: '30px' }}>Clique abaixo e baixe a procuração e o contrato de serviços, assine igual a identidade, envie junto com o restante dos documentos.</p>

        <p style={{ padding: '0px' }}>
          <Link href='/settings'>
            <a className={styles.button}>EMITIR DOCUMENTAÇÃO</a>
          </Link>
        </p>

      </div>
    </Layout>
  </>)
}