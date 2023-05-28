/* eslint-disable react/no-unknown-property */
import { useRouter } from 'next/router';
import localFont from 'next/font/local';
import Script from 'next/script';
import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout';
import setupWebVitalsTracking from '../utils/reportWebVitals';
import { pageview } from '../utils/gtm';

const galano = localFont({
  src: [
    {
      path: '../fonts/GalanoGrotesque-Extra-Light.otf',
      style: 'normal',
      display: 'swap'
    },
    {
      path: '../fonts/GalanoGrotesque-Italic.otf',
      style: 'italic',
      display: 'swap'
    },
  ],
  families: ['Galano']
});

const sfProText = localFont({
  src: [
    {
      path: '../fonts/SF-Pro-Text-LightItalic.otf',
      display: 'swap'
    },
  ],
  families: ['SF Pro Text']
});

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-base);
    overflow-x: hidden;
  }

  h1 {
    font-size: 3.5em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    setupWebVitalsTracking();

    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange); 
    
    // initial page load
    pageview(router.asPath);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.asPath, router.events]);

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <style jsx global>{`
        :root {
          --font-base: ${galano.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
