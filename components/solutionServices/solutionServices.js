import style from "./solutionServices.module.css";

import { Swiper, SwiperSlide } from 'swiper/react';

const SolutionServices = () => {
  return(
    <section className={style.services}>
      <div className="app-wrapper">

      <Swiper
         spaceBetween={50}
         slidesPerView={2}
         onSlideChange={() => console.log('slide change')}
         onSwiper={(swiper) => console.log(swiper)}
      >
           <SwiperSlide><div style={{height:"100px", border:"1px solid red"}}></div></SwiperSlide>
           <SwiperSlide><div style={{height:"100px", border:"1px solid red"}}></div></SwiperSlide>
           <SwiperSlide><div style={{height:"100px", border:"1px solid red"}}></div></SwiperSlide>
           <SwiperSlide><div style={{height:"100px", border:"1px solid red"}}></div></SwiperSlide>
      </Swiper>

      </div>
    </section>
  )
}

export default SolutionServices
