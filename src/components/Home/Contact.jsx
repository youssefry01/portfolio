import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {

  return (
    <section id='contact' className='flex flex-col w-full bg-black px-10 lg:px-auto'>
      <div className='flex flex-col w-full h-full mt-48 lg:px-96'>
        <p className='text-lg font-semibold text-[#CCCCCC] mb-4'>Contact</p>
        <p className='font-semibold text-4xl text-white'>Contact Me</p>
      </div>

      <div className='flex flex-row w-full mt-10 justify-center lg:px-96 mb-64'>
        <div className='flex flex-col bg-white size-full'>
              <section className="bg-black">
                <div className="container mx-auto">
                    <div className="lg:flex  justify-center lg:items-center lg:-mx-6">
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
      </div>
    </section>
  )
}

export default Contact;