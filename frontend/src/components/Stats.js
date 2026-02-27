import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <h2>Our Achievements</h2>
      <div className="stats-cards">
        <div className="card"><h3>500+</h3><p>Videos</p></div>
        <div className="card"><h3>1000+</h3><p>Students</p></div>
        <div className="card"><h3>50+</h3><p>Courses</p></div>
      </div>
    </section>
  );
}

export default Stats;
