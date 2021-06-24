import Layout from '../components/layout';
import Seo from '../components/seo';
import Hero from '../sections/hero/hero';

export default function Home() {
  return (
    <>
      <Layout>
        <Seo title='Basic landing page in next.js' />
        <Hero />
      </Layout>
    </>
  );
}
