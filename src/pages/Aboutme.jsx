import React from 'react'
import styles from './Aboutme.module.css'

const Aboutme = () => {
  return (
    <section id='aboutme' className={styles.aboutme}>
      <div className={styles.container}>
        <h2 data-aos="fade-up">About Me</h2>
        <div className={styles.cont}>
          
          <div className={styles.profile} data-aos="fade-up" data-aos-delay="400">
            <div>
              <img src="img/ico_logo.png" alt="logo" />
              <p>Profile</p>
            </div>
            <dl>
              <div>
                <dt>Name:</dt>
                <dd>황지훈</dd>
              </div>
              <div>
                <dt>Birth:</dt>
                <dd>92.10.04</dd>
              </div>
              <div>
                <dt>Address:</dt>
                <dd>서울시 강서구</dd>
              </div>
              <div>
                <dt>E-mail:</dt>
                <dd className={styles.webMail}>hchichi104@gmail.com</dd>
              </div>
            </dl>
          </div>

          <div className={styles.resume} data-aos="fade-up" data-aos-delay="800">
            <div>
              <img src="img/icon/img_resume.png" alt="resume" />
              <p>Resume</p>
            </div>
            <p>
              <span>
                <span>안녕하세요! 사람들의 호기심을 좇는 웹퍼블리셔 황지훈입니다.</span> <br />
                저는 모든 콘텐츠를 하나의 ‘이야기’라고 생각합니다.
                이 포트폴리오도 저의 이야기가 담긴 편지로 다가갔으면 좋겠습니다.
              </span>
            </p>
            <a href="https://www.notion.so/Chichi-s-RE-CODE-DEV-DOCU-1d81d2349c3f80f283e2c13f3b826f12" target="_blank" rel="noopener noreferrer">View More</a>
          </div>

          <div className={styles.skill} data-aos="fade-up" data-aos-delay="1200">
            <div>
              <div>
                <img src="img/icon/img_skill.png" alt="skill" />
                <p>skills & Tools</p>
              </div>
              <ul>
                <li><img src="img/icon/icon_vscode.png" alt="vscode" /></li>
                <li><img src="img/icon/icon_html.png" alt="html" /></li>
                <li><img src="img/icon/icon_css.png" alt="css" /></li>
                <li><img src="img/icon/icon_js.png" alt="js" /></li>
                <li><img src="img/icon/icon_react.png" alt="react" /></li>
                <li><img src="img/icon/icon_figma.png" alt="figma" /></li>
                <li><img src="img/icon/icon_ps.png" alt="ps" /></li>
                <li><img src="img/icon/icon_ppt.png" alt="ppt" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme
