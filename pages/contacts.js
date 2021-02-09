import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";

const Contacts = () => {
  return (
    <>
      <Head>
        <title>Создание и разработка сайта под ключ, продвижение сайта</title>
        <meta name="description" content="У нас вы можете заказать сайт под ключ, а также его сопровождение. Предоставляем услуги настройки контекстной рекламы и SEO продвижения." />
      </Head>

      <DefaultLayout
         h1="Страница контактов"
         h2="Страница контактов"
         navWithout={4}
         pageId={4}
      >
      </DefaultLayout>
    </>
  )
}

export default Contacts
