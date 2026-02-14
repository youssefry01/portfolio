import React, { useState } from 'react';
import ustore from '../../assets/ustore.png';
import socialnest from '../../assets/socialnest.png';
import ProjectLightbox from './ProjectLightbox';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Ustore — MERN Stack E-Commerce Platform",
      description: `Ustore is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), 
      designed for selling digital products such as gift cards, game codes, and other virtual items. 
      The platform delivers a seamless and secure e-commerce experience for both users and administrators.\n
      The application features a responsive and dynamic user interface built with React.js and Tailwind CSS, 
      enabling users to browse, purchase, and manage digital assets with ease. 
      Backend services are powered by Node.js and Express.js, with secure RESTful APIs and user authentication using JSON Web Tokens (JWT).\n
      A key highlight of Ustore is its integration with MongoDB for real-time product and user data management. 
      The admin panel provides capabilities such as product uploads, order tracking, and user management, 
      streamlining digital product operations for the store owner.\n
      This project showcases a scalable architecture, efficient frontend-backend communication, and practical implementation of core web development principles — 
      offering a robust blueprint for real-world e-commerce solutions using modern JavaScript technologies.`,
      logo: ustore,
      github: "https://github.com/youssefry01/u-store",
      live: "https://u-store-jet.vercel.app"
    },
    {
      id: 2,
      title: "SocialNest — Django Social Media Platform",
      description: `SocialNest is a full-stack social media platform built with Django and PostgreSQL, 
      designed to provide users with a seamless experience for sharing content, connecting with friends, and managing their profiles. 
      The platform features a modern UI built with Tailwind CSS and responsive design principles.\n
      The backend is powered by Django, offering robust user authentication, content management, and database operations using PostgreSQL. 
      SocialNest supports features such as user profiles, friend requests, posts, comments, and real-time notifications.\n
      This project demonstrates the power of Django in building scalable web applications with a clean and maintainable codebase. It showcases best practices in backend development, database design, and frontend integration — 
      providing a solid foundation for building modern social media platforms.`,
      logo: socialnest,
      github: "https://github.com/youssefry01/socialnest",
      live: "https://socialnest-iviz.onrender.com"
    }
  ];

  return (
    <section id='projects' className='flex flex-col w-full bg-black px-10 lg:px-auto'>
      <div className='flex flex-col w-full h-full mt-24 lg:mt-48 lg:px-96'>
        <p className='text-lg font-semibold text-[#CCCCCC] mb-4'>Projects</p>
        <p className='font-semibold text-4xl text-white'>My Work</p>
      </div>

      <div className='flex flex-row flex-wrap w-full mt-10 justify-center lg:px-96 mb-24 lg:mb-64 select-none'>

        {projects.map(project => (
          <div className='flex flex-col w-24 lg:w-42 m-6 lg:m-10 cursor-pointer hover:opacity-70' key={project.id} onClick={() => setSelectedProject(project)}>
            <img src={project.logo} alt={project.title} draggable="false"/>
            <p className='text-white text-xsm lg:text-md font-semibold mt-4 mb-2'>{project.title}</p>
          </div>
        ))}

        {selectedProject && (
          <ProjectLightbox selectedProject={selectedProject} setSelectedProject={setSelectedProject} />
        )}

      </div>

    </section>
  )
}

export default Projects;