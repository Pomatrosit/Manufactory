import style from "./nav.module.css";
import {useRef} from "react";
import Link from "next/link";

const NavLink = ({title, href}) => {

  const shapeRef = useRef();

  const onMouseEnter = () => {
    shapeRef.current.style.animation = "link-open-animation 1s ease-in forwards";
  }

  const onMouseLeave = () => {
    shapeRef.current.style.animation = "link-close-animation 0.3s ease-in forwards";
  }

  return(
      <Link href={href}>
        <a className={style.link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
           {title}
           <div className={style.linkShape} ref = {shapeRef}></div>
        </a>
      </Link>
  )
}

export default NavLink;
