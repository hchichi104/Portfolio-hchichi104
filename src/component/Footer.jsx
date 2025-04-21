import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className="inner">
      <div className={styles.info}>
        <small>&copy; 2025 chichi. Thanks for visiting!</small>
        <address><a href="mailto:chichi104@gmail.com"><span className="blind">메일</span><span aria-hidden="true">✉ </span> &nbsp; hchichi104@gmail.com</a>
        </address>
      </div>
    </footer>
  )
}

export default Footer