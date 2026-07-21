import React from 'react';
import { MdMail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';
import ContactForm from './ContactForm';
import SectionGlow from '../General/SectionGlow';

const Contact = () => {
  return (
    <section id="contact" className="relative overflow-hidden w-full bg-bg-subtle px-6 py-20 lg:py-28">
      <SectionGlow />
      <div className="max-w-4xl z-10 mx-auto">
        <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase mb-3">
          Contact
        </p>
        <h2 className="text-3xl font-bold text-text mb-4">Let's talk</h2>
        <p className="text-text-muted max-w-xl mb-10">
          Have a role or project in mind? I'm always open to discussing new opportunities.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="flex flex-col gap-4">
            <a
              href="mailto:yousseframadan@proton.me"
              className="flex items-center gap-3 text-text font-medium hover:text-accent transition-colors"
            >
              <MdMail className="size-5 text-text-muted" />
              yousseframadan@proton.me
            </a>
            {/* <a
              href="tel:+201234567890"
              className="flex items-center gap-3 text-text font-medium hover:text-accent transition-colors"
            >
              <FaPhone className="size-4 text-text-muted" />
              +20 123 456 7890
            </a> */}
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
