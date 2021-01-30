import style from "./question.module.css";
import Button from "../button/button";
import DecorativeSquare from "../decorative/decorativeSquare";

const Question = () => {
  return(
    <section className={style.question}>
      <div className="app-wrapper">
        <h2 className="section__title">Хотите задать вопрос?</h2>
        <div className={style.question__buttons}>
          <Button
            css={{
              width:"300px",
              height:"50px",
              background:"#684289",
              boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.15)",
              margin:"0 30px 0 0",
              fontSize:"19px",
              color:"#fff",
              fontWeight:"500",
              adaptiveWidth500:"100%"
            }}
            text="Позвонить по телефону"/>
          <Button
              css={{
                width:"300px",
                height:"50px",
                background:"#fff",
                boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.15)",
                margin:"0",
                fontSize:"19px",
                color:"#684289",
                fontWeight:"500",
                adaptiveWidth500:"100%"
              }}
            text="Написать в мессенджер"/>
        </div>
      </div>

      <DecorativeSquare side="150px" color="purple" top="0" right ="0"/>
      <DecorativeSquare side="75px" color="yellow" top="0" right ="0"/>
      <DecorativeSquare side="150px" color="yellow" bottom="0" left ="0"/>
      <DecorativeSquare side="75px" color="purple" bottom="0" left ="0"/>
    </section>
  )
}

export default Question
