import style from "./advantages.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import Adv1Outer from "../svgComponents/adv1Outer";
import Adv1Inner from "../svgComponents/adv1Inner";
import Adv2Outer from "../svgComponents/adv2Outer";
import Adv2Inner from "../svgComponents/adv2Inner";
import Adv3Full from "../svgComponents/adv3Full";
import Adv4Top from "../svgComponents/adv4Top";
import Adv4Bottom from "../svgComponents/adv4Bottom";

const Advantages = () => {
  return(
    <section className = {style.advantages}>
      <div className="app-wrapper">

        <div className={style.services}>
          <h3 className="section__subtitle">Основные преимещуства</h3>
          <h2 className="section__title">Разработка сайтов от А до Я</h2>
          <p className="section__description">Взаимодействие с вашим клиентом в интернете ещё никогда не было таким простым</p>

          <div className={style.servicesMain}>

            <figure className={style.servicesItem}>
               <div className={style.servicesItem__img}>
                 <Adv1Outer />
                 <Adv1Inner />
               </div>
               <div className={style.servicesItem__description}>
                 <figcaption className={style.servicesItem__title}>Конверсия</figcaption>
                 <p className={style.servicesItem__text}>Создаём и используем в своих продуктах качественно продуманные
                   quiz’ы, анкеты и калькуляторы существенно увеличивающие конверсию на сайте</p>
               </div>
            </figure>

            <figure className={style.servicesItem}>
               <div className={style.servicesItem__img}>
                 <Adv2Outer />
                 <Adv2Inner />
               </div>
               <div className={style.servicesItem__description}>
                 <figcaption className={style.servicesItem__title}>Дизайн</figcaption>
                 <p className={style.servicesItem__text}>Используем предметное фото, 3-D моделирование и анимацию
                   для максимально понятного визуального взаимодействия с посетителями сайта</p>
               </div>
            </figure>

            <figure className={style.servicesItem}>
               <div className={style.servicesItem__img}>
                 <Adv3Full />
               </div>
               <div className={style.servicesItem__description}>
                 <figcaption className={style.servicesItem__title}>Инструменты</figcaption>
                 <p className={style.servicesItem__text}>Разрабатываем сайты на связке React.js + Next.js, что позволяет добиться высокой скорости работы
                    и гибкой масштабируемости проекта</p>
               </div>
            </figure>

            <figure className={style.servicesItem}>
               <div className={style.servicesItem__img}>
                 <Adv4Top />
                 <Adv4Bottom />
               </div>
               <div className={style.servicesItem__description}>
                 <figcaption className={style.servicesItem__title}>Сопровождение</figcaption>
                 <p className={style.servicesItem__text}>Остаёмся со своими клиентами на связи 24/7, оптимизируем и
                   улучшаем продукт </p>
               </div>
            </figure>

          </div>

          <DecorativeSquare color="purple" top="0px" right ="0px"/>
          <DecorativeSquare color="purple" top="40px" right ="40px"/>
          <DecorativeSquare color="purple" top="-40px" right ="-40px"/>
          <DecorativeSquare color="yellow" top="-40px" right ="0px"/>
        </div>

      </div>
    </section>
  )
}

export default Advantages;
