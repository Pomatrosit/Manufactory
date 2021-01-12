import style from "./footer.module.css";

const Footer = () => {
  return(
    <footer className={style.footer}>
      <div className="app-wrapper">
        <div className={style.footer__main}>
          IM A FOOTER BITCH
          <div className={style.footer__logo}>

          </div>

          <div className={style.footer__menu}></div>

          <div className={style.footer__contacts}></div>

        </div>
      </div>
    </footer>
  )
}

export default Footer
