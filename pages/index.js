import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Header from "../components/header/header";
import Technologies from "../components/technologies/technologies";
import Advantages from "../components/advantages/advantages";
import Services from "../components/services/services";
import Portfolio from "../components/portfolio/portfolio";
import Reviews from "../components/reviews/reviews";
import Question from "../components/question/question";

const Home = () => {
  return (
    <>
      <Head>
        <title>Создание и разработка сайта под ключ, продвижение сайта</title>
        <meta name="description" content="У нас вы можете заказать сайт под ключ, а также его сопровождение. Предоставляем услуги настройки контекстной рекламы и SEO продвижения." />
      </Head>

      <DefaultLayout>
         <Header />
         <Technologies />
         <Advantages />
         <Services />
         <Portfolio />
         <Reviews />
         <Question />
      </DefaultLayout>
    </>
  )
}

export default Home
