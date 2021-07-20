import React from 'react';

import styles from './index.module.css';

function Skill({ url, alt, pic }) {
  return (
    <a className={styles.card}>
      <img src={pic} alt={alt} className={styles.logo} />
    </a>
  );
}

export default Skill