import NavLink from "./navLink";
import LanguageSwitcher from "./languageSwitcher";
import style from "./nav.module.css";
import Logo from "../logo"

const Nav = ({without, paddingTop}) => {

  let links = [
    {id:1, title:"Главная", href:"/"},
    {id:2, title:"Портфолио", href:"/potfolio"},
    {id:3, title:"Цены", href:"/prices"},
    {id:4, title:"Контакты", href:"/contacts"},
    {id:5, title:"Статьи", href:"/blog"},
    {id:6, title:"Компания", href:"/about"}
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

      {
        //<LanguageSwitcher />
      }


    </nav>
  )
}

export default Nav;
