import React from 'react'
import styles from './Header.module.css';

const Header = ({ hover }) => {

    return (
        <header className={`${styles.header} ${hover ? styles.hide : ''}`}>
            <div className={`${styles.nav} inner`}>
                <div className={styles.LOGO} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="img/ico_logo.png" alt="LOGO" />
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#aboutme">About Me</a></li>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#design">Design</a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header