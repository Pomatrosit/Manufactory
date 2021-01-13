import style from "./dropDown.module.css";
import {useState, useRef} from "react";

const DropDown = () => {

  const options = [
    {id:0, value:"Все проекты"},
    {id:1, value:"Одностраничные сайты"},
    {id:2, value:"Интернет-магазины"},
    {id:3, value:"Приложения"},
    {id:4, value:"Многостраничники"}
  ];

  const afterRef = useRef();
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState(options[0].value);

  const onMouseEnter = () => {
    if (document.documentElement.clientWidth > 768){
      if (!isDropDownOpen) afterRef.current.style.animation = "button-background-open-animation 1s linear forwards";
    }
  }

  const onMouseLeave = () => {
    if (!isDropDownOpen) afterRef.current.style.animation = "button-background-close-animation 1s linear forwards";
  }

  return(
    <div className={style.dropdown}
         onClick = {() => setDropDownOpen(prev => !prev)}>

      <span className={style.dropdown__value}>{currentValue}</span>

      <img style={{transform:isDropDownOpen ? "translateY(3px) rotate(180deg)" : ""}}
           src="/img/dropdown.svg" alt="dropdown arrow" className={style.dropdown__arrow}/>

      { isDropDownOpen &&
        <div className={style.options}>
          {
            options.map(o =>
              <div
                onClick = {() =>  {
                  setCurrentValue(o.value);
                  afterRef.current.style.animation = "button-background-close-animation 1s linear forwards";
                }}
                key = {o.id}
                id = {o.id}
                className={style.option}>{o.value}
              </div>)
          }
        </div>
      }

      <div ref = {afterRef}
           className={style.dropdown__after}
           style={{border:isDropDownOpen ? "1px solid #492A64" : ""}}
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}></div>
    </div>
  )
}

export default DropDown;
