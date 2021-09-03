import React from 'react'

import Layout from '../../components/layout'

import styles from './index.module.css'

function Form() {
  return (
    <>
      <Layout showback='yes'>
        <div className={styles.row}>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeCj8ThYcpzcuHhyRQ_EYxRdSsP2aTavDdsbbqnOG9pE4D-2A/viewform?embedded=true"
            width="100%" height="100%"
            frameborder="0" marginheight="0" marginwidth="0">
            Carregando…
          </iframe>
        </div>
      </Layout>
    </>
  )
}

export default Form