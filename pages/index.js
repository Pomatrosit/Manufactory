import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Header from "../components/header/header";
import dynamic from 'next/dynamic';

const Technologies = dynamic(() => import('../components/technologies/technologies'));
const Advantages = dynamic(() => import('../components/advantages/advantages'));
const Services = dynamic(() => import('../components/services/services'));
const Portfolio = dynamic(() => import('../components/portfolio/portfolio'));
const Reviews = dynamic(() => import('../components/reviews/reviews'));
const Question = dynamic(() => import('../components/question/question'));

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
