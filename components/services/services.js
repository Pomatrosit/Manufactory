import style from "./services.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import { useRef, useEffect } from "react";

const Services = () => {

  const heightOfFixed = 500;

  const fixedRef = useRef();
  const staticBlockRef = useRef();

  useEffect(() => {
    const windowHeight = document.documentElement.clientHeight;
    const topValue = (windowHeight - 500)/2;

    window.addEventListener("scroll", () => {
      if (fixedRef.current.getBoundingClientRect().top <= topValue){
        fixedRef.current.style.position="fixed";
        fixedRef.current.style.top = `${topValue}px`;
      }
      if (staticBlockRef.current.getBoundingClientRect().top >= topValue){
        fixedRef.current.style.position="absolute";
        fixedRef.current.style.top = `0`;
      }

      console.log(staticBlockRef.current.getBoundingClientRect().top)
    });
  }, []);


  return(
    <>
    <section className={style.servicesTop}>
      <div className="app-wrapper">

        <div className={style.topBlock}>
          <h3 className="section__subtitle">Надзаголовок</h3>
          <h2 className="section__title">Студия веб-разработки</h2>
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

      <div className={style.services__fixed} ref={fixedRef}></div>

      <div className="app-wrapper">
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

          <figure className={style.mainBlock__step}>
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
