import style from "./services.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import { useRef, useEffect } from "react";

const Services = () => {

  const heightOfFixed = 500;

  const fixedRef = useRef();
  const staticBlockRef = useRef();
  const lastStepRef = useRef();
  const secondarySvgRef = useRef();
  const triangle1 = useRef();
  const triangle2 = useRef();
  const triangle3 = useRef();
  const triangle4 = useRef();

  const onResize = () => {
    const windowHeight = document.documentElement.clientHeight;
    const topValue = (windowHeight - heightOfFixed)/2;

    window.addEventListener("scroll", e => {
      const distanceToTop = staticBlockRef.current.getBoundingClientRect().top;
      const distanceToLastStep = lastStepRef.current.getBoundingClientRect().top;

      if (distanceToTop <= topValue){
        fixedRef.current.style.position="fixed";
        fixedRef.current.style.top = `${topValue}px`;
      }

      if (distanceToTop >= topValue){
        fixedRef.current.style.position="absolute";
        fixedRef.current.style.top = `0`;
      }

      if (distanceToLastStep <= topValue){
        fixedRef.current.style.position="absolute";
        fixedRef.current.style.top = `${lastStepRef.current.offsetTop}px`;
      }

      if (distanceToTop>=-250){
        fixedRef.current.style.animation = "fixed-block-to-left 1s linear forwards";
        secondarySvgRef.current.src = "/img/service-secondary1.svg";
      }
      if (distanceToTop<-250 && distanceToTop>=-1150){
        fixedRef.current.style.animation="fixed-block-to-right 1s linear forwards";
        secondarySvgRef.current.src = "/img/service-secondary2.svg";
      }
      if (distanceToTop<-1150 && distanceToTop>=-2050){
        fixedRef.current.style.animation = "fixed-block-to-left 1s linear forwards";
        secondarySvgRef.current.src = "/img/service-secondary3.svg"
      }
      if (distanceToTop<-2050){
        fixedRef.current.style.animation = "fixed-block-to-right 1s linear forwards";
        secondarySvgRef.current.src = "/img/service-secondary1.svg";
      }

      const triangleTranslate = distanceToTop/20;

      triangle1.current.style.transform = `translateY(${triangleTranslate}px)`;
      triangle2.current.style.transform = `translateY(${triangleTranslate}px) rotate(90deg)`;
      triangle3.current.style.transform = `translateY(${triangleTranslate}px) rotate(90deg)`;
      triangle4.current.style.transform = `translateY(${triangleTranslate}px) rotate(180deg)`;
    });
  }

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
  }, []);


  return(
    <>
    <section className={style.servicesTop}>
      <div className="app-wrapper">

        <div className={style.topBlock}>
          <h3 className="section__subtitle">Решения</h3>
          <h2 className="section__title">Весь спектр digital-продуктов</h2>
          <p className="section__description">Разрабатываем доступные и простые digital-решения
            понятные вашему пользователю</p>
          <DecorativeSquare color="purple" top="0px" left ="0px"/>
          <DecorativeSquare color="purple" top="40px" left ="40px"/>
          <DecorativeSquare color="purple" top="-40px" left ="-40px"/>
          <DecorativeSquare color="yellow" top="0px" left ="-40px"/>
        </div>

      </div>
    </section>

    <section className={style.servicesMain} ref = {staticBlockRef}>

      <img ref={triangle1} className ={`${style.triangle} ${style.triangle1}`}src="/img/triangle.png" alt=""/>
      <img ref={triangle2} className ={`${style.triangle} ${style.triangle2}`}src="/img/triangle.png" alt=""/>
      <img ref={triangle3}className ={`${style.triangle} ${style.triangle3}`}src="/img/triangle.png" alt=""/>
      <img ref={triangle4} className ={`${style.triangle} ${style.triangle4}`}src="/img/triangle.png" alt=""/>

      <div className={style.services__fixed} ref={fixedRef}>
        <img className = {style.service__mainImg} src="/img/service-main.svg" alt=""/>
        <div className={style.service__secondaryImg}>
          <img src="/img/service-secondary1.svg" ref={secondarySvgRef} alt=""/>
        </div>
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
      </div>
    </section>
    </>
  )
}

export default Services
