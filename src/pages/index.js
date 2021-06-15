import Layout from '../components/layout';
import Seo from '../components/seo';

export default function Home() {
  return (
    <>
      <Layout>
        <Seo title='Basic landing page in next.js' />
        <p>index children</p>
      </Layout>
    </>
  );
}
