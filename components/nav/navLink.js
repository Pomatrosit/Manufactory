import style from "./nav.module.css";
import {useRef} from "react";
import Router from "next/router";

const NavLink = ({title, href}) => {

  const shapeRef = useRef();

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      shapeRef.current.style.animation = "link-open-animation 1s ease-in forwards";
    }
  }

  const onMouseLeave = () => {
    shapeRef.current.style.animation = "link-close-animation 0.3s ease-in forwards";
  }

  const push = () => {
    Router.push(href).then(() => window.scrollTo (0, 0));
  }

  return(
        <li className={style.link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={push}>
           {title}
           <div className={style.linkShape} ref = {shapeRef}></div>
        </li>
  )
}

export default NavLink;
