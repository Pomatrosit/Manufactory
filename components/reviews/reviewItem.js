import style from "./reviews.module.css";
import {useRef} from "react";

const ReviewItem = ({img, text, title, width}) => {

  const afterRef = useRef();

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      afterRef.current.style.animation = "card-hover 1s linear forwards";
    }
  }

  const onMouseLeave = () => {
    afterRef.current.style.animation = "card-unhover 1s linear forwards";
  }

  return(
    <figure className={style.reviewItem}
            style={{width: width || "auto"}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>

      <div className={style.reviewItem__content}>
        <img src="/img/review.png" alt="" className={style.reviewItem__img}/>
        <p className={style.reviewItem__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla sed ducimus
          mollitia similique labore, quis ipsam, ipsum odio maiores nobis culpa nemo aliquid. Nemo, nam.</p>
        <figcaption className={style.reviewItem__title}><span>Олег Калинин, &nbsp;</span> Директор студии Blood Rite</figcaption>
      </div>

      <div className={style.reviewItem__after} ref={afterRef}></div>

    </figure>
  )
}

export default ReviewItem;
