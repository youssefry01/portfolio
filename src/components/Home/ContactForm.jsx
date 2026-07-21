import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string }
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus({ type: 'success', message: 'Message sent — thanks for reaching out!' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      })
      .finally(() => setLoading(false));
  };

  const inputStyle =
    'block w-full px-4 py-2.5 mt-1.5 bg-(--color-surface) text-text placeholder-(--color-text-muted) border border-(--color-border) rounded-md focus:border-(--color-accent) focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-text">
          Full name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-text">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputStyle}
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-text">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="How can I help?"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className={`${inputStyle} resize-none`}
        />
      </div>

      <button 
        type="submit"
        disabled={loading}
        className="group/button relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md bg-black dark:bg-white backdrop-blur-lg px-6 py-2 text-base font-semibold text-white dark:text-black transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
              
      >
        <span className="text-sm">{loading ? 'Sending…' : 'Send message'}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-10 bg-white/20 dark:bg-gray-600/20" />
        </div>
      </button>

      <p aria-live="polite" className={`text-sm font-medium ${status ? '' : 'sr-only'} ${
        status?.type === 'error' ? 'text-red-500' : 'text-accent'
      }`}>
        {status?.message}
      </p>
    </form>
  );
};

export default ContactForm;
