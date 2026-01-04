export const personalInfo = {
  name: "Mohammad Siddique Sakib",
  designation: "MERN Stack Developer",
  tagline:
    "Web Developer specializing in React, Tailwind CSS, Node.js, Firebase, and MongoDB.",
  email: "dmsakib1122@gmail.com",
  phone: "+8801851182639",
  whatsapp: "+8801851182639",
  location: "Chattogram, Bangladesh",
  resumeUrl: "/Resume_of_Mohammad_Siddique_Sakib.pdf",
  profileImage: "/Ts.png",

  social: {
    github: "https://github.com/siddiquesakib/",
    linkedin: "https://www.linkedin.com/in/mohammad-siddique-sakib/",
    Instagram: "https://www.instagram.com/amiboi_/",
    Linktree: "https://linktr.ee/siddiquesakib",
    Discord: "https://discord.com/users/1187705886991454259",
  },

  about: {
    introduction: `Aspiring MERN-stack web developer with strong skills in JavaScript, React, Next.js, Node.js, and MongoDB. Passionate about building responsive, user-friendly web apps and eager to learn, contribute, and grow in a collaborative environment. `,
  },
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Next.js", level: 50 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "Firebase", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 70 },
    { name: "Vite", level: 88 },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Plant-Care",
    shortDescription:
      "An elegant single-page web application designed for plant enthusiasts to explore plant care guides, shop for plants, and book expert consultations.",
    image: "/projects/Plant-Care1.png",
    gallery: [
      "/projects/Plant-Care2.png",
      "/projects/Plant-Care3.png",
      "/projects/Plant-Care4.png",
      "/projects/Plant-Care5.png",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Firebase ",
      "Node.js",
      "Tailwind CSS",
    ],
    category: "Frontend",
    featured: true,
    fullDescription: `A comprehensive e-commerce platform that allows users to browse products, add items to cart, and complete purchases securely. The admin dashboard enables product management, order tracking, and analytics visualization.`,
    mainTech: {
      frontend: "React with React Router and Context API for state management",
      styling: "Tailwind CSS for responsive design",
    },
    Features: [
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart with local storage persistence",
      "Secure payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product and order management",
      "Responsive design for all devices",
    ],

    liveLink: "https://plant-care-d3d4f.web.app/",
    githubLink: "https://github.com/siddiquesakib/Plant-Care",
  },
  {
    id: 2,
    name: "AdoptiPaws",
    shortDescription:
      "The AdoptiPaws is a full-stack web application designed for pet lovers and sellers to easily connect, buy, and sell pets online. Built using React, Tailwind CSS, Express, Firebase and MongoDB, this platform delivers a smooth, secure, and visually modern experience.",
    image: "/projects/adoptipaws1.png",
    technologies: [
      "React",
      "Firebase",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB ",
    ],
    category: "Frontend , backend",
    featured: true,

    fullDescription: `A modern task management application that helps teams organize, track, and collaborate on projects. Features include drag-and-drop task boards, real-time updates, and team collaboration tools.`,

    mainTech: {
      frontend: "React with Hooks and Context API",
      backend: "Firebase (Firestore, Authentication)",
      styling: "Tailwind CSS for responsive design",
      realtime: "Firebase Realtime Database for live updates",
    },

    features: [
      "Built a full-stack pet marketplace using React, Tailwind, Express, Firebase, and MongoDB.",
      "Added secure authentication so users can create, edit, and delete their own listings.",
      "Developed a fast, responsive UI with Framer Motion animations and dark mode.",
      "Integrated SweetAlert2 and Toastify for clean interactions and feedback.",
      "Designed scalable backend APIs with clean data flow and separation of concerns.",
    ],

    liveLink: "https://adoptipaws.web.app/",
    githubLink: "https://github.com/siddiquesakib/AdoptiPaws-Client",
    githubLink_Backend: "https://github.com/siddiquesakib/AdoptiPaws-Client",
  },
  {
    id: 3,
    name: "sakib Portfolio",
    shortDescription:
      "A modern, responsive, and interactive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This project showcases skills, experience, and projects in a visually appealing single-page application.",
    image: "/projects/sakib_portfolio1.png",
    gallery: [
      "/projects/sakib_portfolio2.png",
      "/projects/sakib_portfolio3.png",
      "/projects/sakib_portfolio4.png",
    ],
    technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    category: "Frontend",
    featured: false,

    fullDescription: `A comprehensive weather dashboard that provides current weather conditions, 7-day forecasts, interactive maps, and severe weather alerts. Features beautiful visualizations and location-based services.`,

    mainTech: {
      frontend: "React with custom hooks for API integration",
      api: "OpenWeather API for weather data",
      visualization: "Chart.js for weather charts and graphs",
      styling: "Tailwind CSS with custom animations",
      geolocation: "Browser Geolocation API",
    },

    features: [
      "Current weather conditions with animated icons",
      "7-day weather forecast with hourly breakdown",
      "Interactive weather maps",
      "Search by city or use current location",
      "Weather alerts and notifications",
      "Temperature unit conversion (Celsius/Fahrenheit)",
      "Beautiful UI with weather-themed backgrounds",
    ],

    challenges: [
      "Handling API rate limits and caching data efficiently",
      "Creating smooth animations for weather transitions",
      "Implementing accurate geolocation with fallback options",
      "Designing intuitive data visualizations",
    ],

    improvements: [
      "Add weather history and trends analysis",
      "Implement push notifications for weather alerts",
      "Add air quality index and pollen count",
      "Create custom weather widgets",
      "Add social sharing features for weather updates",
    ],

    liveLink: "https://siddique-sakib-portfolio.vercel.app/",
    githubLink: "https://github.com/siddiquesakib/Portfolio1",
  },
  {
    id: 4,
    name: "EventHive - Event Management System",
    shortDescription:
      "A robust MERN Stack platform connecting event organizers and attendees. Features Role-Based Access, Stripe Payments, and a unique Admin Approval Workflow for managers. Group Project - Built collaboratively with a team.",
    image: "/projects/event-hive1.png",
    gallery: [
      "/projects/event-hive2.png",
      "/projects/event-hive3.png",
      "/projects/event-hive4.png",
      "/projects/event-hive5.png",
      "/projects/event-hive6.png",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Firebase",
      "TanStack Query",
    ],
    category: "Full Stack",
    featured: true,
    isGroupProject: true,
    teamSize: 3,
    myRole: "Frontend Developer",
    myContributions: [
      "Developed responsive UI components using React and Tailwind CSS",
      "Implemented user authentication flow with Firebase",
      "Built dynamic dashboards with charts and analytics",
      "Integrated Stripe payment gateway on the frontend",
      "Created smooth animations using Framer Motion",
    ],

    fullDescription: `EventHive is a comprehensive full-stack solution designed to streamline the event management process, built collaboratively as a Group Project. Unlike standard platforms, it introduces a strict verification system where general users must request Admin approval to become Event Managers. It handles complex logic like atomic database transactions for seat management and a time-sensitive smart refund policy.`,

    mainTech: {
      frontend: "React (Vite) with TanStack Query and Framer Motion",
      backend: "Node.js & Express.js with robust API structure",
      database: "MongoDB with Mongoose Transactions (ACID Compliance)",
      authentication: "Firebase Auth & JWT for secure role-based access",
      payments: "Stripe Payment Gateway for secure transactions",
    },

    features: [
      "Three distinct roles: User, Event Manager, and Admin",
      "Unique 'Make Manager' approval workflow controlled by Admins",
      "Secure ticket booking with Stripe integration",
      "Smart Refund Logic (100% refund > 48hrs, 60% refund < 48hrs)",
      "Real-time seat availability tracking to prevent overselling",
      "Dynamic dashboards with revenue charts and analytics",
      "Advanced search and filtering by category, date, and price",
    ],

    challenges: [
      "Implementing Atomic Transactions to ensure payments and seat counts sync perfectly",
      "Designing the complex role-based route protection (RBAC) middleware",
      "Handling the date-logic for the automated smart refund system",
      "Managing state efficiently across different user dashboards",
    ],

    improvements: [
      "Add QR Code generation for ticket validation at entry",
      "Implement real-time notifications using Socket.io",
      "Integrate a review and rating system for events",
      "Add multi-language support (i18n)",
      "Develop a mobile application using React Native",
    ],

    liveLink: "https://event-hive-bd.vercel.app/",
    githubLink: "https://github.com/siddiquesakib/EventHive",
    githubLink_Backend: "https://github.com/Sahidulislam05/Event-Hive-API",
  },
];
