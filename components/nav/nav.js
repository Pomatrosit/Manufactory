import NavLink from "./navLink";
import LanguageSwitcher from "./languageSwitcher";
import style from "./nav.module.css";
import Logo from "../logo"

const Nav = () => {
  return(
    <nav className={style.nav}>

      <div className={style.logo}>
        <Logo width="40" height="40" fill="#fff" margin="0 27px 0 0"/>
        <img src="/img/manufactory.svg" alt="manufactory-logo"/>
      </div>

      <ul className={style.links}>
        <NavLink text="Портфолио"/>
        <NavLink text="Цены"/>
        <NavLink text="Контакты"/>
        <NavLink text="Статьи"/>
        <NavLink text="Компания"/>
      </ul>

      <LanguageSwitcher />

    </nav>
  )
}

export default Nav;
