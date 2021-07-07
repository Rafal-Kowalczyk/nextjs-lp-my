import Head from "next/head";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Hero from "../sections/hero/hero";
import Feature from "../sections/feature/feature";
// import ServiceSection from '../sections/service-section/service-section';
import Pricing from "../sections/pricing/pricing";
import TeamSection from "../sections/team-section/team-section";

import dynamic from "next/dynamic";

const ServiceSection = dynamic(
  () => {
    return import("../sections/service-section/service-section");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Seo title="Basic landing page in next.js" />
        <Hero />
        <Feature />
        <ServiceSection />
        <Pricing />
        <TeamSection />
      </Layout>
    </>
  );
}
