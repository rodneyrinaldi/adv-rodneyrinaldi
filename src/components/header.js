import React from 'react';

import styles from './header.module.css'

function Header() {
  return (
    <div className={styles.logo}>
      <div style={{ display: 'flex' }}>
        <img src="/rr-logo.svg" alt="rodneyrinaldi" />
      </div>

      <div style={{ display: 'flex', width: 'auto' }}>
        <h1>Rodney Rinaldi</h1>
        <h2>ADVOGADO</h2>
      </div>
    </div>
  );
}

export default Header;