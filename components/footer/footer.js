import style from "./footer.module.css";
import Logo from "../svgComponents/logo";

const Footer = () => {
  return(
    <footer className={style.footer}>
      <div className="app-wrapper">
        <div className={style.footer__main}>

          <div className={style.footer__first}>
            <div className={style.footer__logo}>
              <Logo width="40" height="40" fill="#252525" margin="0 25px 0 0"/>
              <img src="/img/manufactory-black.svg" alt="Мануфактура"/>
            </div>
            <h3 className={style.footer__subtitle}>Студия веб-разработки и дизайна</h3>
            <div className={style.footer__icons}>
               <img className = {style.footer__icon} src="/img/viber.svg" alt="viber"/>
               <img className = {style.footer__icon} src="/img/whatsapp.svg" alt="whatsapp"/>
               <img className = {style.footer__icon} src="/img/telega.svg" alt="telegram"/>
            </div>
          </div>

          <div className={style.footer__menu}>
             <h3 className={style.footer__title}>Компания</h3>
             <div className={style.footer__links}>
               <a href="#" className = {style.footer__link}>Главная</a>
               <a href="#" className = {style.footer__link}>Портфолио</a>
               <a href="#" className = {style.footer__link}>Решения</a>
               <a href="#" className = {style.footer__link}>Контакты</a>
             </div>
          </div>

          <div className={style.footer__contacts}>
            <h3 className={style.footer__title} style={{marginBottom:35}}>Контакты</h3>
            <div className={style.footer__contactsBlock}>
              <img src="/img/place.svg" alt="Киров"/>
              <span>г. Киров</span>
            </div>
            <div className={style.footer__contactsBlock}>
              <img src="/img/phone.svg" alt="Телефон"/>
              <span>+7 (8332) 45 65 87</span>
            </div>
            <div className={style.footer__contactsBlock}>
              <img src="/img/email.svg" alt="Email"/>
              <span>admin@manufactroy-studio.com</span>
            </div>
          </div>

        </div>

        <div className={style.footer__bottom}>

          <a className={style.policy} href="">Политика конфиденциальности</a>
          <p> © Веб-студия. Мануфактура. Все права защищены</p>
        </div>
      </div>

      <Logo width="585" height="585" fill="rgba(37, 37, 37, 0.02)" position="absolute" top="73px" left="0px"/>
    </footer>



  )
}

export default Footer
