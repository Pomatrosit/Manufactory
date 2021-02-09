import style from "./solutionOffers.module.css";
import Image from "next/image";

const SolutionOffers = () => {
  return(
    <section className={style.offers}>
      <div className="app-wrapper">

          <div className={style.offers__main}>
            <h3 className="section__subtitle" style={{textAlign:"left"}}>Опции</h3>
            <h2 className="section__title" style={{textAlign:"left", maxWidth:500, marginBottom:80}}>
              Отдельно своим клиентам мы предлагаем
            </h2>

            <figure className={style.card}>
              <div className={style.card__img}>
                <img src="/img/solutionOffers/solution-1.png" alt="Настройка контекстной рекламы для сайта"/>
              </div>
              <div className={style.card__content}>
                <figcaption className={style.card__title}>Контекстная реклама</figcaption>
                <p className={style.card__text}>Настройка рекламных компаний Google.Ads и Яндекс.Директ</p>
              </div>
            </figure>

            <figure className={style.card}>
              <div className={style.card__img}>
                <img src="/img/solutionOffers/solution-2.png" alt="Настройка поисковой оптимизации для сайта"/>
              </div>
              <div className={style.card__content}>
                <figcaption className={style.card__title}>Поисковая оптимизация</figcaption>
                <p className={style.card__text}>Поднятие позций сайта в результатах выдачи поисковых систем</p>
              </div>
            </figure>

            <figure className={style.card}>
              <div className={style.card__img}>
                <img src="/img/solutionOffers/solution-3.png" alt="Сопровождение сайтов"/>
              </div>
              <div className={style.card__content}>
                <figcaption className={style.card__title}>Сопровождение проектов</figcaption>
                <p className={style.card__text}>Техническая поддержка сайта и работа с контентом</p>
              </div>
            </figure>

            <figure className={style.card}>
              <div className={style.card__img}>
                <img src="/img/solutionOffers/solution-4.png" alt="Интеграции для сайтов"/>
              </div>
              <div className={style.card__content}>
                <figcaption className={style.card__title}>Интеграции</figcaption>
                <p className={style.card__text}>Создание единой экосистемы внутри вашего бизнеса</p>
              </div>
            </figure>

          </div>

          <div className={style.offers__image}>
            <Image
              src="/img/solutionOffers.png"
              alt="Дополнительные услуги при создании сайта"
              width={521}
              height={446}
              quality={100}
            />
          </div>

          <div className={style.offers__background}></div>

      </div>
    </section>
  )
}

export default SolutionOffers;
