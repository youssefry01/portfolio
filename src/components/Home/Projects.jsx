import React from 'react';
import ustore from '../../assets/ustore.png';
import socialnest from '../../assets/socialnest.png';

const Projects = () => {

  return (
    <section id='projects' className='flex flex-col w-full bg-black px-10 lg:px-auto'>
      <div className='flex flex-col w-full h-full mt-48 lg:px-96'>
        <p className='text-lg font-semibold text-[#CCCCCC] mb-4'>Projects</p>
        <p className='font-semibold text-4xl text-white'>My Work</p>
      </div>

      <div className='flex flex-row w-full mt-10 justify-center lg:px-96 mb-64'>

        <div className='flex flex-col w-32 lg:w-42 m-10 cursor-pointer hover:opacity-70'>
          <div className='flex flex-col'>
            <img src={ustore} alt='u-store'/>
          </div>
          <p className='text-white text-xsm lg:text-md font-bold mt-4 mb-2'>Ustore — MERN Stack E-Commerce Platform</p>
        </div>

        <div className='flex flex-col w-32 lg:w-42 m-10 cursor-pointer hover:opacity-70'>
          <div className='flex flex-col'>
            <img className="" src={socialnest} alt='u-store'/>
          </div>
          <p className='text-white text-xsm lg:text-md font-bold mt-4 mb-2'>SocialNest — Django Social Media Platform</p>
        </div>


      </div>

    </section>
  )
}

export default Projects;