﻿import React from "react";
import Layout from "../components/layout/Layout";
import ContactHero from "../components/sections/ContactHero/ContactHero";
import ContactInfo from "../components/sections/ContactInfo/ContactInfo";

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
    </Layout>
  );
};

export default Contact;
