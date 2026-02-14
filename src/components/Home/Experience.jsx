import React from 'react';
import Divider from '../General/Divider';

const Experience = () => {
  const experiences = [
    {
      date: 'July, 2025',
      company: 'AMIT Learning',
      title: 'Software Engineering Trainee',
      description: `Built and deployed a predictive web application that integrated data preprocessing pipelines, core model logic, and a user-friendly interface, applied feature engineering and rigorous model evaluation techniques on real-world datasets to optimize performance, and delivered the project end-to-end as a complete capstone as part of an industry-focused training program.`
    },
    {
      date: 'July, 2024',
      company: 'Modern Academy',
      title: 'Python Programming Intern',
      description: `Learned and applied core Python concepts including data types, functions, loops, and object-oriented programming (OOP), and gained hands-on experience using pandas, NumPy, and matplotlib to perform data cleaning, analysis, and visualization tasks.`
    },
    {
      date: 'Sep, 2023',
      company: 'Modern Academy',
      title: 'Embedded Systems Intern',
      description: `Designed and simulated electronic circuits using Arduino and EAGLE, built basic hardware systems for practical applications, and explored browser-based monitoring interfaces to visualize and interact with system data.`
    }
  ];

  return (
    <section id='experience' className='flex flex-col w-full bg-[#171717] px-10 lg:px-auto'>
      <div className='flex flex-col w-full h-full mt-24 lg:mt-48 lg:px-96'>
          <p className='text-lg font-semibold text-[#CCCCCC] mb-4'>Experience</p>
          <p className='font-semibold text-4xl text-white'>My Experience</p>
      </div>

      <div className='flex flex-col w-full mt-10 text-white lg:px-96 mb-24 lg:mb-64'>
        {experiences.map((exp, index) => (
          <div key={index} className={`flex flex-col ${index === 0 ? '' : 'mt-6'}`}>
            <div className='flex flex-row'>
              <p className='text-sm lg:text-xl font-semibold'>-{exp.date}</p>
              <p className='text-sm lg:text-xl font-semibold ml-auto'>— {exp.company}</p>
            </div>

            <div className='flex flex-col my-6'>
              <p className='lg:text-3xl font-bold'>{exp.title}</p>
              <p className='text-sm lg:text-lg mt-2 '>{exp.description}</p>
            </div>

            {index !== experiences.length - 1 && <Divider />}
          </div>
        ))}

      </div>

    </section>
  )
}

export default Experience;