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
            Dá publicidade ao comprometimento primordial a observância e respeito
            aos princípios, as leis, aos costumes e aos poderes da república objetivando a melhor
            representação a causa defendida, exaurindo as possibilidades na busca da justiça real.
          </p>
          <p>
            <strong>Valores essenciais vivenciados em todas as atividades </strong>
            a) o respeito aos clientes, aos colaboradores, a sociedade e aos meios ambientes;
            b) o respeito a aplicabilidade das normas, das leis, das convenções e dos costumes;
            c) o respeito a atendimento legal, ético e justo;
            d) o respeito a precificação justa, sustentável e competitiva.
          </p>
          <p>
            <strong>Princípios em todas as interações </strong>
            a) entender primeiro a necessidade do cliente antes de sugerir soluções;
            b) registrar interações e especificações de forma simples e eficiênte;
            c) compromisso com a qualidade e tempo, entregas pontuais, e nunca entregar uma má prestação.
          </p>
        </div>
      </Layout>
    </>
  )
}

export default Manifest