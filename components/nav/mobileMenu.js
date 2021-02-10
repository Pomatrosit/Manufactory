import style from "./nav.module.css";
import {useEffect} from "react";
import {setScrollAvailable, setScrollUnavailable} from "../../utils";
import Link from "next/link";
import Button from "../button/button";

const MobileMenu = ({setBurgerOpen, links}) => {

  const getBodyScrollTop = () => {
    return self.pageYOffset || (document.documentElement && document.documentElement.ScrollTop) || (document.body && document.body.scrollTop);
  }

  const close = () => {
    setScrollAvailable();
    setBurgerOpen(false);
  }

  useEffect(() => {
    setScrollUnavailable();

    return () => {
      setScrollAvailable();
    }
  },[]);

  return(
    <>
      <div className={style.mobileMenu}>

        <div className={style.mobileMenu__content}>

          <div className={style.mobileMenu__top}>
            <p className={style.mobileMenu__title}>Меню</p>
            <svg onClick ={close} width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.41406" width="22" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="white"/>
              <rect x="16.9707" y="1.41431" width="22" height="2" rx="1" transform="rotate(135 16.9707 1.41431)" fill="white"/>
            </svg>
          </div>

          <div className={style.mobileMenu__links}>
            {
              links.map(link =>
                <Link key={link.id} href={link.href}><a className={style.mobileMenu__link}>{link.title}</a></Link>
              )
            }
          </div>

          <div className={style.mobileMenu__buttons}>
            <Button
              css={{
               width:"100%",
               height:"50px",
               background:"#684289",
               boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
               fontSize:"19px",
               adaptiveWidth500:"100%"
             }}
             text="Позвонить по телефону"/>
             <Button
               css={{
                width:"100%",
                height:"50px",
                background:"#fff",
                boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)",
                fontSize:"19px",
                adaptiveWidth500:"100%",
                color:"#684289"
              }}
              text="Написать в мессенджер"/>
          </div>

       </div>
      </div>

      <div className={style.mobileOverlay} onClick={close}></div>
    </>
  )
}

export default MobileMenu;
