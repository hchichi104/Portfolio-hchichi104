import React from 'react'
import styles from './Home.module.css'

const Home = ({ hover, setHover }) => {

  return (
    <section id="home">
      <div className={styles.bg_video}>
        <video src="img/video/video_bg.mp4" muted autoPlay loop
          style={{
            filter: hover ? 'brightness(1)' : 'brightness(0.3)',
            transition: 'all 0.7s'
          }}></video>
      </div>
      <div className={`${styles.title} ${hover ? styles.hide : styles.show}`}>
        <h1>W.P Chichi</h1>
        <p>안녕하세요! 웹퍼블리셔 치치의 포트폴리오입니다.</p>
        <p>즐겁게 봐주셨으면 좋겠습니다.</p>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
          }}
        >
          <img src="img/icon/ico_arrow.png" alt="btn next page arrow" />
        </a>
      </div>
      <div
        class={styles.viewvideo}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span></span>
        <span></span>
      </div>
      <div className={styles.fakebg1}></div>
    </section>
  )
}

export default Home
