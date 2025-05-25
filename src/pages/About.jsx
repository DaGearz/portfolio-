import React from "react";
import Layout from "../components/layout/Layout";
import AboutHero from "../components/sections/AboutHero/AboutHero";
import AboutStory from "../components/sections/AboutStory/AboutStory";
import AboutTimeline from "../components/sections/AboutTimeline/AboutTimeline";

export default function About() {
  return (
    <Layout>
      <AboutHero />
      <AboutStory />
      <AboutTimeline />
    </Layout>
  );
}
