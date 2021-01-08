import Nav from "../nav/nav";
import Button from "../button/button";
import style from "./header.module.css";
import {useEffect, useRef} from "react";
import useTranslation from 'next-translate/useTranslation';

const Header = ({openModal}) => {

  const { t } = useTranslation("home");
  const imageRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (imageRef.current) imageRef.current.style.transform =  `translateY(${100 - window.pageYOffset/20}px)`;
    });
  }, []);

  return(
     <section className={style.header}>

       <img src="/img/bg.png" alt="background" className={style.bg1}/>

       <div className={style.bg2}><div className={style.bg2Inner}></div></div>

       <div className="app-wrapper">

         <Nav />

         <div className={style.headerMain}>
           <h1 className={style.title}>{t("title")}</h1>
           <h2 className={style.subtitle}>Полный цикл создания и сопровождения digital продуктов любой сложности</h2>
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
               css={{
                width:"200px",
                height:"50px",
                background:"#D4B57F",
                boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize:"19px"
              }}
              text="Что делаем"/>
           </div>
         </div>

         <div className={style.headerImg} ref= {imageRef}>
           <span style={{fontSize:30}}>SOME AWESOME IMAGE</span>
         </div>

       </div>
     </section>
  )
}

export default Header;
