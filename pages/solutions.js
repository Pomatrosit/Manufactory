import Head from 'next/head';
import DefaultLayout from "../components/defaultLayout/defaultLayout";
import SolutionServices from "../components/solutionServices/solutionServices";

const Solutions = () => {
  return (
    <>
      <Head>
        <title>Создание и разработка сайта под ключ, продвижение сайта</title>
        <meta name="description" content="У нас вы можете заказать сайт под ключ, а также его сопровождение. Предоставляем услуги настройки контекстной рекламы и SEO продвижения." />
      </Head>

      <DefaultLayout
         h1="Создание сайта для вашего бизнеса"
         h2="Ознакомьтесь с подробностями нашего коммерческого предложения "
         navWithout={3}
         pageId={3}
      >
        <SolutionServices />
      </DefaultLayout>
    </>
  )
}

export default Solutions
