import React from "react";
import "./Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Why Choose Us?</h2>
      <div className="features-cards">
        <div className="card"><h3>Interactive Lessons</h3><p>Engaging phonics lessons for kids.</p></div>
        <div className="card"><h3>Expert Teachers</h3><p>Learn from certified educators.</p></div>
        <div className="card"><h3>Flexible Learning</h3><p>Learn anytime, anywhere.</p></div>
      </div>
    </section>
  );
}

export default Features;
