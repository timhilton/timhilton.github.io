import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import ContentfulApi from "../utils/ContentfulApi.js";

export async function getStaticProps() {
  const homeContent = await ContentfulApi.getHomeContent();

  return {
    props: {
      homeContent: homeContent,
    },
  };
}

export default function App({ homeContent }) {
  return (
    <>
      <Head>
        <title>Tim Hilton - Web Development & Creative Services</title>
        <meta name="description" content="Tim Hilton - Web Development & Creative Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home copy={homeContent.elevatorPitch}/>
    </>
  );
}
