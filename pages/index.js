import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import Header from "../components/header/header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Мануфактура</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DefaultLayout>
         <Header />
      </DefaultLayout>
    </>
  )
}
