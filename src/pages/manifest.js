import Link from 'next/link'
import { motion } from 'framer-motion'

import Contact from '../components/contact'
import Header from '../components/header'
import Footer from '../components/footer'

import styles from '../styles/manifest.module.css'

export default function Manifest() {
  return (
    <div id='toppage' name='toppage' className={styles.container}>
      <motion.div
        initial="initial" exit="exit" animate="enter"
        variants={{
          initial: { scale: 1, x: 0, y: 0, opacity: 0 },
          enter: {
            scale: 1, x: 0, y: 0, opacity: 1,
            transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] }
          },
          exit: {
            scale: 0.6,
            y: 100,
            opacity: 0,
            transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] }
          }
        }}>
        <Contact showback='yes' />

        <main className={styles.main}>
          <Header />

          <code className={styles.code}>
            <h1>{"MANIFESTO"}</h1>
          </code>

          <div className={styles.grid}>
            <p>
              Este manifesto dá publicidade ao comprometimento primordial no seguimento das melhores e possíveis
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
              a) entender primeiro a necessidade do cliente antes de sugirir soluções;
              b) registrar interações e especificações de forma simples e eficiênte;
              c) compromisso com a qualidade e tempo, entregas pontuais, e nunca entregar uma má prestação;
              d) fazer primeiro e cobrar depois, sempre que possível trabalhar com provas de conceito primeiramente.
          </p>
          </div>

        </main>

        <Footer />

      </motion.div>

    </div>
  )
}
