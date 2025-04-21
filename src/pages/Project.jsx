import React from 'react'
import styles from './Project.module.css'

const Project = () => {
  return (
    <section id="project" className={styles.Project}>
      <h3 data-aos="fade-up">Project</h3>
      <div className="inner">

        <div className={`${styles.contents} ${styles.withfi}`} data-aos="fade-up">
          <div className={styles.mockup}>
            <div className={styles.mobile}>
              <img src="img/img_mu_phone.png" alt="mobile_mockup" />
              <div className={styles.mobile_frame}>
                <img src="img/img_withfi_mobile_main.png" alt="img_withfi_mobile_main" />
              </div>
            </div>
            <div className={styles.web}>
              <img src="img/img_mu_moniter.png" alt="web_mockup" />
              <div className={styles.web_frame}>
                <img src="img/img_withfi_web_main.png" alt="img_withfi_web_main" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>WithFi</h4>
            <div className={styles.tag}>
              <p>#Planning</p>
              <p>#Coding</p>
              <p>#Figma</p>
              <p>#JS</p>
            </div>
            <div className={styles.tag}>
              <p>#Page_Main</p>
              <p>#Page_Figma_Mobile</p>
            </div>
            <p>
              WithFi는 아티스트와 팬을 위한 SNS 앱으로, 웹 환경에 맞춰 기획하고 디자인한 개인 프로젝트입니다.
              Figma로 메인과 서브 페이지를 디자인하고, 메인 페이지 퍼블리싱은 HTML/CSS와 JavaScript로 레이아웃과 인터랙션을 구현했습니다.
            </p>
            <div className={styles.show}>
              <a href="https://hchichi104.github.io/Original-Projects---WithFi/" target="_blank" rel="noopener noreferrer" className={styles.icon_chrome}>
                <img src="img/icon_chrome.png" alt="결과물 링크(크롬 아이콘 버튼)" />
                <span>결과물</span>
              </a>
              <a href="https://github.com/hchichi104/Original-Projects---WithFi" target="_blank" rel="noopener noreferrer" className={styles.icon_git}>
                <img src="img/icon_git.png" alt="코드 링크 (깃 아이콘 버튼)" />
                <span>코드</span>
              </a>
              <a href="https://embed.figma.com/proto/gVIH3Bm8zju7DrodNwTOnB/Untitled?page-id=0%3A1&node-id=1-643&viewport=585%2C334%2C0.28&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A643&embed-host=share" target="_blank" rel="noopener noreferrer" className={styles.icon_figma}>
                <img src="img/icon_figma.png" alt="피그마 링크 (피그마 아이콘 버튼)" />
                <span>피그마</span>
              </a>
              <a href="https://1drv.ms/p/c/bb5c54c1486ed0c5/EQibfv4zU-ZPkQ7PXu0aAK8BJVTITNj0jUTtDeCQUqbIZw?e=eh6ciD" target="_blank" rel="noopener noreferrer" className={styles.icon_ppt}>
                <img src="img/icon_ppt.png" alt="기획서 링크 (ppt 아이콘 버튼)" />
                <span>기획서</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.contents} ${styles.Le_Pavilion}`} data-aos="fade-up">
          <div className={styles.mockup}>
            <div className={styles.mobile}>
              <img src="img/img_mu_phone.png" alt="mobile_mockup" />
              <div className={styles.mobile_frame}>
                <img src="img/img_le_M.png" alt="img_clone_lepavilion_mobile_main" />
              </div>
            </div>
            <div className={styles.web}>
              <img src="img/img_mu_moniter.png" alt="web_mockup" />
              <div className={styles.web_frame}>
                <img src="img/img_le_full.png" alt="img_clone_lepavilion_web_main" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>Le_Pavilion</h4>
            <div className={styles.tag}>
              <p>#CloneCoding</p>
              <p>#jQuery</p>
              <p>#MediaQuery</p>
              <p>#Swiper</p>
            </div>
            <div className={styles.tag}>
              <p>#Page_Main</p>
              <p>#Page_Sub_Prologue</p>
              <p>#Page_Sub_Ciel</p>
            </div>
            <p>
              Le_Pavilion Pollvilla는 기존 웹사이트를 분석하고 더 나은 방향이라고 생각되는 UI/UX를 구현한 클론코딩 프로젝트입니다.
              HTML/CSS로 레이아웃을 구성하고, jQuery로 슬라이드 및 인터랙션을 적용했습니다.
              미디어쿼리를 활용해 다양한 화면에서도 일관된 사용자 경험을 제공하도록 작업했습니다.
            </p>
            <div className={styles.show}>
              <a href="https://hchichi104.github.io/Clone-Projects---Le_Pavilion/" target="_blank" rel="noopener noreferrer" className={styles.icon_chrome}>
                <img src="img/icon_chrome.png" alt="결과물 링크(크롬 아이콘 버튼)" />
                <span>결과물</span>
              </a>
              <a href="https://github.com/hchichi104/Clone-Projects---Le_Pavilion" target="_blank" rel="noopener noreferrer" className={styles.icon_git}>
                <img src="img/icon_git.png" alt="코드 링크 (깃 아이콘 버튼)" />
                <span>코드</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.contents} ${styles.thebanchan}`} data-aos="fade-up">
          <div className={styles.mockup}>
            <div className={styles.mobile}>
              <img src="img/img_mu_phone.png" alt="mobile_mockup" />
              <div className={styles.mobile_frame}>
                <img src="img/img_clone_mobile_thebanchan.png" alt="img_thebanchan_mobile_main" />
              </div>
            </div>
            <div className={styles.web}>
              <img src="img/img_mu_moniter.png" alt="web_mockup" />
              <div className={styles.web_frame}>
                <img src="img/img_clone_web_thebanchan.png" alt="img_thebanchan_web_main" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>TheBanchan</h4>
            <div className={styles.tag}>
              <p>#CloneCoding</p>
              <p>#jQuery</p>
              <p>#MediaQuery</p>
            </div>
            <div className={styles.tag}>
              <p>#Page_Main</p>
            </div>
            <p>
              더반찬은 인기 반찬 배달 서비스를 클론코딩한 프로젝트입니다. HTML, CSS, jQuery를 활용하여 웹 환경에 최적화된 사용자 인터페이스를 구현하였고, MediaQuery를 사용하여 반응형 웹 디자인을 적용했습니다. Ionicons.js를 이용해 아이콘을 추가하여 시각적 요소를 개선하였으며, 직관적이고 효율적인 사용자 경험을 제공하는 것을 목표로 하였습니다.
            </p>
            <div className={styles.show}>

            <a href="https://hchichi104.github.io/Clone-Projects---TheBanchan/" target="_blank" rel="noopener noreferrer" className={styles.icon_chrome}>
                <img src="img/icon_chrome.png" alt="결과물 링크(크롬 아이콘 버튼)" />
                <span>결과물</span>
              </a>

              <a href="https://github.com/hchichi104/Clone-Projects---TheBanchan" target="_blank" rel="noopener noreferrer" className={styles.icon_git}>
                <img src="img/icon_git.png" alt="코드 링크 (깃 아이콘 버튼)" />
                <span>코드</span>
              </a>

            </div>
          </div>
        </div>

        <div className={`${styles.contents} ${styles.biff}`} data-aos="fade-up">
          <div className={styles.mockup}>
            <div className={styles.web}>
              <img src="img/img_mu_moniter.png" alt="web_mockup" />
              <div className={styles.web_frame}>
                <img src="img/img_cl_biff_main.png" alt="img_clone_biff_web_main" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>Biff</h4>
            <div className={styles.tag}>
              <p>#CloneCoding</p>
              <p>#jQuery</p>
              <p>#Swiper</p>
            </div>
            <div className={styles.tag}>
              <p>#Page_Main</p>
            </div>
            <p>
              부산국제영화제(BIFF) 공식 웹사이트를 클론코딩한 프로젝트입니다. HTML/CSS로 레이아웃을 구성하고, jQuery와 Swiper.js를 활용해 슬라이드 및 인터랙션을 구현했습니다. 주요 콘텐츠와 UI를 중심으로 동일한 구조와 스타일을 재현하는 데 집중했습니다.
            </p>
            <div className={styles.show}>
            <a href="https://hchichi104.github.io/Clone-Projects---BIFF/" target="_blank" rel="noopener noreferrer" className={styles.icon_chrome}>
                <img src="img/icon_chrome.png" alt="결과물 링크 (크롬 아이콘 버튼)" />
                <span>결과물</span>
              </a>
              <a href="https://github.com/hchichi104/Clone-Projects---BIFF" target="_blank" rel="noopener noreferrer" className={styles.icon_git}>
                <img src="img/icon_git.png" alt="코드 링크 (깃 아이콘 버튼)" />
                <span>코드</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.contents} ${styles.rbfy}`} data-aos="fade-up">
          <div className={styles.mockup}>

            <div className={styles.web}>
              <img src="img/img_mu_moniter.png" alt="web_mockup" />
              <div className={styles.web_frame}>
                <img src="img/img_clone_rbfy.png" alt="img_rbfy_web_main" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>Rbfy</h4>
            <div className={styles.tag}>
              <p>#CloneCoding</p>
              <p>#jQuery</p>
              <p>#Swiper</p>
            </div>
            <div className={styles.tag}>
              <p>#Page_Main</p>
            </div>
            <p>
              HTML과 CSS를 기반으로 구조와 스타일을 설계하고, jQuery를 활용해 인터랙티브한 요소를 구현했습니다. Swiper.js로 동적인 효과를 더해 사용자 경험을 향상시켰습니다. 다양한 UI 컴포넌트를 실제 사이트처럼 재현하며, 시멘틱 마크업과 레이아웃 구성 능력을 집중적으로 훈련한 프로젝트입니다.
            </p>
            <div className={styles.show}>
            <a href="https://hchichi104.github.io/Clone-Projects---Rbfy/" target="_blank" rel="noopener noreferrer" className={styles.icon_chrome}>
                <img src="img/icon_chrome.png" alt="결과물 링크(크롬 아이콘 버튼)" />
                <span>결과물</span>
              </a>
              <a href="https://github.com/hchichi104/Clone-Projects---Rbfy" target="_blank" rel="noopener noreferrer" className={styles.icon_git}>
                <img src="img/icon_git.png" alt="코드 링크 (깃 아이콘 버튼)" />
                <span>코드</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`${styles.contents} ${styles.trippy}`} data-aos="fade-up">
          <div className={styles.mockup}>
            <div className={styles.mobile}>
              <img src="img/img_mu_phone.png" alt="mobile_mockup" />
              <div className={styles.mobile_frame}>
                <img src="img/img_clone_trippy_mobile_sub.png" alt="img_clone_trippy_mobile_sub" />
              </div>
            </div>
            <div className={styles.web}>
              <img src="img/img_mu_moniter.png" alt="web_mockup" />
              <div className={styles.web_frame}>
                <img src="img/img_clone_trippy_web_main.png" alt="img_Clone_trippy_web_main" />
              </div>
            </div>
          </div>
          <div className={styles.info}>
            <h4>Trippy</h4>
            <div className={styles.tag}>
              <p>#Planning</p>
              <p>#Figma</p>
            </div>
            <div className={styles.tag}>
              <p>#Page_Sub_MovieTrip</p>
            </div>
            <p>
              Trippy는 영화, 스포츠 등 다양한 테마로 여행을 떠나는 콘셉으로 기획·디자인한 퍼스널 프로젝트입니다.
              기존 기획팀에 후반부 참여해 서브 페이지 기획과 디자인, 프로토타입 제작, 기획안 보완 작업을 맡았습니다.
              사용자 흐름과 화면 구성을 직관적으로 전달할 수 있도록 기획안과 Figma 프로토타입을 구성했으며, 퍼블리셔 시선으로 화면 구조와 요소 배치를 설계하고 코드 구현까지
              염두에 두며 작업했습니다.
            </p>
            <div className={styles.show}>
              <a href="https://embed.figma.com/proto/mP66fOayLQrhgaX3DKKtxg/trippy_sub?page-id=0%3A1&node-id=1-704&viewport=559%2C405%2C0.14&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A704&embed-host=share" target="_blank" rel="noopener noreferrer" className={styles.icon_figma}>
                <img src="img/icon_figma.png" alt="피그마 링크 (피그마 아이콘 버튼)" />
                <span>피그마</span>
              </a>
              <a href="https://1drv.ms/p/c/bb5c54c1486ed0c5/EQ6y7HpfQXtBpAJjFncf-c8B4f2RPT04406XIZ74rGiINQ?e=jCFuo2" target="_blank" rel="noopener noreferrer" className={styles.icon_ppt}>
                <img src="img/icon_ppt.png" alt="기획서 링크 (ppt 아이콘 버튼)" />
                <span>기획서</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Project
