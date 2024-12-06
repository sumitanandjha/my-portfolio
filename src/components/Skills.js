import React from 'react';

const Skills = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'MongoDB',
    'Express.js',
    'Tailwind CSS',
    'Git',
    'Python',
    'SQL',
  ];

  return (
    <section id="skills" className="bg-gray-100 py-16 px-6">
      <div className="container mx-auto">
        {/* Main Content Section */}
        <h2 className="text-4xl font-bold text-indigo-600 mb-6">Technical Skills</h2>
        <p className="text-lg text-gray-700 mb-6">
          Here are some of the technologies I have worked with:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg">
              <p className="text-center text-lg font-medium text-indigo-600">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
