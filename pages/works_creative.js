import { CreativePageBanner } from "../src/components/PageBanner";
import Layout from "../src/layout/Layout";

import dynamic from "next/dynamic";
const ItemIsotope = dynamic(() => import("../src/components/ItemIsotope"), {
  ssr: false,
});

const WorksCreative = () => {
  const typingData = [
    "I analyze gravitational waveform data",
    "I develop full-stack applications for the web",
    "I create machine learning models for industrial use-cases",
    "I love <strong>solving problems</strong>",
  ];

  return (
    <Layout>
      <CreativePageBanner pageName={"works"} extraClass="typed-subtitle" />
      <div className="section works" id="section-portfolio">
        <div className="content">
          <ItemIsotope />
          <div className="clear" />
        </div>
      </div>
    </Layout>
  );
};
export default WorksCreative;
