import Nav from "../nav/nav";
import Button from "../button/button";
import style from "./header.module.css";
import {useEffect, useRef} from "react";
// import useTranslation from 'next-translate/useTranslation';
import {connect} from "react-redux";
import {setModalOpen} from "../../store/actions/modalAction";
import Image from "next/image";
import HeaderSolution from "./headerSolution";

const Header = ({setModalOpen, navWithout, h1, h2, pageId}) => {
  // const { t } = useTranslation("home");
  const imageRef = useRef();
  const imageMobileRef = useRef();

  function onScroll(){
    if (imageRef.current) imageRef.current.style.transform =  `translateY(${150 - window.pageYOffset/20}px)`;
    if (imageMobileRef.current) imageMobileRef.current.style.transform =
    `translateY(${-window.pageYOffset/15}px) rotateY(-10deg) rotateX(-4deg) skew(-3deg)`;
  }

  useEffect(() => {
    if (document.documentElement.clientWidth > 768){
      window.addEventListener("scroll", onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return(
     <section className={style.header}>

       <div className="app-wrapper">

         <div className={style.glass}></div>

         <Nav without={navWithout} />

         <div className={style.headerMain}>
           {
             pageId === 3 &&
             <p className={style.header__offer}>Наше предложение</p>
           }
           <h1 className={style.title}>{h1}</h1>
           <h2 className={style.subtitle}>{h2}</h2>

           { // data-aos="zoom-in-down" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-delay="200"
           }

           { pageId === 1 &&
             <div className={style.btnGroup}>
               <Button
                 css={{
                   width:"250px",
                   height:"50px",
                   background:"#684289",
                   boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25)",
                   margin:"0 16px 0 0",
                   fontSize:"19px",
                   adaptiveWidth500:"100%"
                 }}
                 text="Смотреть работы"/>
               <Button
                 clickHandler = {() => setModalOpen(true)}
                 css={{
                  width:"250px",
                  height:"50px",
                  background:"#D4B57F",
                  boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
                  fontSize:"19px",
                  adaptiveWidth500:"100%"
                }}
                text="Оставить заявку"/>
             </div>
           }

           { pageId === 3 &&
             <div className={style.header__solutions}>
               <HeaderSolution text="Landing Page" img="/img/landingPage.png" alt="Лэндинг" href="#" shapeColor="#FB913F"/>
               <HeaderSolution text="Многостраничники" img="/img/multiPage.png" alt="Многостраничные сайты" href="#" shapeColor="#A772FF"/>
               <HeaderSolution text="Интернет-магазины" img="/img/shop.png" alt="Интернет-магазины" href="#" shapeColor="#3F87FE"/>
               <HeaderSolution text="Веб-приложения" img="/img/application.png" alt="Веб-приложения" href="#" shapeColor="#FB913F"/>
             </div>
           }

         </div>

         <img src="/img/points1.svg" className={`${style.points1} ${style.points}`}></img>
         <img src="/img/points2.svg" className={`${style.points2} ${style.points}`}></img>

         {
           pageId === 1 &&
           <div className={style.headerImg} ref= {imageRef}>
             <img className={style.header__desktop}
                src="/img/header-desktop.svg" alt="manufactory-desktop"/>
             <img className={style.header__mobile} ref={imageMobileRef}
                src="/img/header-mobile.svg" alt="manufactory-mobile"/>
           </div>
         }


       </div>


      <Image
        src="/img/main.png"
        alt="Студия разработки и продвижения сайтов Мануфактура"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority="eager"
      />


     </section>
  )
}

const mapDispatchToProps = {
  setModalOpen
}

export default connect(null, mapDispatchToProps)(Header);
