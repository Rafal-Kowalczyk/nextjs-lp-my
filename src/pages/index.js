import Head from 'next/head';

import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../sections/hero/hero';
import Feature from '../sections/feature/feature';

export default function Home() {
  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Layout>
        <Seo title='Basic landing page in next.js' />
        <Hero />
        <Feature />
      </Layout>
    </>
  );
}
