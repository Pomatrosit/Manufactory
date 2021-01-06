import '../styles/normalize.css';
import '../public/gilroy/stylesheet.css';
import '../public/sfpro/stylesheet.css';
import '../public/geometria/stylesheet.css';
import '../styles/globals.css';
import '../styles/animations.css';

import {Provider} from "react-redux";
import {createWrapper} from "next-redux-wrapper";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);


export default wrapper.withRedux(MyApp)
