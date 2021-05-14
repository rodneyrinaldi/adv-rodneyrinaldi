import React, { useState } from "react";

import { AreaContext, ActionContext }
  from '../contexts/selection'

import Layout from '../components/layout'
import Title from '../components/title'
import Selection from '../components/selection'

import styles from '../styles/index.module.css'

export default function Doubts() {
  const [area, setArea] = useState(null)
  const [action, setAction] = useState(null)

  return (<>
    <Layout showback='yes'>
      <Title title="Fale conosco" />
      <div className={styles.row}>
        <AreaContext.Provider value={setArea}>
          <ActionContext.Provider value={setAction}>
            <Selection />
          </ActionContext.Provider>
        </AreaContext.Provider>
      </div>
    </Layout>
  </>)
}