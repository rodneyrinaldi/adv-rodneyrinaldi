import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'
import Skill from '../../components/skill'

import styles from './index.module.css'

function Skills() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="Competências" />
        <div className={styles.row}>
          <Skill title='Assessoria Jurídica' pic='./images/article-advisory.png' />
          <Skill title='Direito Administrativo' pic='./images/article-administrative.png' />
          <Skill title='Direito do Consumo' pic='./images/article-consumer-p.png' />
          <Skill title='Direito de Família' pic='./images/article-family.png' />
          <Skill title='Direito Imobiliário' pic='./images/article-building.png' />
          <Skill title='Direito Médico' pic='./images/article-medicine.png' />
          <Skill title='Direito Previdenciário' pic='./images/article-pension.png' />
          <Skill title='Direito de Privacidade' pic='./images/article-privacy-p.png' />
          <Skill title='Direito do Trabalho' pic='./images/article-labor-p.png' />
          <Skill title='Direito de Trânsito' pic='./images/article-traffic.png' />
          {/* <Skill title='Assessoria Conformidade' pic='./images/article-compliance.png' />
          <Skill title='Assessoria Consumerista' pic='./images/article-consumer-a.png' /> */}
          {/* <Skill title='Assessoria Contratual' pic='./images/article-contract.png' />
          <Skill title='Assessoria Digital' pic='./images/article-digital.png' /> */}
          {/* <Skill title='Assessoria Trabalhista' pic='./images/article-labor-a.png' /> */}
          {/* <Skill title='Assessoria Contencioso' pic='./images/article-litigation.png' /> */}
          {/* <Skill title='Assessoria em Privacidade' pic='./images/article-privacy-a.png' /> */}
          {/* <Skill title='Assessoria em Serviços' pic='./images/article-service.png' /> */}
        </div>
      </Layout>
    </>
  )
}

export default Skills