import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Header from "../components/header/header";
import Technologies from "../components/technologies/technologies";
import Advantages from "../components/advantages/advantages";
import Services from "../components/services/services";
import Portfolio from "../components/portfolio/portfolio";
import Reviews from "../components/reviews/reviews";
import MobileReviews from "../components/reviews/mobileReviews";
import Question from "../components/question/question";
import {useState, useEffect} from "react";

const Home = () => {

  const [isMobile, setMobile] = useState(false);

  function onResize(){
    if (document.documentElement.clientWidth > 768) setMobile(false);
    else setMobile(true);
  }

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [])

  return (
    <>
      <Head>
        <title>Создание и разработка сайта под ключ, продвижение сайта</title>
        <meta name="description" content="У нас вы можете заказать сайт под ключ, а также его сопровождение. Предоставляем услуги настройки контекстной рекламы и SEO продвижения." />
      </Head>

      <DefaultLayout
         h1="Студия веб-разработки и дизайна."
         h2="Полный цикл создания и сопровождения сайтов любой сложности"
         navWithout={1}
         pageId={1}
      >
         <Technologies />
         <Advantages />
         <Services />
         <Portfolio />
         {
           isMobile
             ? <MobileReviews />
             : <Reviews />
         }
         <Question />
      </DefaultLayout>
    </>
  )
}

export default Home
