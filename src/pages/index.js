import * as React from "react";
import Banner from "../components/Home/Banner";
import Layout from "../components/Layout/Layout";
import SEO from "../components/Seo/Seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Banner />
      {/* <SectionThree />
      <SectionFour />
      <Contact /> */}
    </Layout>
  );
};

export default IndexPage;
