import style from "./portfolio.module.css";
import DropDown from "../dropDown/dropDown";
import PortfolioCard from "./portfolioCard";
import DecorativeSquare from "../decorative/decorativeSquare";
import Button from "../button/button";
import {connect} from "react-redux";
import {setActiveCategory} from "../../store/actions/worksAction";
import {useState} from "react";

const Portfolio = ({works, setActiveCategory}) => {

  const [countOfCards, setCountOfCards] = useState(6);

  const {activeCategory} = works;
  const allWorks = works.works;

  let cards = allWorks.filter(work => work.type === activeCategory);
  if (activeCategory === 0) cards = allWorks;
  const displayedCards = cards.slice(0, countOfCards);

  return(
    <div className={style.portfolio}>
      <div className="app-wrapper">

        <div className={style.portfolio__top}>
          <h3 className="section__subtitle">Портфолио</h3>
          <h2 className="section__title">Последние выполненные проекты</h2>
          <p className="section__description">Открыты для сотрудничества с бизнесом любого масштаба</p>
          <DropDown setActiveCategory={setActiveCategory} setCountOfCards={setCountOfCards}/>
          <DecorativeSquare color="lightpurple" top="0" right="0"/>
          <DecorativeSquare color="purple" top="40px" right="0"/>
          <DecorativeSquare color="yellow" top="0" right="40px"/>
          <DecorativeSquare color="yellow" top="-40px" right="0px"/>
        </div>

        <div className={style.portfolio__main}>
            {
              displayedCards.map(card =>
                <PortfolioCard
                   key={card.id}
                   img={card.img}
                   title={card.title}
                   text={card.text}
                />)
            }
        </div>

        {
          cards.length > countOfCards  &&
          <Button
            clickHandler={() => setCountOfCards(prev => prev + 6)}
            css={{
             width:"130px",
             height:"45px",
             background:"#FFFFFF;",
             boxShadow:"0px 0px 5px rgba(128, 125, 125, 0.19)",
             fontSize:"13px",
             margin:"0 auto 0 auto",
             color:"#492A64",
             textTransform:"uppercase",
             fontFamily:"SF Pro Display",
             fontWeight:"600"
           }}
           text="Ещё"/>
        }

      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    works:state.works
  }
}

const mapDispatchToProps = {
  setActiveCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
