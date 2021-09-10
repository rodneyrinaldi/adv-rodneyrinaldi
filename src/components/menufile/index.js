import Link from 'next/link'

import styles from './index.module.css';

function MenuFile({ title, pic, file }) {
  return (
    <Link href={file}>
      <a target="_blank" className={styles.card}>
      <h1>{title}</h1>
      <img src={pic} alt={title} className={styles.image} />
      </a>
    </Link>
  )
}

export default MenuFile