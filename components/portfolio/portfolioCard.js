import style from "./portfolio.module.css";
import {useRef} from "react";

const PortfolioCard = ({img, title, text}) => {

  const afterRef = useRef();
  const btnRef = useRef();
  const arrowRef = useRef();

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      afterRef.current.style.animation = "card-hover 1s linear forwards";
      btnRef.current.style.transform = "translateY(8px)";
      arrowRef.current.style.transform = "translateX(8px)";
    }
  }

  const onMouseLeave = () => {
    afterRef.current.style.animation = "card-unhover 1s linear forwards";
    btnRef.current.style.transform = "translateY(0px)";
    arrowRef.current.style.transform = "translateX(0px)";
  }

  return(
    <figure className={style.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      <div className={style.card__content}>
        <img className={style.card__img} src={img} alt={title}/>
        <figcaption className={style.card__title}>{title}</figcaption>
        <p className={style.card__text}>{text}</p>
        <div className={style.card__btn} ref={btnRef}>
          <p className={style.card__gowatch}>Смотреть работу</p>
          <img className={style.card__arrow} ref={arrowRef} src="/img/greenarrow.svg" alt="Смотреть работу"/>
        </div>
      </div>

      <div className={style.card__after} ref={afterRef}></div>

    </figure>
  )
}

export default PortfolioCard;
