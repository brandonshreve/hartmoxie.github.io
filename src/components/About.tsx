import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Hello! I'm [Your Wife's Name], a passionate professional with expertise in [Her Field]. 
                  With [X] years of experience, I've dedicated my career to [Her Main Focus/Interest].
                </p>
                <p className="text-gray-600 leading-relaxed">
                  My approach combines creativity with strategic thinking, allowing me to [Key Achievement or Skill].
                  I'm particularly interested in [Specific Areas of Interest/Expertise].
                </p>
              </div>
              <div className="order-first md:order-last">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src="/profile-placeholder.jpg"
                    alt="Profile"
                    className="rounded-lg object-cover shadow-lg"
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">[X]+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">[X]+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">[X]+</div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">[X]+</div>
                <div className="text-gray-600">Awards</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 