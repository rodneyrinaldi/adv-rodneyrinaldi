import React from 'react'

import styles from './title.module.css'

function Title({ title }) {
  return (<>
    <div className={styles.container}>
      <h1>{title}</h1>
    </div>
  </>)
}

export default Title