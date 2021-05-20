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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <div className={styles.image}>
          <Image
            src="/article-family.png"
            alt="Família"
            width={800}
            height={300}
          />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <a href='/settings'>
          Gerar o contrato e as procurações
        </a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
      </div>
    </Layout>
  </>)
}