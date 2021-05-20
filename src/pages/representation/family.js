import React from 'react'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/representation.module.css'

export default function Family() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações de família" />
      <div className={styles.row}>
        <h1>Segundo a Constituição Federal a família é base da sociedade e tem especial proteção do Estado, art 226.</h1>
        <div className={styles.image}>
          <Image
            src="/article-family.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>
        <p>E para a sociologia a família é representada por uma agregação de indivíduos unidos por laços afetivos ou de parentesco, com o objetivo de desenvolvimento mútuo e que os adultos são responsáveis pelo cuidado com as crianças.</p>
        <p>Por este motivo todas as decisões referentes ao assunto devem ser permeadas pela civilidade e urbanismo, lenvando-se em consideração o princípio do melhor interesse para a criança conforme entendimento do Superior Tribunal de Justiça.</p>
        <p></p>

        <a href='/settings'>
          Gerar o contrato e as procurações
        </a>
        <p></p>
      </div>
    </Layout>
  </>)
}