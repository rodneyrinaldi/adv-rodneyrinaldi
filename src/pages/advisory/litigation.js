import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from '../../styles/advisory.module.css'

export default function Family() {
  return (<>
    <Layout showback='yes'>
      <Title title="Contencioso" />
      <div className={styles.row}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ea dignissimos magnam quo debitis rerum illo et ad, doloremque eum voluptatem sunt. Laborum laudantium a quidem quaerat consequuntur tempora libero.</p>
      </div>
    </Layout>
  </>)
}