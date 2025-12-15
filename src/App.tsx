import React from "react";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { WhyCompliance } from "./components/WhyCompliance";
import { Approach } from "./components/Approach";
import { Benefits } from "./components/Benefits";
import { Sectors } from "./components/Sectors";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <WhyCompliance />
      <Services />
      <Approach />
      <Benefits />
      <Sectors />
      <About />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}