import style from "./portfolio.module.css";
import DropDown from "../dropDown/dropDown";
import PortfolioCard from "./portfolioCard";
import DecorativeSquare from "../decorative/decorativeSquare";
import Button from "../button/button";

const Portfolio = () => {

  const cards = [
    {id:1, img:"/img/traktor.png", title:"Трактор",
    text:"Разработка Landing Page для компании арендатора тяжёлой строительной техники"},
    {id:2, img:"/img/mosfilter.png", title:"Мос - Фильтр",
    text:"Интернет-магазин бытовых фильтров для воды и их комплектующих"},
    {id:3, img:"/img/dsk.png", title:"DSK - ONE",
    text:"Разработка дизайна для сайта строительной компании"},
    {id:4, img:"/img/barber.png", title:"Barber Bear",
    text:"Одностраничный сайт с ситемой онлайн записи для сети мужских парикмахерских"},
    {id:5, img:"/img/medicalcity.png", title:"Medical City",
    text:"Дизайн сайта для крупнейшего медицинского кластера в Сибири"},
    {id:6, img:"/img/bloodrite.png", title:"Blood Rite",
    text:"Разработка Landing Page для тату-салона"}
  ]

  return(
    <div className={style.portfolio}>
      <div className="app-wrapper">

        <div className={style.portfolio__top}>
          <h3 className="section__subtitle">Портфолио</h3>
          <h2 className="section__title">Последние выполненные проекты</h2>
          <p className="section__description">Работаем с абсолютно разными клиентами, от малого бизнеса
            до государственных компании федерального уровня</p>
          <DropDown />
          <DecorativeSquare color="lightpurple" top="0" right="0"/>
          <DecorativeSquare color="purple" top="40px" right="0"/>
          <DecorativeSquare color="yellow" top="0" right="40px"/>
          <DecorativeSquare color="yellow" top="-40px" right="0px"/>
        </div>

        <div className={style.portfolio__main}>
            {
              cards.map(card =>
                <PortfolioCard
                   key={card.id}
                   img={card.img}
                   title={card.title}
                   text={card.text}
                />)
            }
        </div>

        <Button
          css={{
           width:"130px",
           height:"45px",
           background:"#FFFFFF;",
           boxShadow:"0px 0px 5px rgba(128, 125, 125, 0.19)",
           fontSize:"13px",
           margin:"0 auto 150px auto",
           color:"#492A64",
           textTransform:"uppercase",
           fontFamily:"SF Pro Display",
           fontWeight:"600"
         }}
         text="Ещё"/>


      </div>
    </div>
  )
}

export default Portfolio;
