import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import styles from './Design.module.css'

const Design = () => {
  const imageList = Array.from({ length: 10 }, (_, i) => `img/design/img_design_${String(i + 1).padStart(2, '0')}.png`)

  return (
    <section id="design" className={styles.design}>
      <h3 className={styles.title} data-aos="fade-up">Design</h3>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView="auto"
        className={styles.swiper}
        wrapperClass={styles.swiperWrapper}
      >
        {imageList.map((src, i) => (
          <SwiperSlide
            key={i}
            className={`${styles.slide} ${i % 2 === 0 ? styles.even : styles.odd}`}
          >
            <img src={src} alt={`design${i + 1}`} className={styles.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Design
