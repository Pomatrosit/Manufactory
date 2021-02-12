import style from "./design.module.css";
import Image from "next/image";
import DecorativeSquare from "../decorative/decorativeSquare";

const Design = () => {
  return(
    <section className={style.design}>
      <div className="app-wrapper">
        <div className={style.main}>

          <h3 className="section__subtitle" style={{textAlign:"left"}}>Визуальная часть</h3>
          <h2 className="section__title" style={{textAlign:"left"}}>Уникальный дизайн</h2>

          <div className={style.design__cards}>

            <div className={style.card}>
              <div className={style.card__imgAndTitle}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.027 21.8897C15.317 21.8897 17.9784 24.575 17.9784 27.8827V34.009C17.9784 37.3151 15.3167 40 12.027 40H5.95148C2.66178 40 0 37.3151 0 34.009V27.8827C0 24.575 2.66139 21.8897 5.95148 21.8897H12.027ZM34.0504 21.8897C37.339 21.8897 40 24.5754 40 27.8827V34.009C40 37.3147 37.3386 40 34.0504 40H27.973C24.6833 40 22.0216 37.3151 22.0216 34.009V27.8827C22.0216 24.575 24.683 21.8897 27.973 21.8897H34.0504ZM12.027 24.6804H5.95148C4.20826 24.6804 2.7907 26.1107 2.7907 27.8827V34.009C2.7907 35.7792 4.20847 37.2093 5.95148 37.2093H12.027C13.77 37.2093 15.1877 35.7792 15.1877 34.009V27.8827C15.1877 26.1107 13.7702 24.6804 12.027 24.6804ZM34.0504 24.6804H27.973C26.2298 24.6804 24.8123 26.1107 24.8123 27.8827V34.009C24.8123 35.7792 26.23 37.2093 27.973 37.2093H34.0504C35.7917 37.2093 37.2093 35.779 37.2093 34.009V27.8827C37.2093 26.1109 35.7919 24.6804 34.0504 24.6804ZM34.0504 0C37.3386 0 40 2.68528 40 5.99104V12.1193C40 15.4237 37.338 18.1103 34.0504 18.1103H27.973C24.6839 18.1103 22.0216 15.4241 22.0216 12.1193V5.99104C22.0216 2.68489 24.6833 0 27.973 0H34.0504ZM12.027 0C15.3167 0 17.9784 2.68489 17.9784 5.99104V12.1193C17.9784 15.4241 15.3161 18.1103 12.027 18.1103H5.95148C2.66235 18.1103 0 15.4241 0 12.1193V5.99104C0 2.68489 2.66178 0 5.95148 0H12.027ZM34.0504 2.7907H27.973C26.23 2.7907 24.8123 4.22078 24.8123 5.99104V12.1193C24.8123 13.8884 26.2308 15.3196 27.973 15.3196H34.0504C35.791 15.3196 37.2093 13.8881 37.2093 12.1193V5.99104C37.2093 4.22098 35.7917 2.7907 34.0504 2.7907ZM12.027 2.7907H5.95148C4.20847 2.7907 2.7907 4.22078 2.7907 5.99104V12.1193C2.7907 13.8884 4.20922 15.3196 5.95148 15.3196H12.027C13.7692 15.3196 15.1877 13.8884 15.1877 12.1193V5.99104C15.1877 4.22078 13.77 2.7907 12.027 2.7907Z" fill="#200E32"/>
                </svg>
                <p className={style.card__title}>UX/UI</p>
              </div>
              <p className={style.card__text}>Подключаем соответствущий названию вашей компании доменный адрес</p>
            </div>

            <div className={style.card}>
              <div className={style.card__imgAndTitle}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 8.5H34C36.4853 8.5 38.5 10.5147 38.5 13V34C38.5 36.4853 36.4853 38.5 34 38.5H6C3.51472 38.5 1.5 36.4853 1.5 34V8.5Z" stroke="#200E32" strokeWidth="3"/>
                  <path d="M1.5 18.5H34C36.4853 18.5 38.5 20.5147 38.5 23V34C38.5 36.4853 36.4853 38.5 34 38.5H6C3.51472 38.5 1.5 36.4853 1.5 34V18.5Z" stroke="#200E32" strokeWidth="3"/>
                  <mask id="path-3-inside-1" fill="white">
                  <path d="M21 13.5C21 12.6716 21.6716 12 22.5 12H33.5C34.3284 12 35 12.6716 35 13.5C35 14.3284 34.3284 15 33.5 15H22.5C21.6716 15 21 14.3284 21 13.5Z"/>
                  </mask>
                  <path d="M22.5 15H33.5V9H22.5V15ZM33.5 12H22.5V18H33.5V12ZM22.5 12C23.3284 12 24 12.6716 24 13.5H18C18 15.9853 20.0147 18 22.5 18V12ZM32 13.5C32 12.6716 32.6716 12 33.5 12V18C35.9853 18 38 15.9853 38 13.5H32ZM33.5 15C32.6716 15 32 14.3284 32 13.5H38C38 11.0147 35.9853 9 33.5 9V15ZM22.5 9C20.0147 9 18 11.0147 18 13.5H24C24 14.3284 23.3284 15 22.5 15V9Z" fill="#200E32" mask="url(#path-3-inside-1)"/>
                  <path d="M1.5 6C1.5 3.51472 3.51472 1.5 6 1.5H16C17.933 1.5 19.5 3.067 19.5 5C19.5 6.933 17.933 8.5 16 8.5H1.5V6Z" stroke="#200E32" strokeWidth="3"/>
                  <circle cx="12.5" cy="28.5" r="6" stroke="#200E32" strokeWidth="3"/>
                </svg>
                <p className={style.card__title}>Фотоматериалы</p>
              </div>
              <p className={style.card__text}>Подключаем соответствущий названию вашей компании доменный адрес</p>
            </div>

            <div className={style.card}>
              <div className={style.card__imgAndTitle}>
                <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.79381 16.0659L23.6495 9.03297M9.79381 16.0659V34.5275M9.79381 16.0659L23.6495 22.6593L37.5052 16.0659M23.6495 9.03297L37.5052 16.0659M23.6495 9.03297V42M23.6495 9.03297V2M37.5052 16.0659V34.967M37.5052 34.967L23.6495 42M37.5052 34.967L23.6495 27.4945M23.6495 42L9.79381 34.5275M9.79381 34.5275L23.6495 27.4945M23.6495 27.4945L44 38.4835M23.6495 27.4945L2 38.4835" stroke="#200E32" strokeWidth="3" strokeLinecap="round"/>
                </svg>
                <p className={style.card__title}>3D визуализация</p>
              </div>
              <p className={style.card__text}>Подключаем соответствущий названию вашей компании доменный адрес</p>
            </div>

            <div className={style.card}>
              <div className={style.card__imgAndTitle}>
                <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M31.6464 6.08781C32.4607 6.08781 33.1337 6.72072 33.2402 7.54188L33.2549 7.77016L33.2547 34.2393L39.2515 27.9417C39.8782 27.2832 40.8967 27.2807 41.5263 27.9362C42.0986 28.5321 42.1526 29.4666 41.6868 30.1264L41.5315 30.3154L32.7862 39.5048C32.7335 39.559 32.6798 39.6081 32.6232 39.6535L32.7862 39.5048C32.7073 39.5877 32.6222 39.6602 32.5324 39.7223C32.5011 39.7427 32.4686 39.7636 32.4353 39.7832C32.4044 39.8027 32.373 39.8198 32.3411 39.8357C32.3097 39.8502 32.2779 39.8649 32.2455 39.8785C32.2044 39.8969 32.1622 39.9125 32.1195 39.9262C32.0944 39.9332 32.0686 39.9408 32.0426 39.9476C31.9963 39.9609 31.9498 39.971 31.9029 39.9789C31.881 39.9815 31.8581 39.9848 31.8349 39.9876C31.7821 39.9952 31.7297 39.9989 31.6773 40C31.6669 39.999 31.6567 39.9991 31.6464 39.9991L31.6151 40C31.5627 39.9989 31.5103 39.9952 31.4582 39.9888L31.6464 39.9991C31.5588 39.9991 31.4728 39.9917 31.389 39.9776C31.3426 39.971 31.2961 39.9609 31.2499 39.9487C31.2255 39.9411 31.2011 39.934 31.1769 39.9263C31.1308 39.9128 31.085 39.8959 31.0398 39.8767C31.0151 39.8648 30.9913 39.8539 30.9677 39.8424C30.9307 39.8259 30.8936 39.8059 30.857 39.7844C30.8241 39.7635 30.7917 39.7427 30.76 39.7208C30.7352 39.7052 30.7108 39.6873 30.6868 39.6686L30.6697 39.6535C30.6131 39.6081 30.5594 39.559 30.5091 39.5063L30.5062 39.5048L21.7609 30.3154C21.1342 29.6569 21.1365 28.5917 21.7661 27.9362C22.3385 27.3403 23.2322 27.2882 23.8608 27.7784L24.0408 27.9417L30.0377 34.2437L30.038 7.77016C30.038 6.84103 30.7581 6.08781 31.6464 6.08781ZM10.3536 0.000933804L10.3849 0C10.4373 0.00105327 10.4897 0.00477008 10.5418 0.0111504L10.3536 0.000933804C10.4412 0.000933804 10.5272 0.00826239 10.611 0.0223655C10.6568 0.0289193 10.7029 0.0388249 10.7485 0.0508503C10.7753 0.0590805 10.8026 0.0671064 10.8297 0.0758583C10.8719 0.0883121 10.9128 0.10345 10.9531 0.120366C10.9823 0.133952 11.0119 0.147456 11.0409 0.161843C11.0755 0.177464 11.1095 0.195845 11.143 0.21558C11.1716 0.234042 11.2 0.252028 11.2278 0.270887C11.2564 0.288672 11.285 0.309488 11.3131 0.331387L11.4938 0.495189L20.2391 9.68458C20.8658 10.3431 20.8635 11.4083 20.2339 12.0638C19.6615 12.6597 18.7678 12.7118 18.1392 12.2216L17.9592 12.0583L11.9606 5.75365L11.962 32.2298C11.962 33.159 11.2419 33.9122 10.3536 33.9122C9.53926 33.9122 8.86629 33.2793 8.75978 32.4581L8.74509 32.2298L8.74366 5.75589L2.74846 12.0583C2.17874 12.6569 1.28527 12.7134 0.654505 12.2262L0.473742 12.0638C-0.0986195 11.4679 -0.152597 10.5334 0.313164 9.87364L0.468486 9.68458L9.21382 0.495189L9.30853 0.404349C9.33077 0.384448 9.35354 0.365171 9.37681 0.346543L9.21382 0.495189C9.29272 0.412279 9.37783 0.339774 9.46758 0.277673C9.49889 0.257268 9.53144 0.236438 9.56472 0.21681C9.59562 0.19733 9.62704 0.180237 9.65885 0.164302C9.69026 0.149762 9.72212 0.135091 9.7545 0.12149C9.79564 0.103089 9.83784 0.08751 9.88047 0.0738253C9.90641 0.0665394 9.93297 0.0587725 9.95981 0.0517108C10.003 0.0392975 10.0467 0.0298075 10.0906 0.0222286C10.117 0.018773 10.1429 0.0150047 10.169 0.0118887C10.2187 0.00475425 10.2696 0.00113963 10.3206 4.45727e-05C10.3318 0.00104693 10.3427 0.000933804 10.3536 0.000933804Z" fill="#200E32"/>
                </svg>
                <p className={style.card__title}>Анимация</p>
              </div>
              <p className={style.card__text}>Подключаем соответствущий названию вашей компании доменный адрес</p>
            </div>

          </div>


          <DecorativeSquare top="0" left="0" color="lightpurple"/>
          <DecorativeSquare top="40px" left="0" color="purple"/>
          <DecorativeSquare top="-40px" left="0" color="yellow"/>
          <DecorativeSquare top="0" left="-40px" color="yellow"/>
        </div>

        <svg className ={style.design__svg} width="890" height="678" viewBox="0 0 890 678" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M16.7279 271.858C9.22278 246.597 23.716 220.054 49.0246 212.711L708.903 21.2479C734.199 13.9083 760.637 28.5531 767.832 53.8906L868.422 408.108C875.776 434.006 860.159 460.833 834.007 467.225L170.108 629.503C145.504 635.517 120.51 621.169 113.296 596.89L16.7279 271.858Z" stroke="#E0D3EC" strokeWidth="5"/>
        </svg>

        <div className = {style.design__img}>
          <Image
            src="/img/design.png"
            alt="Уникальный дизайн"
            width={777}
            height={608}
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}

export default Design
