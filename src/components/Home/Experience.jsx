import React from 'react';
import Divider from '../General/Divider';

const Experience = () => {

  return (
    <section id='experience' className='flex flex-col w-full bg-[#171717] px-10 lg:px-auto'>
      <div className='flex flex-col w-full h-full mt-48 lg:px-96'>
          <p className='text-lg font-semibold text-[#CCCCCC] mb-4'>Experience</p>
          <p className='font-semibold text-4xl text-white'>My Experience</p>
      </div>

      <div className='flex flex-col w-full mt-10 text-white lg:px-96 mb-64'>
        <div className='flex flex-col'>

          <div className='flex flex-row'>
            <p className='text-xl font-semibold'>-July, 2025</p>
            <p className='text-xl font-semibold ml-auto'>—  AMIT Learning</p>
          </div>

          <div className='flex flex-col my-6'>
            <p className='text-3xl font-bold'>Software Engineering Trainee</p>
            <p className='text-lg mt-2'>Built and deployed a predictive web application that integrated data preprocessing pipelines, core model logic, and a user-friendly interface, applied feature engineering and rigorous model evaluation techniques on real-world datasets to optimize performance, and delivered the project end-to-end as a complete capstone as part of an industry-focused training program.</p>
          </div>

        </div>

        <Divider />

        <div className='flex flex-col mt-6'>

          <div className='flex flex-row'>
            <p className='text-xl font-semibold'>-July, 2024</p>
            <p className='text-xl font-semibold ml-auto'>—  Modern Academy</p>
          </div>

          <div className='flex flex-col my-6'>
            <p className='text-3xl font-bold'>Python Programming Intern </p>
            <p className='text-lg mt-2'>Learned and applied core Python concepts including data types, functions, loops, and object-oriented programming (OOP), and gained hands-on experience using pandas, NumPy, and matplotlib to perform data cleaning, analysis, and visualization tasks.</p>
          </div>

        </div>

        <Divider />

        <div className='flex flex-col mt-6'>

          <div className='flex flex-row'>
            <p className='text-xl font-semibold'>-Sep, 2023</p>
            <p className='text-xl font-semibold ml-auto'>—  Modern Academy</p>
          </div>

          <div className='flex flex-col my-6'>
            <p className='text-3xl font-bold'>Embedded Systems Intern</p>
            <p className='text-lg mt-2'>Designed and simulated electronic circuits using Arduino and EAGLE, built basic hardware systems for practical applications, and explored browser-based monitoring interfaces to visualize and interact with system data.</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Experience;