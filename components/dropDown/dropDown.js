import style from "./dropDown.module.css";

const DropDown = () => {
  return(
    <div className={style.dropdown}>
      <span className={style.dropdown__value}>Все проекты</span>
      <img src="/img/dropdown.svg" alt="dropdown arrow" className={style.dropdown__arrow}/>
    </div>
  )
}

export default DropDown;
