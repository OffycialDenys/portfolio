import React from 'react';
import MotionWrapper from './MotionWrapper';
import { projectsData } from '../utils/data';

const Projects = () => {
  return (
    <MotionWrapper>
      <section id="projects" className="py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveUrl !== '#' ? project.liveUrl : "#"}
                        target={project.liveUrl !== '#' ? "_blank" : ""}
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          project.liveUrl !== '#' 
                            ? "bg-white text-gray-800 hover:bg-gray-100" 
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl !== '#' ? project.githubUrl : "#"}
                        target={project.githubUrl !== '#' ? "_blank" : ""}
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          project.githubUrl !== '#' 
                            ? "bg-blue-500 text-white hover:bg-blue-600" 
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.liveUrl !== '#' ? project.liveUrl : "#"}
                      target={project.liveUrl !== '#' ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className={`font-medium text-sm ${
                        project.liveUrl !== '#' 
                          ? "text-blue-500 hover:text-blue-600" 
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      View Live →
                    </a>
                    <a 
                      href={project.githubUrl !== '#' ? project.githubUrl : "#"}
                      target={project.githubUrl !== '#' ? "_blank" : ""}
                      rel="noopener noreferrer"
                      className={`text-sm ${
                        project.githubUrl !== '#' 
                          ? "text-gray-500 hover:text-gray-700" 
                          : "text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MotionWrapper>
  );
};

export default Projects;