import React from 'react'

import Layout from '../../components/layout'
import Title from '../../components/title'
import Skill from '../../components/skill'

import data from '../../data/skills.json'

import styles from './index.module.css'

function Skills() {
  return (
    <>
      <Layout showback='yes'>
        <Title title="HABILIDADES" />
        <div className={styles.row}>
          {
            data.map(function (item) {
              return (
                <Skill
                  url={item.url}
                  alt={item.alt}
                  pic={item.pic}
                />
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}

export default Skills