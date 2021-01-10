import style from "./reviews.module.css";

const Reviews = () => {
  return(
    <section className={style.reviews}>
      <div className="app-wrapper">

        <div className={style.reviews__top}>
          <h3 className="section__subtitle">Портфолио</h3>
          <h2 className="section__title">Последние выполненные проекты</h2>
        </div>

        <div className={style.reviews__track}>
          
        </div>

      </div>
    </section>
  )
}

export default Reviews;
