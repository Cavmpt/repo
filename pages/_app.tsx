import type { AppProps } from "next/app";
import { NextIntlProvider } from "next-intl";
import Modal from "../Components/Modal/Modal";
// import Layout from "../Components/Layout/Layout";
import { Provider } from "react-redux";
import Layout from "../Components/Layout/Layout";
import { lazy, Suspense } from "react";

import store from "../Store/redux/store";
/*------------------------------------------------------*/
/* FONTS AND COLORS SCSS
/*------------------------------------------------------*/
import "../styles/assets/colors.scss";
import "../styles/assets/fonts.scss";

/*------------------------------------------------------*/
/* GLOBALS AND RESETS SCSS
/*------------------------------------------------------*/
import "../styles/components.scss";
import "../styles/pages.scss";
import "../styles/resets.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <NextIntlProvider messages={pageProps.messages}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NextIntlProvider>
      </Provider>
    </>
  );
}

export default MyApp;
