import React, { useState } from 'react';
import userData from '../constants/data';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectsCard';

export default function Projects() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Projetos
        </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          {userData.projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              link={project.link}
              imgUrl={project.imgUrl}
              number={`${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
