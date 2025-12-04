// Portfolio Data - Update this file with your personal information

export const personalInfo = {
  name: "Your Name",
  designation: "Full Stack Developer",
  tagline: "Building elegant solutions to complex problems",
  email: "your.email@example.com",
  phone: "+1234567890",
  whatsapp: "+1234567890",
  location: "Your City, Country",
  resumeUrl: "/resume.pdf", // Place your resume in the public folder
  profileImage: "/Ts.png", // Place your image in the public folder

  social: {
    github: "https://github.com/siddiquesakib/",
    linkedin: "https://www.linkedin.com/in/mohammad-siddique-sakib/",
    twitter: "https://twitter.com/yourusername",
    facebook: "https://facebook.com/yourusername",
  },

  about: {
    introduction: `I'm a passionate Full Stack Developer with a love for creating beautiful and functional web applications. My journey in programming started during my college years when I built my first website, and I haven't looked back since.`,

    journey: `My programming journey began with curiosity and has evolved into a professional career. I started with HTML and CSS, then moved to JavaScript, and eventually mastered modern frameworks like React, Node.js, and more. Every day brings new challenges and opportunities to learn.`,

    workStyle: `I enjoy working on projects that challenge me to think creatively and solve complex problems. I'm particularly drawn to full-stack development where I can bring ideas to life from concept to deployment. I love collaborating with teams and believe in writing clean, maintainable code.`,

    hobbies: `When I'm not coding, you can find me playing basketball, reading tech blogs, or exploring nature through photography. I also enjoy contributing to open-source projects and mentoring aspiring developers.`,
  },
};

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "TypeScript", level: 75 },
    { name: "Next.js", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 82 },
    { name: "MongoDB", level: 78 },
    { name: "PostgreSQL", level: 70 },
    { name: "REST APIs", level: 88 },
    { name: "Firebase", level: 75 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "VS Code", level: 95 },
    { name: "Figma", level: 70 },
    { name: "Postman", level: 85 },
    { name: "Docker", level: 65 },
    { name: "Vite", level: 88 },
  ],
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, Country",
    period: "2019 - 2023",
    grade: "CGPA: 3.8/4.0",
    description:
      "Focused on software engineering, data structures, algorithms, and web development.",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "College Name",
    location: "City, Country",
    period: "2017 - 2019",
    grade: "GPA: 5.0/5.0",
    description:
      "Science background with focus on Mathematics and Computer Science.",
  },
];

export const experience = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "Tech Company Name",
    location: "City, Country",
    period: "Jan 2023 - Present",
    type: "Full-time",
    responsibilities: [
      "Developed and maintained responsive web applications using React and TypeScript",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Optimized application performance, reducing load time by 40%",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: 2,
    position: "Web Development Intern",
    company: "Startup Name",
    location: "City, Country",
    period: "Jun 2022 - Dec 2022",
    type: "Internship",
    responsibilities: [
      "Built reusable React components for the company's design system",
      "Implemented RESTful APIs integration",
      "Participated in agile development processes",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    shortDescription:
      "A full-stack e-commerce solution with cart, payment integration, and admin dashboard",
    image: "/projects/ecommerce.jpg", // Add project images to public/projects folder
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,

    // Detailed information
    fullDescription: `A comprehensive e-commerce platform that allows users to browse products, add items to cart, and complete purchases securely. The admin dashboard enables product management, order tracking, and analytics visualization.`,

    mainTech: {
      frontend: "React with React Router and Context API for state management",
      backend: "Node.js and Express.js with RESTful API architecture",
      database: "MongoDB with Mongoose ODM",
      payment: "Stripe payment gateway integration",
      styling: "Tailwind CSS for responsive design",
    },

    features: [
      "User authentication and authorization",
      "Product search and filtering",
      "Shopping cart with local storage persistence",
      "Secure payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product and order management",
      "Responsive design for all devices",
    ],

    challenges: [
      "Implementing secure payment processing while maintaining good UX",
      "Managing complex state across multiple components",
      "Optimizing database queries for better performance",
      "Handling real-time inventory updates",
    ],

    improvements: [
      "Add product recommendations using machine learning",
      "Implement real-time chat support",
      "Add wishlist and product comparison features",
      "Integrate multiple payment gateways",
      "Implement progressive web app (PWA) features",
    ],

    liveLink: "https://your-project.vercel.app",
    githubLink: "https://github.com/yourusername/ecommerce-client",
  },
  {
    id: 2,
    name: "Task Management App",
    shortDescription:
      "A collaborative task management tool with real-time updates and team features",
    image: "/projects/taskmanager.jpg",
    technologies: ["React", "Firebase", "Material-UI", "Context API"],
    category: "Frontend",
    featured: true,

    fullDescription: `A modern task management application that helps teams organize, track, and collaborate on projects. Features include drag-and-drop task boards, real-time updates, and team collaboration tools.`,

    mainTech: {
      frontend: "React with Hooks and Context API",
      backend: "Firebase (Firestore, Authentication, Cloud Functions)",
      styling: "Material-UI component library",
      realtime: "Firebase Realtime Database for live updates",
    },

    features: [
      "Drag-and-drop task boards (Kanban style)",
      "Real-time collaboration with team members",
      "Task assignment and deadline tracking",
      "Project categorization and filtering",
      "User authentication with Google Sign-in",
      "Activity timeline and notifications",
    ],

    challenges: [
      "Implementing smooth drag-and-drop functionality",
      "Managing real-time data synchronization across users",
      "Optimizing Firebase read/write operations to reduce costs",
      "Creating an intuitive UI for complex task relationships",
    ],

    improvements: [
      "Add calendar view for deadline visualization",
      "Implement file attachment support",
      "Add time tracking and productivity analytics",
      "Create mobile app version using React Native",
      "Add integration with popular tools like Slack and GitHub",
    ],

    liveLink: "https://taskmanager-demo.web.app",
    githubLink: "https://github.com/yourusername/task-manager",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    shortDescription:
      "A beautiful weather app with forecasts, maps, and weather alerts",
    image: "/projects/weather.jpg",
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

    liveLink: "https://weather-dashboard-demo.netlify.app",
    githubLink: "https://github.com/yourusername/weather-dashboard",
  },
];
