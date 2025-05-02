import React from 'react';

interface DesignProject {
  title: string;
  type: string;
  link: string;
  thumbnail: string;
}

const designProjects: DesignProject[] = [
  {
    title: "StrongForm",
    type: "Logo and App Design",
    link: "#",
    thumbnail: "/images/strongform-thumbnail.jpg"
  },
  {
    title: "Politicus",
    type: "Webpage Design",
    link: "#",
    thumbnail: "/images/politicus-thumbnail.jpg"
  },
  {
    title: "Tacos Las Delicias",
    type: "Web Design",
    link: "#",
    thumbnail: "/images/tacos-thumbnail.jpg"
  },
  {
    title: "Cash Crop",
    type: "App Design",
    link: "#",
    thumbnail: "/images/cashcrop-thumbnail.jpg"
  },
  {
    title: "404 Error Pages",
    type: "Web Design",
    link: "#",
    thumbnail: "/images/404-thumbnail.jpg"
  }
];

const GraphicDesign: React.FC = () => {
  return (
    <section id="graphic-design" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">Graphic Design</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProjects.map((project, index) => (
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

export default GraphicDesign; 