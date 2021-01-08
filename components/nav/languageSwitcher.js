import style from "./nav.module.css";
import { useRouter } from "next/router";
import Button from "../button/button";

const LanguageSwitcher = () => {

  const router = useRouter();

  const setLanguage = lang => {
    router.push(router.asPath, router.asPath, {
      locale:lang
    })
  }

  return(
    <div className={style.switcher}>
      <Button
        clickHandler = {() => setLanguage("ru-RU")}
        css={{
          width:"80px",
          height:"30px",
          background:"#684289",
          boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25)",
          margin:"0 5px 0 0",
          fontSize:"16px"
        }}
        text="RU"/>
       <Button
          clickHandler = {() => setLanguage("en-US")}
          css={{
            width:"80px",
            height:"30px",
            background:"#684289",
            boxShadow:"4px 4px 5px rgba(0, 0, 0, 0.25)",
            margin:"0 16px 0 0",
            fontSize:"16px"
          }}
          text="EN"/>
    </div>
  )
}

export default LanguageSwitcher;
