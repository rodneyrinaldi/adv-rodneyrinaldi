import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/representation.module.css'

export default function Family() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações de família" />
      <div className={styles.row}>

        <h1>Segundo a Constituição Federal a família é base da sociedade e tem especial proteção do Estado.</h1>

        <div className={styles.image}>
          <Image
            src="/article-family.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>

        <p>Para a sociologia a família é representada pela agregação de indivíduos unidos por laços afetivos ou de parentesco, com o objetivo de desenvolvimento mútuo, sendo os adultos responsáveis pelos menores.</p>
        <p>Por este motivo todas as decisões referentes ao assunto devem ser desenvolvidas com cuidados especiais, lenvando-se em consideração o princípio do melhor interesse para a criança conforme entendimento do Superior Tribunal de Justiça (STJ).</p>

        <p style={{ paddingBottom: '20px' }}>Metodologia de trabalho:</p>
        <p>
          <ul>
            <li>Procurar o entendimento, exaurir as possibilidades de manutenção familiar, exercício racional de concessões recíprocas;</li>
            <li>Aceitação mútua da situação com urbanismo focando-se no melhor para todos, colocando-se os menores como destinatários de maiores cuidados, evitar processos judiciais fazendo uso dos sistemas de consciliação/mediação;</li>
            <li>Representação conjunta das partes objetivando a racionalização dos custos que representaram uma degradação financeira e emocional em uma relação que possivelmente se alongará no tempo pela prole;</li>
            <li>Por fim, representação individualizada e civilizada objetivando-se o rompimento legal de uma relação jurídica tomando-se os cuidados mais diligentes para a manutenção a continuidade do padrão socio económico possível.</li>
          </ul>
        </p>

        <p style={{ paddingBottom: '20px' }}>Atividades direito civil no ramo família</p>
        <p>
          <ul style={{ listStyleType: 'circle' }}>
            <li>Casamentos e contratos pré-nupciais;</li>
            <li>Reconhecimento e contratos de uniões estáveis;</li>
            <li>Reconhecimento de uniões homoafetivas</li>
            <li>reconhecimento de famílias simultâneas</li>
            <li>Divórcios e separações;</li>
            <li>Dissoluções de uniões estáveis;</li>
            <li>Guarda e regime de visitas</li>
            <li>Estabelecimento e revisão de pensões alimentícias</li>
            <li>Partilhas, iventários e usucapiões</li>
            <li>Testamentos e termos de últimas vontades</li>
          </ul>
        </p>

        <p style={{ paddingTop: '30px' }}>Clique abaixo e baixe a procuração e o contrato de serviços, assine igual a identidade, envie junto com o restante dos documentos.</p>

        <p>
          <Link href='/settings'>
            <a className={styles.button}>EMITIR DOCUMENTAÇÃO</a>
          </Link>
        </p>

        <p style={{ textAlign: 'center' }}>Em caso de dúvida entre em contato!</p>

      </div>
    </Layout>
  </>)
}