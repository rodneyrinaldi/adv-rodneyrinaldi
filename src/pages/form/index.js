import React from 'react'

import styles from './index.module.css'

function Form() {
  return (
    <>
      <div className={styles.row}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeCj8ThYcpzcuHhyRQ_EYxRdSsP2aTavDdsbbqnOG9pE4D-2A/viewform?embedded=true"
          width="800" height="600"
          frameborder="0" marginheight="0" marginwidth="0">
          Carregando…
        </iframe>
      </div>
    </>
  )
}

export default Form