import React from "react";
import Layout from "../components/layout/Layout";
import Hero from "../components/sections/Hero/Hero";
import FeaturedProjects from "../components/sections/FeaturedProjects/FeaturedProjects";
import Skills from "../components/sections/Skills/Skills";
import CallToAction from "../components/sections/CallToAction/CallToAction";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Skills />
      <FeaturedProjects />
      <CallToAction />
    </Layout>
  );
}
