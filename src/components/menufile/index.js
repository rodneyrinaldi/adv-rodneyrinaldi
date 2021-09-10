import React from 'react';

import styles from './index.module.css';

function MenuFile({ title, pic }) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <img src={pic} alt={title} className={styles.image} />
    </div>
  );
}

export default MenuFile