import style from "./portfolio.module.css";
import DropDown from "../dropDown/dropDown";
import PortfolioCard from "./portfolioCard"

const Portfolio = () => {

  const cards = [
    {id:1, img:"/img/traktor.png", title:"Трактор",
    text:"Разработка Landing Page для компании арендатора тяжёлой строительной техники"},
    
  ]

  return(
    <div className={style.portfolio}>
      <div className="app-wrapper">

        <div className={style.portfolio__top}>
          <h3 className="section__subtitle">Надзаголовок</h3>
          <h2 className="section__title">Студия веб-разработки</h2>
          <p className="section__description">Полный цикл создания, продвижения и сопровождения
            digital-продуктов любой сложности</p>
          <DropDown />
        </div>

        <div className={style.portfolio__main}>
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
            <PortfolioCard />
        </div>

      </div>
    </div>
  )
}

export default Portfolio;
