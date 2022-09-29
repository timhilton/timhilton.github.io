import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/fonts/GalanoGrotesque-Extra-Light.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GalanoGrotesque-Italic.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/SF-Pro-Text-LightItalic.otf"
            as="font"
            type="font/otf"
            crossOrigin=""
          />
          <meta property="og:url" content="https://www.timhilton.net" />
          <meta property="og:title" content="Tim Hilton - Web Development and Creative Services" />
          <meta property="og:description" content="I create award winning web experiences primarily focusing on front end development, UX, accessibility, and design." />
          <meta property="og:image" content="https://s3.amazonaws.com/www.timhilton.net/og-image.jpg?versionId=VPFLQJfTqq8vzuOh_2aS9v4n8WBxemWN" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content="https://s3.amazonaws.com/www.timhilton.net/twittercard.jpg" />
          <meta name="twitter:name" content="Tim Hilton - Web Development and Creative Services" />
          <meta name="twitter:description" content="I create award winning web experiences primarily focusing on front end development, UX, accessibility, and design." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}