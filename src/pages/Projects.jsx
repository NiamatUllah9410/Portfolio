import React from 'react';
import ProjectCard from '../ui/ProjectCard';
import Dental from '../assets/images/dental.jpg';
import Mobe from '../assets/images/moby.jpg';
import Ezitech from "../assets/images/Ezitech.jpg"


const projects = [
  {
    img: Mobe,
    title: 'Moby',
    discr: 'Developed interactive web components for the Moby website using React, JavaScript, and Tailwind CSS, ensuring a responsive and polished online presence.',
  },
  {
    img: Dental,
    title: "OraDental",
    discr: 'Developed a responsive dental clinic landing page using JavaScript, ReactJS, and Tailwind CSS, featuring a custom slider, testimonials carousel, and detailed doctor profiles.',
  },
  {
    img: Ezitech,
    title: 'Ezitech',
    discr: 'This project is a responsive, interactive website for Ezitech, featuring dynamic navigation, search functionality, and a visually appealing layout with Tailwind CSS and Font Awesome integration.',
  },
  
];

function Projects() {
  return (
    <div className="flex flex-col justify-start text-start lg:pl-[250px] md:pl-[60px] pl-[60px] mb-10">
      <div className="bg-[#008073] pl-4 md:pl-8 lg:pl-12 py-2 pr-2">
        <h1 className="text-[28px] sm:text-[32px] md:text-[40px] lg:text-[54px] font-thin text-white">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            img={project.img}
            title={project.title}
            discr={project.discr}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
