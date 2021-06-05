import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/processes.module.css'

export default function Family() {
  return (<>
    <Layout showback='yes'>
      <Title title="Ações de família" />
      <div className={styles.row}>

        <h1>
          É o caminho pelo qual um núcleo social de pessoas unidas por laços afetivos 
          buscam proteção jurídica para suas relações solidárias
        </h1>

        <div className={styles.image}>
          <Image
            src="/images/article-family.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>

        <p>
          A família atual é definida pela tolerância e heterogenía de seus participantes quanto 
          ao número, posição, gênero, raça ou laço sanguíneo. Assumindo formatos nucleares, matrimoniais,
          informais, monoparentais, anaparentais, reconstituídas, unipessoais ou ainda eudonistas.
        </p>

        <h2>Procedimentos</h2>

        <p>
          1) adoção; 2) alimentos; 3) alimentos gravídicos; 4) alteração de regime de bens; 5) anulação de casamento;
          6) conversão de separação em divórcio; 7) destituição de poder familiar com adoção; 8) divórcio consensual;
          9) divórcio litigioso; 10) execução de alimentos; 11) exoneração de pensão alimentícia; 12) interdição;
          13) investigação de paternidade; 14) reconhecimento e dissolução de união estável; 15) regulamentação de guarda e visítas;
          16) revisional de alimentos; 17) suprimento de autorização; 18) suprimento de idade; 19) tutela; 20) cautelar de arrolamento de bens;
          21) cautelar de busca e apreenção de menor; 22) medida cautelar de separação de corpos.
        </p>

        <h2>Metodologia</h2>

        <p>
          <ul style={{ listStyleType: 'disc'}}>
            <li>Procurar o entendimento, exaurir as possibilidades de manutenção familiar, exercício racional de concessões recíprocas;</li>
            <li>Aceitação mútua da situação com urbanismo focando-se no melhor para todos, colocando-se os menores como destinatários de maiores cuidados, evitar processos judiciais fazendo uso dos sistemas de consciliação/mediação;</li>
            <li>Representação conjunta das partes objetivando a racionalização dos custos que representaram uma degradação financeira e emocional em uma relação que possivelmente se alongará no tempo pela prole;</li>
            <li>Por fim, representação individualizada e civilizada objetivando-se o rompimento legal de uma relação jurídica tomando-se os cuidados mais diligentes para a manutenção a continuidade do padrão socio económico possível.</li>
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