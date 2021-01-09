import style from "./portfolio.module.css";
import {useRef} from "react";

const PortfolioCard = () => {

  const afterRef = useRef();
  const textRef = useRef();
  const arrowRef = useRef();

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      afterRef.current.style.animation = "card-hover 1s linear forwards";
      textRef.current.style.transform="translateY(10px)";
    }
  }

  const onMouseLeave = () => {
    afterRef.current.style.animation = "card-unhover 1s linear forwards";
  }

  return(
    <figure className={style.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      <div className={style.card__content}>
        <img className={style.card__img} src="/img/traktor.png" alt=""/>
        <figcaption className={style.card__title}>Трактор</figcaption>
        <p className={style.card__text}>Разработка Landing Page для компании арендатора тяжёлой строительной техники</p>
        <div className={style.card__btn}>
          <p className={style.card__gowatch} ref={textRef}>Смотреть работу</p>
          <img className={style.card__arrow} ref={arrowRef} src="/img/greenarrow.svg" alt="Смотреть работу"/>
        </div>
      </div>

      <div className={style.card__after} ref={afterRef}></div>

    </figure>
  )
}

export default PortfolioCard;
