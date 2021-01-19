import Nav from "../nav/nav";
import Button from "../button/button";
import style from "./header.module.css";
import {useEffect, useRef} from "react";
import useTranslation from 'next-translate/useTranslation';
import {connect} from "react-redux";
import {setModalOpen} from "../../store/actions/modalAction";

const Header = ({setModalOpen}) => {

  const { t } = useTranslation("home");
  const imageRef = useRef();
  const imageMobileRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (imageRef.current) imageRef.current.style.transform =  `translateY(${150 - window.pageYOffset/20}px)`;
      if (imageMobileRef.current) imageMobileRef.current.style.transform =
      `translateY(${-window.pageYOffset/15}px) rotateY(-10deg) rotateX(-4deg) skew(-3deg)`;
    });
  }, []);

  return(
     <section className={style.header}>

       <div className="app-wrapper">

         <Nav without={1}/>

         <div className={style.headerMain}>
           <h1 className={style.title}>{t("title")}</h1>
           <h2 className={style.subtitle}>Полный цикл создания и сопровождения сайтов любой сложности</h2>
           <div className={style.btnGroup}>
             <Button
               css={{
                 width:"250px",
                 height:"50px",
                 background:"#684289",
                 boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25)",
                 margin:"0 16px 0 0",
                 fontSize:"19px"
               }}
               text="Смотреть работы"/>
             <Button
               clickHandler = {() => setModalOpen(true)}
               css={{
                width:"250px",
                height:"50px",
                background:"#D4B57F",
                boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize:"19px"
              }}
              text="Оставить заявку"/>
           </div>
         </div>

         <img src="/img/points1.svg" className={`${style.points1} ${style.points}`}></img>
         <img src="/img/points2.svg" className={`${style.points2} ${style.points}`}></img>

         <div className={style.headerImg} ref= {imageRef}>
           <img className={style.header__desktop} src="/img/header-desktop.svg" alt="manufactory-desktop"/>
           <img className={style.header__mobile} ref={imageMobileRef}src="/img/header-mobile.svg" alt="manufactory-mobile"/>
         </div>

       </div>
     </section>
  )
}

const mapDispatchToProps = {
  setModalOpen
}

export default connect(null, mapDispatchToProps)(Header);
