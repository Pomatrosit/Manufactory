import {useRef} from "react";

const Button = ({css, text, clickHandler}) => {

  const buttonBackgroundRef = useRef();

  const onMouseEnter = () => {
    buttonBackgroundRef.current.style.animation = "button-background-open-animation 0.5s linear forwards";
  }

  const onMouseLeave = () => {
    buttonBackgroundRef.current.style.animation = "button-background-close-animation 0.5s linear forwards";
  }

  return(
    <>
    <div className="button" onClick = {clickHandler} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
       <div ref = {buttonBackgroundRef} className="button-background"></div>
       <span>{text}</span>
    </div>

    <style jsx>{`
      .button{
        width:${css.width || '250px'};
        height:${css.height || '50px'};
        margin:${css.margin || '0'};
        position:relative;
        display:flex;
        align-items:center;
        justify-content:center;
        cursor:pointer;
      }

      .button-background{
        background:${css.background || "#684289"};
        box-shadow:${css.boxShadow || "4px 4px 5px rgba(0, 0, 0, 0.25)"};
        border-radius:8px;
        position:absolute;
        top:0;left:0;right:0;bottom:0;
        z-index:0;
        cursor:pointer;
      }

      .button span{
        position:relative;
        z-index:10;
        font-weight: 500;
        font-size: 19px;
        color: #FFFFFF;
      }
      `}</style>
    </>
  )
}

export default Button;
