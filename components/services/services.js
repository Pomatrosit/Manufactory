import style from "./services.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import { useRef, useEffect } from "react";

const Services = () => {

  const fixedRef = useRef();
  const staticBlockRef = useRef();
  const lastStepRef = useRef();
  const triangle1 = useRef();
  const triangle2 = useRef();
  const triangle3 = useRef();
  const triangle4 = useRef();
  const secondarySvg1Ref = useRef();
  const secondarySvg2Ref = useRef();
  const secondarySvg3Ref = useRef();
  const secondarySvg4Ref = useRef();
  const secondarySvgs = [secondarySvg1Ref, secondarySvg2Ref, secondarySvg3Ref, secondarySvg4Ref];

  const hideSecondarySvgs = () => {
    secondarySvgs.forEach(svg => {
      svg.current.style.opacity="0";
    })
  }

  const heightOfFixed = 500;
  const ANIMATE_TO_LEFT = "0.8s linear 0s 1 normal forwards running fixed-block-to-left";
  const ANIMATE_TO_RIGHT = "0.8s linear 0s 1 normal forwards running fixed-block-to-right";
  let windowHeight;let topValue;let position;let prevPosition;

  const startCalculate = () => {
    windowHeight = document.documentElement.clientHeight;
    topValue = (windowHeight - heightOfFixed)/2;
    position = "left";
    prevPosition = "left";
    fixedRef.current.style.animation = ANIMATE_TO_LEFT;
  }

  useEffect(() => {
    startCalculate();

    window.addEventListener("scroll", e => {
      const distanceToTop = staticBlockRef.current.getBoundingClientRect().top;
      const distanceToLastStep = lastStepRef.current.getBoundingClientRect().top;
      const distanceToTop2 = topValue - distanceToTop;

      if (distanceToTop <= topValue){
        fixedRef.current.style.transition = "0s";
        fixedRef.current.style.position="fixed";
        fixedRef.current.style.top = `${topValue}px`;
      }

      if (distanceToTop >= topValue){
        fixedRef.current.style.transition = "0s";
        fixedRef.current.style.position="absolute";
        fixedRef.current.style.top = `0`;
        position="left";
      }

      if (distanceToLastStep <= topValue){
        fixedRef.current.style.transition = "0s";
        fixedRef.current.style.position="absolute";
        fixedRef.current.style.top = `${lastStepRef.current.offsetTop}px`;
        position="right";
      }

      if (distanceToTop2 < 400){
        hideSecondarySvgs();
        secondarySvg1Ref.current.style.opacity="1";
        position="left";
      } else
      if (distanceToTop2 >= 400 && distanceToTop2 < 1300){
        hideSecondarySvgs();
        secondarySvg2Ref.current.style.opacity="1";
        position="right";
      } else
      if (distanceToTop2 >= 1300 && distanceToTop2 < 2200){
        hideSecondarySvgs();
        secondarySvg3Ref.current.style.opacity="1";
        position="left";
      } else
      if (distanceToTop2 >= 2200){
        hideSecondarySvgs();
        secondarySvg4Ref.current.style.opacity="1";
        position="right";
      }

      if (prevPosition !== position){
        if (position === "left") {
          fixedRef.current.style.animation = ANIMATE_TO_LEFT;
          secondarySvgs.forEach(svg => svg.current.style.animation="secondary-image-animation 1s ease forwards")
        }
        else {
          fixedRef.current.style.animation = ANIMATE_TO_RIGHT;
          secondarySvgs.forEach(svg => svg.current.style.animation="secondary-image-animation2 1s ease forwards")
        }
      }

      const triangleTranslate = distanceToTop/15;
      triangle1.current.style.transform = `translateY(${triangleTranslate}px)`;
      triangle2.current.style.transform = `translateY(${triangleTranslate}px) rotate(90deg)`;
      triangle3.current.style.transform = `translateY(${triangleTranslate}px) rotate(90deg)`;
      triangle4.current.style.transform = `translateY(${triangleTranslate}px) rotate(180deg)`;

      prevPosition = position;
    });


    window.addEventListener("resize", () => {
      startCalculate();
    })
  }, []);


  return(
    <>
    <section className={style.servicesTop}>
      <div className="app-wrapper">

        <div className={style.topBlock}>
          <h3 className="section__subtitle">Решения</h3>
          <h2 className="section__title">Весь спектр digital-продуктов</h2>
          <p className="section__description" style={{maxWidth:550}}>Разрабатываем удобные сайты и приложения понятные любому пользователю</p>
          <DecorativeSquare color="purple" top="0px" left ="0px"/>
          <DecorativeSquare color="purple" top="40px" left ="40px"/>
          <DecorativeSquare color="purple" top="-40px" left ="-40px"/>
          <DecorativeSquare color="yellow" top="0px" left ="-40px"/>
        </div>

      </div>
    </section>

    <section className={style.servicesMain} ref = {staticBlockRef}>

      <div className={style.services__fixed} ref={fixedRef}>
        <img className = {style.service__mainImg} src="/img/service-main.svg" alt=""/>
        <img src="/img/service-secondary1.svg" ref={secondarySvg1Ref} alt="" className={style.service__secondaryImg}/>
        <img src="/img/service-secondary2.svg" ref={secondarySvg2Ref} alt="" className={style.service__secondaryImg}/>
        <img src="/img/service-secondary3.svg" ref={secondarySvg3Ref} alt="" className={style.service__secondaryImg}/>
        <img src="/img/service-secondary1.svg" ref={secondarySvg4Ref} alt="" className={style.service__secondaryImg}/>
      </div>

      <div className="app-wrapper" style={{zIndex:5}}>

      <div className={style.mainBlock}>
        <div className={style.mainBlock__static}>

          <figure className={`${style.mainBlock__step} ${style.toRight}`}>
            <p className={style.mainBlock__subtitle}>1. Решение</p>
            <figcaption className={style.mainBlock__title}>Одностраничные сайты / Landing page и сайты визитки</figcaption>
            <p className={style.mainBlock__text}>Небольшие сайты главной задачей которых является конвертации посетителя
               в покупателя или клиента компании благодаря строго структурированной подаче информации и побуждения к действию</p>
          </figure>

          <figure className={style.mainBlock__step}>
            <p className={style.mainBlock__subtitle}>2. Решение</p>
            <figcaption className={style.mainBlock__title}>Многостраничники и корпоративные сайты</figcaption>
            <p className={style.mainBlock__text}>Небольшие сайты главной задачей которых является конвертации посетителя в покупателя или клиента
              компании благодаря строго структурированной подаче информации и побуждения к действию</p>
          </figure>

          <figure className={`${style.mainBlock__step} ${style.toRight}`}>
            <p className={style.mainBlock__subtitle}>3. Решение</p>
            <figcaption className={style.mainBlock__title}>Интернет-магазин или интернет каталог</figcaption>
            <p className={style.mainBlock__text}>Небольшие сайты главной задачей которых является конвертации посетителя
               в покупателя или клиента компании благодаря строго структурированной подаче информации и побуждения к действию</p>
          </figure>

          <figure className={style.mainBlock__step} ref={lastStepRef}>
            <p className={style.mainBlock__subtitle}>4. Решение</p>
            <figcaption className={style.mainBlock__title}>Веб-приложения </figcaption>
            <p className={style.mainBlock__text}>Небольшие сайты главной задачей которых является конвертации посетителя в покупателя или клиента
              компании благодаря строго структурированной подаче информации и побуждения к действию</p>
          </figure>

        </div>

       </div>

       <img ref={triangle1} className ={`${style.triangle} ${style.triangle1}`}src="/img/triangle.png" alt=""/>
       <img ref={triangle2} className ={`${style.triangle} ${style.triangle2}`}src="/img/triangle.png" alt=""/>
       <img ref={triangle3}className ={`${style.triangle} ${style.triangle3}`}src="/img/triangle.png" alt=""/>
       <img ref={triangle4} className ={`${style.triangle} ${style.triangle4}`}src="/img/triangle.png" alt=""/>

      </div>
    </section>
    </>
  )
}

export default Services
