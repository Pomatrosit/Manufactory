import * as types from "../types";

const initialState={
  activeCategory:0,
  works:[
    {id:1, type:1, img:"/img/traktor.png", title:"Трактор",
    text:"Разработка Landing Page для компании арендатора тяжёлой строительной техники"},
    {id:2, type:2, img:"/img/mosfilter.png", title:"Мос - Фильтр",
    text:"Интернет-магазин бытовых фильтров для воды и их комплектующих"},
    {id:3, type:4, img:"/img/dsk.png", title:"DSK - ONE",
    text:"Разработка дизайна для сайта строительной компании"},
    {id:4, type:1, img:"/img/barber.png", title:"Barber Bear",
    text:"Одностраничный сайт с ситемой онлайн записи для сети мужских парикмахерских"},
    {id:5, type:4, img:"/img/medicalcity.png", title:"Medical City",
    text:"Дизайн сайта для крупнейшего медицинского кластера в Сибири"},
    {id:6, type:1, img:"/img/bloodrite.png", title:"Blood Rite",
    text:"Разработка Landing Page для тату-салона"},
    {id:7, type:3, img:"/img/choo.png", title:"CHOO!",
    text:"Одностраничное приложение службы доставки еды"},
    {id:8, type:4, img:"/img/sells.png", title:"Sells",
    text:"Дизайн корпоративного сайта маркетинговой компании"},
    {id:9, type:4, img:"/img/chechen.png", title:"ЧеченХолод",
    text:"Редизайн корпоративного сайта компании холодильного оборудования"}
  ]
}

export const workReducer = (state = initialState, action) => {
  switch(action.type){

    case types.SET_WORKS_CATEGORY : {
      return {...state, activeCategory:action.payload}
    }

    default:return state
  }
}
