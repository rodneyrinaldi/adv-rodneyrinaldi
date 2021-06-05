import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/processes.module.css'

export default function Builing() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações imobiliárias" />
      <div className={styles.row}>

        <h1>
          É o caminho pelo qual os indivíduos buscam a pacificação social quanto a propriedade,
          afastando o direito natural baseado em violência
        </h1>

        <div className={styles.image}>
          <Image
            src="/images/article-building.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>

        <p>
          As relações imobiliárias são fundadas primordialmente em direitos constitucionais importantes
          como o direito a sua propriedade e função social.
        </p>

        <h2>Procedimentos</h2>

        <p>
          1) desapropriação; 2) nunciação de obra nova; 3) demolitória;  4) possessória; 5) condomínio; 
          6) incorporação imobiliária; 7) propriedade; 8) vizinhança; 7) locação; 8) usucapião; 9) posse;
          10) registro; retificação de documento público; 11) compra e venda; 12) contratos em geral.
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