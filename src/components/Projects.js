import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'A modern web application built with React, Node.js, and MongoDB.',
      image: 'project1-image.jpg', // Replace with actual image URL
      link: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'E-commerce website using MERN stack with Stripe payment integration.',
      image: 'project2-image.jpg', // Replace with actual image URL
      link: 'https://github.com/yourusername/project2',
    },
    {
      title: 'Project 3',
      description: 'A machine learning model to predict trends based on historical data.',
      image: 'project3-image.jpg', // Replace with actual image URL
      link: 'https://github.com/yourusername/project3',
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 py-16 px-6">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-indigo-600 mb-6 animate-fade-down">Projects</h2>
        <p className="text-lg text-gray-700 leading-8 mb-6 animate-fade-up">
          Here are some of the projects I’ve worked on. Click on the project title to see more details or view the source code.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            <div className="relative mb-6">
              <img
                src={project.image} // Image URL for the project
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-500 hover:scale-105 transform transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
