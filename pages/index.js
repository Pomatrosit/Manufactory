import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Header from "../components/header/header";
import Advantages from "../components/advantages/advantages";
import Services from "../components/services/services";
import Portfolio from "../components/portfolio/portfolio";
import Reviews from "../components/reviews/reviews";
import Question from "../components/question/question";

const Home = () => {
  return (
    <>
      <Head>
        <title>Мануфактура</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
         <Header />
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
