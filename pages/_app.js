import '../styles/normalize.css';
import '../public/gilroy/stylesheet.css';
import '../public/sfpro/stylesheet.css';
import '../public/geometria/stylesheet.css';
import '../styles/globals.css';
import '../styles/animations.css';
import "swiper/swiper.min.css";

import {Provider} from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import store from "../store/store";
import Head from "next/head";
import NextNprogress from 'nextjs-progressbar';


function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>

      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NextNprogress
        color="#D4B57F"
        height="3"
      />

      <Component {...pageProps} />

    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp)
