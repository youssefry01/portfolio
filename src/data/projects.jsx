import printova from "../assets/projects/printova.png";
import printovaDark from "../assets/projects/printovaDark.png";
import ustore from "../assets/projects/ustore.png";
import socialnest from "../assets/projects/socialnest.png";

export const projects = [
  {
    id: 1,
    title: "Printova",
    tagline: "Full-Stack E-Commerce & Maintenance Booking Platform",
    summary:
      "A unified platform for printer spare-parts sales and maintenance scheduling, with role-based dashboards for Admin, Manager, Technician, Delivery, and Customer roles.",
    description: 
      `Printova is a full-stack web platform designed for managing printer spare parts sales and maintenance services in a unified system.
      The platform combines an e-commerce storefront with a maintenance booking workflow, allowing customers to purchase parts, track orders, and schedule maintenance appointments.

      The frontend was built using Next.js 16, TypeScript, and Tailwind CSS, delivering a responsive user experience with role-based dashboards and dark/light mode support. The backend is powered by Java Spring Boot with Spring Security and JWT authentication, providing secure RESTful APIs and strict role-based access control.

      A key highlight of Printova is its multi-role management architecture, supporting Admin, Manager, Technician, Delivery, and Customer roles — each with dedicated permissions and workflows. The system also includes automated technician and delivery assignment, inventory management, order tracking, and appointment scheduling.

      Printova demonstrates scalable full-stack architecture, layered backend design, secure authentication, database normalization, and real-world business workflow implementation using modern web technologies.`,
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "PostgreSQL",
    ],
    lightImage: printova,
    darkImage: printovaDark,
    github: "https://github.com/youssefry01/printova",
    live: "https://printova.vercel.app",
  },
  {
    id: 2,
    title: "Ustore",
    tagline: "MERN Stack E-Commerce Platform",
    summary:
      "A digital goods storefront for gift cards, game codes, and virtual items, with a full admin panel for product and order management.",
    description: 
      `Ustore is a full-stack web application developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), designed for selling digital products such as gift cards, game codes, and other virtual items. The platform delivers a seamless and secure e-commerce experience for both users and administrators.
      The application features a responsive and dynamic user interface built with React.js and Tailwind CSS, enabling users to browse, purchase, and manage digital assets with ease. Backend services are powered by Node.js and Express.js, with secure RESTful APIs and user authentication using JSON Web Tokens (JWT).
      A key highlight of Ustore is its integration with MongoDB for real-time product and user data management. The admin panel provides capabilities such as product uploads, order tracking, and user management, streamlining digital product operations for the store owner.
      This project showcases a scalable architecture, efficient frontend-backend communication, and practical implementation of core web development principles — offering a robust blueprint for real-world e-commerce solutions using modern JavaScript technologies.`,
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    lightImage: ustore,
    darkImage: ustore,
    github: "https://github.com/youssefry01/u-store",
    live: "https://u-store-jet.vercel.app",
  },
  {
    id: 3,
    title: "SocialNest",
    tagline: "Django Social Media Platform",
    summary:
      "A social platform for sharing content and connecting with friends, with profiles, posts, comments, and real-time notifications.",
    description: 
      `SocialNest is a full-stack social media platform built with Django and PostgreSQL, designed to provide users with a seamless experience for sharing content, connecting with friends, and managing their profiles. The platform features a modern UI built with Tailwind CSS and responsive design principles.
      The backend is powered by Django, offering robust user authentication, content management, and database operations using PostgreSQL. SocialNest supports features such as user profiles, friend requests, posts, comments, and real-time notifications.
      This project demonstrates the power of Django in building scalable web applications with a clean and maintainable codebase. It showcases best practices in backend development, database design, and frontend integration — providing a solid foundation for building modern social media platforms.`,
    tech: ["Django", "PostgreSQL", "Tailwind CSS"],
    lightImage: socialnest,
    darkImage: socialnest,
    github: "https://github.com/youssefry01/socialnest",
    live: "https://socialnest-iviz.onrender.com",
  },
];
