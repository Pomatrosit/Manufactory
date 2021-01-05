import style from "./nav.module.css";

const Nav = () => {
  return(
    <nav className={style.nav}>

      <div className={style.logo}>
        <img src="/img/logo.svg" alt="manufactory-logo" className={style.logoFirstImg}/>
        <img src="/img/manufactory.svg" alt="manufactory-logo"/>
      </div>

      <ul className={style.links}>
        <li className={style.link}>Портфолио</li>
        <li className={style.link}>Цены</li>
        <li className={style.link}>Контакты</li>
        <li className={style.link}>Статьи</li>
        <li className={style.link}>Компания</li>
      </ul>

    </nav>
  )
}

export default Nav;
