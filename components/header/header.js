import Nav from "../nav/nav";
import Button from "../button/button";
import style from "./header.module.css";

const Header = () => {
  return(
     <section className={style.header}>
       <div className="app-wrapper">

         <Nav />

         <div className={style.headerMain}>
           <h1 className={style.title}>Студия веб-разработки и дизайна.</h1>
           <h2 className={style.subtitle}>Полный цикл создания и сопровождения digital продуктов любой сложности</h2>
           <div className={style.btnGroup}>
             <Button
               css={{
                 width:"250px",
                 height:"50px",
                 background:"#684289",
                 boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25)",
                 margin:"0 16px 0 0"
               }}
               text="Смотреть работы"/>
             <Button
               css={{
                width:"200px",
                height:"50px",
                background:"#D4B57F",
                boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
              }}
              text="Что делаем"/>
           </div>
         </div>

       </div>
     </section>
  )
}

export default Header;
