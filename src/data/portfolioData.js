// Portfolio Data - Update this file with your personal information

export const personalInfo = {
  name: "Mohammad Siddique Sakib",
  designation: "MERN Stack Developer",
  tagline:
    "Web Developer specializing in React, Tailwind CSS, Node.js, Firebase, and MongoDB.",
  email: "dmsakib1122@gmail.com",
  phone: "+8801851182639",
  whatsapp: "+8801851182639",
  location: "Chattogram, Bangladesh",
  resumeUrl: "/Resume_of_Mohammad_Siddique_Sakib.pdf", // Place your resume in the public folder
  profileImage: "/Ts.png", // Place your image in the public folder

  social: {
    github: "https://github.com/siddiquesakib/",
    linkedin: "https://www.linkedin.com/in/mohammad-siddique-sakib/",
    twitter: "https://twitter.com/yourusername",
    facebook: "https://facebook.com/yourusername",
  },

  about: {
    introduction: `Aspiring MERN-stack web developer with strong skills in JavaScript, React, Next.js, Node.js, and MongoDB. Passionate about building responsive, user-friendly web apps and eager to learn, contribute, and grow in a collaborative environment. `,

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
    { name: "Next.js", level: 80 },
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
    image: "/Plant-Care1.png",
    technologies: [
      "React",
      "JavaScript",
      "Firebase ",
      "Node.js",
      "Tailwind CSS",
    ],
    category: "Frontend",
    featured: true,

    // Detailed information
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
    image: "/adoptiPaws1.jpg",
    technologies: [
      "React",
      "Firebase",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB ",
    ],
    category: "Frontend",
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
