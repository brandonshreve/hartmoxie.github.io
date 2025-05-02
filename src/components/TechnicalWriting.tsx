import React from 'react';

interface WritingSample {
  title: string;
  link: string;
  thumbnail: string;
}

const writingSamples: WritingSample[] = [
  {
    title: "Photo Usage Guide",
    link: "#",
    thumbnail: "/images/photo-usage-guide-thumbnail.jpg"
  },
  {
    title: "Reset Your Smart Sticky Note Printer",
    link: "#",
    thumbnail: "/images/printer-reset-thumbnail.jpg"
  }
];

const TechnicalWriting: React.FC = () => {
  return (
    <section id="technical-writing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Technical Writing</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I simplify complex concepts in ways that are clear, concise, and well-organized. The communications I create are audience-focused and accessible, always considering the needs and background of all readers. My writing process is agile and iterative. I start with a prewriting stage, where I define the audience, the goals, create an outline, and conduct research. Next, is the iterative writing process. Followed by publishing, analysis, and maintenance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {writingSamples.map((sample, index) => (
            <a
              key={index}
              href={sample.link}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={sample.thumbnail}
                  alt={sample.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Sample</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{sample.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalWriting; 