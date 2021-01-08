import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Header from "../components/header/header";
import Advantages from "../components/advantages/advantages";

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
      </DefaultLayout>
    </>
  )
}

export default Home