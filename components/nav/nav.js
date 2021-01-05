import NavLink from "./navLink";
import style from "./nav.module.css";

const Nav = () => {
  return(
    <nav className={style.nav}>

      <div className={style.logo}>
        <img src="/img/logo.svg" alt="manufactory-logo" className={style.logoFirstImg}/>
        <img src="/img/manufactory.svg" alt="manufactory-logo"/>
      </div>

      <ul className={style.links}>
        <NavLink text="Портфолио"/>
        <NavLink text="Цены"/>
        <NavLink text="Контакты"/>
        <NavLink text="Статьи"/>
        <NavLink text="Компания"/>
      </ul>

    </nav>
  )
}

export default Nav;
