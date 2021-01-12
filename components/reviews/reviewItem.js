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
            style={{width}}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>

      <div className={style.reviewItem__content}>
        <img src="/img/review.png" alt="" className={style.reviewItem__img}/>
        <p className={style.reviewItem__text}>Благодарим команду Мануфактуры за отлично проделанную работу, ребята знают своё дело,
          им можно доверять, с ними можно работать, хоть они и пьют бывает иногда</p>
        <figcaption className={style.reviewItem__title}><span>Олег Калинин, &nbsp;</span> Директор студии Blood Rite</figcaption>
      </div>

      <div className={style.reviewItem__after} ref={afterRef}></div>

    </figure>
  )
}

export default ReviewItem;
