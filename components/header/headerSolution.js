import style from "./headerSolution.module.css";
import {useRef} from "react";

const HeaderSolution = ({text, img, alt, href, shapeColor}) => {

  const afterRef = useRef();
  const btnRef = useRef();
  const arrowRef = useRef();

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      afterRef.current.style.animation = "solution-card-animation-on 1s linear forwards";
      btnRef.current.style.opacity="1";
    }
  }

  const onMouseLeave = () => {
    afterRef.current.style.animation = "solution-card-animation-off 1s linear forwards";
    btnRef.current.style.opacity="0";
  }

  return(
    <div className={style.solution} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>

      <div className={style.solution__content}>
        <img className={style.solution__img} src={img} alt={alt}/>
        <h5 className={style.solution__text}>{text}</h5>
        <div className={style.solution__shape} style={{background:shapeColor}}></div>
      </div>

      <div className={style.solution__after} ref={afterRef}></div>

      <div className={style.solution__btn} ref={btnRef}>
        <span>Подробнее</span>
        <img className={style.card__arrow} ref={arrowRef} src="/img/blackArrow.svg" alt="Смотреть работу"/>
      </div>

    </div>
  )
}

export default HeaderSolution
