import React from 'react';
import styles from './Header.css';

const Header = () => (
  <div className={styles.header}>
    <h1>Avatar Characters</h1>
    <button onClick={() => window.location = '/'}>Home</button>
    <br/>
  </div>
);

export default Header;
