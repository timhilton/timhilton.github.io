import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import Layout from '../components/Layout'
import * as ga from '../utils/gtm';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Galano';
  src: local("GalanoGrotesque-Extra-Light"), local("GalanoGrotesque-Extra-Light"), url("/fonts/GalanoGrotesque-Extra-Light.otf") format("opentype");
  font-weight: 100;
  font-style: normal; 
}

@font-face {
  font-family: 'Galano';
  src: local("GalanoGrotesque Italic"), local("GalanoGrotesque-Italic"), url("/fonts/GalanoGrotesque-Italic.otf") format("opentype");
  font-weight: normal;
  font-style: italic; 
}

@font-face {
  font-family: 'SF Pro Text';
  src: local("SF-Pro-Text-LightItalic"), local("SF-Pro-Text-LightItalic"), url("/fonts/SF-Pro-Text-LightItalic.otf") format("opentype");
  font-weight: 300;
  font-style: italic; 
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Galano';
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
`


function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script 
      id="google-analytics-script"
      strategy="afterInteractive"      
      >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <GlobalStyle/>
      
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp;
