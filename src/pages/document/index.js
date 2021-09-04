import React from 'react'
import { useRouter } from 'next/router'

import Form from '../../components/form'
import Layout from '../../components/layout'
import Title from '../../components/title'

import styles from './index.module.css'

function Document() {
  const router = useRouter()
  const { query: { title }, } = router

  return (
    <>
      <Layout showback='yes'>
        <Title title={title} />
        <div className={styles.row}>
          <Form title={title} />
        </div>
      </Layout>
    </>
  )
}

export default Document