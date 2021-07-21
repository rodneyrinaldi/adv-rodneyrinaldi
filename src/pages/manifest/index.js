import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from './index.module.css'

function Manifest() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="MANIFESTO" />
        <div className={styles.row}>
          <p>
            Este manifesto dá publicidade ao comprometimento primordial no segmento das melhores e possíveis
            políticas de pesquisa, desenvolvimento, comercialização e suporte a todos os produtos e serviços
            desempenhados isolada ou compartilhadamente.
          </p>
          <p>
            Possuindo como valores essenciais vivenciados em todas as atividades:
            a) o respeito aos clientes, aos colaboradores, a sociedade e aos meios ambientes;
            b) o respeito a aplicabilidade das normas, das leis, das convenções e dos costumes;
            c) o respeito a concorrência legal, ética e justa;
            d) o respeito a precificação justa, sustentável e competitiva.
          </p>
          <p>
            Aplicando como princípios em todas as interações:
            a) entender primeiro a necessidade do cliente antes de sugerir soluções;
            b) registrar interações e especificações de forma simples e eficiênte;
            c) compromisso com a qualidade e tempo, entregas pontuais, e nunca entregar uma má prestação;
            d) fazer primeiro e cobrar depois, sempre que possível trabalhar com provas de conceito primeiramente.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default Manifest