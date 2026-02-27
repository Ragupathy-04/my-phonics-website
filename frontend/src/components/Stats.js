import React from "react";

function Stats() {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-around text-center">
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-700">500+</h3>
          <p className="text-gray-700">Videos</p>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-4xl font-bold text-green-700">1,200+</h3>
          <p className="text-gray-700">Images</p>
        </div>
        <div>
          <h3 className="text-4xl font-bold text-green-700">300+</h3>
          <p className="text-gray-700">Games</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
