import { useEffect, useRef } from 'react';
import { useWindowSize } from 'react-use';
import '../../styles/globals.css'
import Layout from '../components/Layout'

function use100vh() {
  const ref = useRef();
  const { height } = useWindowSize();

  useEffect(
    () => {
      if (!ref.current) {
        return;
      }
      ref.current.style.height = height + 'px';
    },
    [height],
  );

  return ref;
}

function MyApp({ Component, pageProps }) {
  const ref = use100vh();
  return (
    <Layout ref={ref}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
