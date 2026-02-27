import React from "react";

function Media() {
  return (
    <section className="bg-blue-100 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Media Resources</h2>
        <p className="text-gray-700 mb-8">
          Videos, images, and interactive content to make learning fun!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Video Lessons</h3>
            <p>Engaging phonics videos for children.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Images</h3>
            <p>Colorful images to reinforce learning.</p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:scale-105 transition">
            <h3 className="font-semibold mb-2">Games</h3>
            <p>Interactive games for practice and fun.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
