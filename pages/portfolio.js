import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Создание и разработка сайта под ключ, продвижение сайта</title>
        <meta name="description" content="У нас вы можете заказать сайт под ключ, а также его сопровождение. Предоставляем услуги настройки контекстной рекламы и SEO продвижения." />
      </Head>

      <DefaultLayout
         h1="Страница Портфолио"
         h2="Страница Портфолио"
         navWithout={2}
         pageId={2}
      >
      </DefaultLayout>
    </>
  )
}

export default Portfolio
