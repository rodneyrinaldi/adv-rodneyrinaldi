import Link from 'next/link'
import React from 'react';

import styles from './index.module.css';

function MenuItem({ url, alt, pic, title, description }) {
  return (
    <Link href={url}>
      <a href={url} className={styles.card}>
        <img src={pic} alt={alt} className={styles.logo} />
        <h2>{title}</h2>
        <h3>{description}</h3>
      </a>
    </Link>
  );
}

export default MenuItem