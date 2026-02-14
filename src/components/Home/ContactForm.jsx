import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: ""
        });
      })
      .catch(() => {
        setStatus("Something went wrong. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="mt-8 lg:w-1/2 lg:mx-6">
        <div
            className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-gray-300/50">
            <h1 className="text-lg font-medium text-black">Contact me</h1>

            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-600">Full Name</label>
                    <input name="name" type="text" placeholder="Your Name" value={formData.name} onChange={handleChange} required
                    className="block w-full px-5 py-3 mt-2 text-black  placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-gray-400 focus:ring--black focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Email address</label>
                    <input name="email" type="email" placeholder="example@example.com" value={formData.email} onChange={handleChange} required
                    className="block w-full px-5 py-3 mt-2 text-black  placeholder-gray-400 bg-white border border-gray-200 rounded-md focus:border-gray-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40" />
                </div>

                <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-600">Message</label>
                    <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required 
                    className="resize-none block w-full h-32 px-5 py-3 mt-2 text-black  placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 focus:border-gray-400 focus:ring-black focus:outline-none focus:ring focus:ring-opacity-40"></textarea>
                </div>

                <button type="submit" disabled={loading} className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-md hover:bg-neutral-800 focus:outline-none focus:ring focus:ring-gray-400 focus:ring-opacity-50 cursor-pointer">
                    {loading ? "Sending..." : "Submit"}
                </button>
            </form>
            {status && <p className="mt-4 text-md font-semibold text-center text-green-600">{status}</p>}
        </div>
    </div>
  )
}

export default ContactForm;