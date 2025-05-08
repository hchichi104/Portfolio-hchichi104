import React from 'react'
import styles from './Header.module.css';
import { useState } from 'react';


const Header = ({ hover }) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={`${styles.header} ${hover ? styles.hide : ''}`}>
            <div className={`${styles.nav} inner`}>
                <div className={styles.LOGO} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="img/ico_logo.png" alt="LOGO" />
                </div>
                <ul className={`${styles.web} ${styles.menu}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#design">Design</a></li>
                </ul>
                <div
                    className={`${styles.mobile} ${styles.btn_menu} ${isOpen ? styles.active : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span></span>
                    <span></span>
                </div>
                <div className={`${styles.sideMenu} ${isOpen ? styles.active : ''}`}>
                    <ul>
                        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#aboutme" onClick={() => setIsOpen(false)}>About Me</a></li>
                        <li><a href="#project" onClick={() => setIsOpen(false)}>Project</a></li>
                        <li><a href="#design" onClick={() => setIsOpen(false)}>Design</a></li>
                    </ul>
                </div>



            </div>
        </header>
    )
}

export default Header