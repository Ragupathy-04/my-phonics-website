import React from "react";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Media from "./components/Media";
import Stats from "./components/Stats";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Media />   {/* New Media Section */}
      <Stats />   {/* New Stats Section */}
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
