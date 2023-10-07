
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Header from "@/components/header";
import Footer from "@/components/footer";
import TopNavigation from "@/components/top-navigation";
import Sticky from 'react-sticky-el';
import store from '../store/store';
import 'tailwindcss/tailwind.css';


// import nextI18NextConfig from '../next-i18next.config.js'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname,'router')
    // Update the document body's direction whenever the locale changes
    document.body.setAttribute('dir', router.locale === 'ar' ? 'rtl' : 'ltr');
  }, [router.locale]);


  return (
    <Provider store={store}>
      <TopNavigation />
      <div className='Sticky-main'>
      <Sticky>
      <Header />
      </Sticky>
      </div>
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )
}
// https://github.com/i18next/next-i18next#unserializable-configs
export default appWithTranslation(MyApp /*, nextI18NextConfig */)
