import style from "./technologies.module.css";
import DecorativeSquare from "../decorative/decorativeSquare";

const Technologies = () => {
  return(
    <div className={style.technologies}>
      <div className="app-wrapper">
        <div className={style.technologies__main}>

          <h3 className="section__subtitle">Технологии</h3>
          <h2 className="section__title">Современный подход</h2>
          <p className="section__description" style={{maxWidth:550}}>В разработке используем самые передовые технологии и тренды</p>

          <div className={style.brands}>
            <img src="/img/react.png" alt=""/>
            <img src="/img/blender.png" alt=""/>
            <img src="/img/next.png" alt=""/>
            <img src="/img/figma.png" alt=""/>
            <img src="/img/october.png" alt=""/>
          </div>

          <DecorativeSquare color="purple" top="0px" left="0px"/>
          <DecorativeSquare color="purple" top="40px" left="40px"/>
          <DecorativeSquare color="purple" top="-40px" left="-40px"/>
          <DecorativeSquare color="yellow" top="0px" left="40px"/>

        </div>
      </div>
    </div>
  )
}

export default Technologies
