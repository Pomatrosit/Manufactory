import style from "./reviews.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";
import {useRef, useEffect, useState} from "react";

const Reviews = () => {

  const trackRef = useRef();
  const itemRef = useRef();

  const [pos, setPos] = useState(0);

  useEffect(() => {
    const itemWidth = itemRef.current.offsetWidth;
    const length = trackRef.current.children.length;
    trackRef.current.style.width = `${itemWidth*length + (length - 1)*50}px`;
  }, []);

  const mouseMoveHandler = () => {
    console.log(1);
  }

  const trackMouseDownHandler = () => {
    trackRef.current.addEventListener("mousemove", mouseMoveHandler);
  }

  const trackMouseUpHandler = () => {
    trackRef.current.removeEventListener("mousemove", mouseMoveHandler);
  }

  return(
    <section className={style.reviews}>
      <div className="app-wrapper">

        <div className={style.reviews__top}>
          <h3 className="section__subtitle">Портфолио</h3>
          <h2 className="section__title">Последние выполненные проекты</h2>
          <DecorativeSquare color="purple" top="0" left="0"/>
          <DecorativeSquare color="purple" top="40px" left="40px"/>
          <DecorativeSquare color="purple" top="-40px" left="-40px"/>
          <DecorativeSquare color="yellow" top="0" left="-40px"/>
        </div>

        <div className={style.reviews__track}
             ref={trackRef}
             onMouseDown={trackMouseDownHandler}
             onMouseUp={trackMouseUpHandler}
        >

          <figure className={style.reviewItem} ref={itemRef}>
            <img src="/img/review.png" alt="" className={style.reviewItem__img}/>
            <p className={style.reviewItem__text}>Благодарим команду Мануфактуры за отлично проделанную работу, ребята знают своё дело,
              им можно доверять, с ними можно работать, хоть они и пьют бывает иногда</p>
            <figcaption className={style.reviewItem__title}><span>Олег Калинин, &nbsp;</span> Директор студии Blood Rite</figcaption>
          </figure>

          <figure className={style.reviewItem} ref={itemRef}>
            <img src="/img/review.png" alt="" className={style.reviewItem__img}/>
            <p className={style.reviewItem__text}>Благодарим команду Мануфактуры за отлично проделанную работу, ребята знают своё дело,
              им можно доверять, с ними можно работать, хоть они и пьют бывает иногда</p>
            <figcaption className={style.reviewItem__title}><span>Олег Калинин, &nbsp</span> Директор студии Blood Rite</figcaption>
          </figure>

          <figure className={style.reviewItem} ref={itemRef}>
            <img src="/img/review.png" alt="" className={style.reviewItem__img}/>
            <p className={style.reviewItem__text}>Благодарим команду Мануфактуры за отлично проделанную работу, ребята знают своё дело,
              им можно доверять, с ними можно работать, хоть они и пьют бывает иногда</p>
            <figcaption className={style.reviewItem__title}><span>Олег Калинин, &nbsp</span> Директор студии Blood Rite</figcaption>
          </figure>

          <figure className={style.reviewItem} ref={itemRef}>
            <img src="/img/review.png" alt="" className={style.reviewItem__img}/>
            <p className={style.reviewItem__text}>Благодарим команду Мануфактуры за отлично проделанную работу, ребята знают своё дело,
              им можно доверять, с ними можно работать, хоть они и пьют бывает иногда</p>
            <figcaption className={style.reviewItem__title}><span>Олег Калинин, &nbsp</span> Директор студии Blood Rite</figcaption>
          </figure>

        </div>

      </div>
    </section>
  )
}

export default Reviews;
