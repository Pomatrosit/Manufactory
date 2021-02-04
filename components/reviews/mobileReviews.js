import style from "./reviews.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import ReviewItem from "./reviewItem";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';

const MobileReviews = () => {
  return(
    <section className={style.reviews}>
      <div className="app-wrapper">

        <div className={style.reviews__top}>
          <h3 className="section__subtitle">Отзывы</h3>
          <h2 className="section__title">Нам доверяют</h2>\
          <DecorativeSquare color="purple" top="0" left="0"/>
          <DecorativeSquare color="purple" top="40px" left="40px"/>
          <DecorativeSquare color="purple" top="-40px" left="-40px"/>
          <DecorativeSquare color="yellow" top="0" left="-40px"/>
        </div>

        <div className={style.mobileReviews__swiper}>
          <Swiper
             spaceBetween={0}
             slidesPerView={2}
             onSlideChange={() => console.log('slide change')}
             onSwiper={(swiper) => console.log(swiper)}
          >
               <SwiperSlide><ReviewItem /></SwiperSlide>
               <SwiperSlide><ReviewItem /></SwiperSlide>
               <SwiperSlide><ReviewItem /></SwiperSlide>
               <SwiperSlide><ReviewItem /></SwiperSlide>
          </Swiper>
        </div>

        <div className={style.bgImage}>
          <Image
            src="/img/girl.png"
            alt="Отзывы веб-студия Мануфактура"
            width={615}
            height={565}
            quality={100}
          />
        </div>

      </div>

    </section>
  )
}

export default MobileReviews
