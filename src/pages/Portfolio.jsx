import React from "react";
import Layout from "../components/layout/Layout";
import PortfolioHero from "../components/sections/PortfolioHero/PortfolioHero";
import PortfolioProjects from "../components/sections/PortfolioProjects/PortfolioProjects";
import PortfolioPlayground from "../components/sections/PortfolioPlayground/PortfolioPlayground";

const Portfolio = () => {
  return (
    <Layout>
      <PortfolioHero />
      <PortfolioProjects />
      <PortfolioPlayground />
    </Layout>
  );
};

export default Portfolio;
