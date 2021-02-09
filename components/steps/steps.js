import style from "./steps.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import Image from "next/image";

const Steps = () => {
  return(
    <section className={style.steps}>
      <div className="app-wrapper">

        <div className={style.steps__offer}>
          <h3 className="section__subtitle">Шаги</h3>
          <h2 className="section__title">Сотрудничество с нами — это просто</h2>
          <p className="section__description" style={{maxWidth:500}}>Простые этапы взаимодействия от первой консультации до первых заявок</p>
        </div>

        <div className={style.steps__main}>

          <div className={style.step + " " + style.step1}>

            <div className={style.step__img}>
              <svg width="556" height="421" viewBox="0 0 556 421" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 65C2.5 30.4822 30.4822 2.5 65 2.5H490.405C530.868 2.5 560.666 40.3637 551.153 79.6926L480.81 370.534C473.097 402.425 442.036 422.923 409.681 417.473L54.6185 357.665C24.5307 352.597 2.5 326.545 2.5 296.033V65Z" stroke="#E0D3EC" strokeWidth="5"/>
              </svg>
              <div className = {style.step__SecondaryImg1}>
                <Image
                  src="/img/steps/step1.png"
                  alt="Консультация"
                  width={534}
                  height={366}
                  quality={90}
                />
              </div>
            </div>

            <div className={style.step__content}>
              <p className={style.step__subtitle}>1. Шаг</p>
              <p className={style.step__title}>Консультация и брифинг</p>
              <p className={style.step__text}>На первом этапе в режиме конференции, либо на личной встрече мы проведём устный
              брифинг по основным критериям вашей бизнес-задачи, выясним точки роста и утвердим план работ</p>
            </div>

          </div>

          <div className={style.step + " " + style.step2}>

            <div className={style.step__img}>
              <svg width="565" height="429" viewBox="0 0 565 429" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M562.5 65.1264C562.5 30.1886 533.859 2.03544 498.926 2.63566L64.1818 10.1055C24.1662 10.793 -4.90131 48.389 4.50708 87.2889L74.9419 378.51C82.7527 410.805 114.466 431.343 147.131 425.261L511.44 357.429C541.037 351.919 562.5 326.091 562.5 295.985V65.1264Z" stroke="#E0D3EC" strokeWidth="5"/>
              </svg>
              <div className = {style.step__SecondaryImg2}>
                <Image
                  src="/img/steps/step2.png"
                  alt="Заключение договора"
                  width={526}
                  height={356}
                  quality={90}
                />
              </div>
            </div>

            <div className={style.step__content}>
              <p className={style.step__subtitle}>2. Шаг</p>
              <p className={style.step__title}>Заключение договора и предоплата</p>
              <p className={style.step__text}>На первом этапе в режиме конференции, либо на личной встрече мы проведём устный
              брифинг по основным критериям вашей бизнес-задачи, выясним точки роста и утвердим план работ</p>
            </div>

          </div>

          <div className={style.step + " " + style.step3}>

            <div className={style.step__img}>
              <svg width="559" height="422" viewBox="0 0 559 422" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3098 60.1321C23.8513 27.6014 50.9901 2.5 83.6199 2.5H493.405C533.868 2.5 563.666 40.3637 554.153 79.6926L483.747 370.796C476.059 402.584 445.165 423.069 412.892 417.781L55.3479 359.192C23.3013 353.94 0.615297 325.022 3.14462 292.646L21.3098 60.1321Z" stroke="#E0D3EC" strokeWidth="5"/>
              </svg>
              <div className = {style.step__SecondaryImg3}>
                <Image
                  src="/img/steps/step3.png"
                  alt="Разработка сайта"
                  width={554}
                  height={417}
                  quality={100}
                />
              </div>
            </div>

            <div className={style.step__content}>
              <p className={style.step__subtitle}>3. Шаг</p>
              <p className={style.step__title}>Разработка сайта</p>
              <p className={style.step__text}>На первом этапе в режиме конференции, либо на личной встрече мы проведём устный
              брифинг по основным критериям вашей бизнес-задачи, выясним точки роста и утвердим план работ</p>
            </div>

          </div>

          <div className={style.step + " " + style.step4}>

            <div className={style.step__img}>
              <div className = {style.step__SecondaryImg4}>
                <Image
                  src="/img/steps/step4.png"
                  alt="Согласование работ"
                  width={525}
                  height={575}
                  quality={100}
                />
              </div>
            </div>

            <div className={style.step__content}>
              <p className={style.step__subtitle}>4. Шаг</p>
              <p className={style.step__title}>Согласование работ</p>
              <p className={style.step__text}>На первом этапе в режиме конференции, либо на личной встрече мы проведём устный
              брифинг по основным критериям вашей бизнес-задачи, выясним точки роста и утвердим план работ</p>
            </div>

          </div>

          <div className={style.step + " " + style.step5}>

            <div className={style.step__img}>
              <div className = {style.step__SecondaryImg5}>
                <Image
                  src="/img/steps/step5.png"
                  alt="Оплата и сдача проекта"
                  width={453}
                  height={507}
                  quality={100}
                />
              </div>
            </div>

            <div className={style.step__content}>
              <p className={style.step__subtitle}>5. Шаг</p>
              <p className={style.step__title}>Оплата и сдача проекта</p>
              <p className={style.step__text}>На первом этапе в режиме конференции, либо на личной встрече мы проведём устный
              брифинг по основным критериям вашей бизнес-задачи, выясним точки роста и утвердим план работ</p>
            </div>

          </div>

          <div className={style.vertical}>
            <div className={style.vertical__circle} style={{marginTop:45}}></div>
            <div className={style.vertical__shape} style={{height:650}}></div>
            <div className={style.vertical__circle}></div>
            <div className={style.vertical__shape} style={{height:650}}></div>
            <div className={style.vertical__circle}></div>
            <div className={style.vertical__shape} style={{height:610}}></div>
            <div className={style.vertical__circle}></div>
            <div className={style.vertical__shape} style={{height:745}}></div>
            <div className={style.vertical__circle}></div>
          </div>

        </div>

        <DecorativeSquare color="purple" top="0" left="0"/>
        <DecorativeSquare color="purple" top="40px" left="40px"/>
        <DecorativeSquare color="purple" top="-40px" left="-40px"/>
        <DecorativeSquare color="yellow" top="0" left="-40px"/>
      </div>
    </section>
  )
}

export default Steps
