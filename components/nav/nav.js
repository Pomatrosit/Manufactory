import NavLink from "./navLink";
// import LanguageSwitcher from "./languageSwitcher";
import style from "./nav.module.css";
import Logo from "../svgComponents/logo"

const Nav = ({without, paddingTop}) => {

  let links = [
    {id:1, title:"Главная", href:"/"},
    {id:2, title:"Портфолио", href:"/portfolio"},
    {id:3, title:"Решения", href:"/solutions"},
    {id:4, title:"Контакты", href:"/contacts"}
  ]

  links = links.filter(link => link.id !== without);

  return(
    <nav className={style.nav} style={{paddingTop}}>

      <div className={style.logo}>
        <Logo width="40" height="40" fill="#fff" margin="0 27px 0 0"/>
        <img src="/img/manufactory.svg" alt="manufactory-logo" style={{zIndex:1}}/>
      </div>

      <ul className={style.links}>
        {
          links.map(link =>
            <NavLink
              key={link.id}
              title={link.title}
              href={link.href}/>
            )
        }
      </ul>

      <div className={style.burger}>

      </div>

      {
        //<LanguageSwitcher />
      }


    </nav>
  )
}

export default Nav;
