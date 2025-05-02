import React from 'react';

interface Project {
  title: string;
  type: string;
  link: string;
  thumbnail: string;
}

const projects: Project[] = [
  {
    title: "The Perfect Margarita",
    type: "Self-directed eLearning",
    link: "#",
    thumbnail: "/images/margarita-thumbnail.jpg"
  },
  {
    title: "REV 101 Training",
    type: "Self-directed eLearning",
    link: "#",
    thumbnail: "/images/rev101-thumbnail.jpeg"
  },
  {
    title: "Ambassador Training",
    type: "Instructor led training",
    link: "#",
    thumbnail: "/images/ambassador-thumbnail.jpeg"
  },
  {
    title: "STAR Method Training",
    type: "Self-directed eLearning",
    link: "#",
    thumbnail: "/images/star-thumbnail.png"
  }
];

const LearningDesign: React.FC = () => {
  return (
    <section id="learning-design" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Learning Experience Design</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            I develop user-centered learning solutions that enable teams to deliver best in-class learning experiences that drive performance, and have a lasting impact. To create effective and engaging learning experiences I work agile and use the PADDIE+M model, a version of the traditional ADDIE model that includes Planning and Maintenance. Using PADDIE+M allows me to work in a process that is collaborative and iterative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="group block bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold">View Project</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.type}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningDesign; 