export const personalInfo = {
  name: "Chandra Shekhar",
  shortName: "CS",
  title: "Full Stack Developer & UI/UX Designer",
  status: "Available for full-time roles & high-impact projects",
  location: "Delhi, India",
  email: "sahiljoshi399@gmail.com",
  phone: "+91 6005518186",
  resumeUrl: "https://drive.google.com/file/d/1NAucLYKhxdNruJd0kMqiKAcBjqs7iMV7/view?usp=drive_link",
  github: "https://github.com/chandrashekhar235",
  linkedin: "https://www.linkedin.com/in/chandra-shekhar-a29789284",
  typewriterRoles: [
    "Full Stack Developer",
    "React.js Specialist",
    "Node.js & Express Architect",
    "UI/UX & Interactive Craftsman",
    "Creative Problem Solver"
  ],
  bio: "I build responsive, high-performance web applications with clean architecture and intuitive user experiences. Passionate about real-time systems, scalable APIs, and pixel-perfect design systems.",
  extendedBio: "I'm a dedicated full-stack developer with 1+ year of hands-on experience designing and delivering production-ready web applications. My sweet spot lies at the intersection of robust backend logic (Node.js, Express, MongoDB, WebRTC) and delightful, animated frontend interfaces in React. When not engineering code, I explore modern web standards, contribute to open-source software, and experiment with interactive 3D & canvas visualizations."
};

export const stats = [
  { value: "1+", label: "Years Experience", description: "Building modern web applications" },
  { value: "10+", label: "Projects Completed", description: "Full-stack apps, tools & UI systems" },
  { value: "100%", label: "Code Dedication", description: "Clean code & modern standards" },
  { value: "<24h", label: "Fast Response", description: "Quick communication & turnaround" }
];

export const coreValues = [
  {
    icon: "Layers",
    title: "Full Stack Scalability",
    description: "Designing end-to-end applications from database schemas in MongoDB to fluid, component-driven interfaces in React."
  },
  {
    icon: "Sparkles",
    title: "Pixel-Perfect UI/UX",
    description: "Crafting modern dark modes, fluid micro-interactions, responsive grids, and accessible interfaces that engage users."
  },
  {
    icon: "Cpu",
    title: "Strong CS Fundamentals",
    description: "Solid grounding in Data Structures, Algorithms, Object-Oriented Design in C++, and performance optimization."
  },
  {
    icon: "Zap",
    title: "Real-Time Engineering",
    description: "Building low-latency collaborative features using WebRTC voice channels, Socket.io, and asynchronous events."
  }
];

export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & APIs" },
  { id: "languages", label: "Languages" },
  { id: "tools", label: "Dev Tools & DB" }
];

export const skills = [
  { name: "React.js", category: "frontend", level: 92, icon: "Code2", highlight: true },
  { name: "JavaScript (ES6+)", category: "languages", level: 90, icon: "FileCode", highlight: true },
  { name: "Node.js", category: "backend", level: 88, icon: "Server", highlight: true },
  { name: "Express.js", category: "backend", level: 86, icon: "Cpu", highlight: false },
  { name: "MongoDB & Mongoose", category: "tools", level: 85, icon: "Database", highlight: true },
  { name: "C++ (DSA & OOP)", category: "languages", level: 84, icon: "Binary", highlight: true },
  { name: "HTML5 & Modern CSS3", category: "frontend", level: 94, icon: "Layout", highlight: false },
  { name: "WebRTC & Socket.io", category: "backend", level: 82, icon: "Radio", highlight: true },
  { name: "RESTful APIs", category: "backend", level: 90, icon: "Network", highlight: false },
  { name: "Java", category: "languages", level: 75, icon: "Terminal", highlight: false },
  { name: "Git & GitHub", category: "tools", level: 88, icon: "GitBranch", highlight: false },
  { name: "Vite & Vercel", category: "tools", level: 90, icon: "Rocket", highlight: false },
  { name: "UI/UX & Figma", category: "frontend", level: 82, icon: "Palette", highlight: false },
  { name: "Postman API Testing", category: "tools", level: 85, icon: "CheckCircle", highlight: false }
];

export const projects = [
  {
    id: "learn-bridge",
    title: "Learn Bridge",
    subtitle: "Real-Time Collaborative Learning Platform with Voice Channels",
    category: "Full Stack",
    image: "/projects/learnbridge.jpg",
    featured: true,
    tags: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io"],
    description: "A flagship full-stack platform empowering students and educators to connect in live study rooms, stream voice conversations over WebRTC, publish study resources, and collaborate seamlessly.",
    highlights: [
      "Engineered low-latency WebRTC voice communication channels with active speaker visualizers",
      "Built real-time study rooms with role-based member moderation and instant chat",
      "Designed dynamic study note feed with comments, bookmarking, and category tagging",
      "Engineered secure JWT authentication and role-based permissions"
    ],
    demoUrl: "https://learn-bridge-woad.vercel.app",
    githubUrl: "https://github.com/chandrashekhar235/learn-bridge"
  },
  {
    id: "writespace",
    title: "WriteSpace",
    subtitle: "Modern Markdown Publishing Platform & CMS Engine",
    category: "Web App",
    image: "/projects/writespace.jpg",
    featured: true,
    tags: ["HTML5", "CSS3", "JavaScript", "Node.js", "Express", "REST APIs"],
    description: "A clean, high-performance publishing engine tailored for developers and writers. Features instant markdown parsing, syntax highlighting, reading time estimations, and SEO meta generation.",
    highlights: [
      "Real-time dual-pane markdown editor with instant preview and syntax highlighting",
      "Dynamic reading time calculations and engagement counters",
      "SEO-friendly metadata generation with automated social sharing cards",
      "Lightweight, zero-dependency client footprint for lightning fast page loads"
    ],
    demoUrl: "https://chandrashekhar235.github.io/writespace/",
    githubUrl: "https://github.com/chandrashekhar235/writespace"
  },
  // {
  //   id: "techstore",
  //   title: "TechStore",
  //   subtitle: "Interactive E-Commerce Web Application for High-End Tech Gadgets",
  //   category: "Full Stack",
  //   image: "/projects/techstore.jpg",
  //   featured: true,
  //   tags: ["JavaScript", "HTML5", "CSS3", "State Management", "Node.js"],
  //   description: "A sleek consumer electronics e-commerce web platform offering dynamic product filtering, slide-out shopping cart drawer, live price calculations, and responsive checkout flows.",
  //   highlights: [
  //     "Dynamic filtering by device category, brand, and pricing tier",
  //     "Persistent interactive shopping cart with quantity toggles and real-time total updates",
  //     "Fluid micro-animations, glassmorphic badges, and product zoom interactions",
  //     "Optimized mobile-first UI with intuitive navigation and tactile touch controls"
  //   ],
  //   demoUrl: "https://github.com/chandrashekhar235/techstore",
  //   githubUrl: "https://github.com/chandrashekhar235/techstore"
  // },
  // {
  //   id: "foundrai",
  //   title: "FoundrAI Studio",
  //   subtitle: "AI Startup Accelerator Platform with OAuth & JWT Security",
  //   category: "Full Stack",
  //   image: "/projects/writespace.jpg",
  //   featured: false,
  //   tags: ["React", "Node.js", "Express", "Google OAuth", "JWT", "Bcrypt"],
  //   description: "An AI studio platform empowering early-stage entrepreneurs to draft business models and manage startup assets with enterprise-grade authentication and session security.",
  //   highlights: [
  //     "Google OAuth 2.0 and JWT token authentication pipeline",
  //     "Bcrypt password hashing and secure cookie-based session persistence",
  //     "Modular dashboard architecture with analytics overview",
  //     "Protected API route middleware ensuring role authorization"
  //   ],
  //   demoUrl: "https://github.com/chandrashekhar235",
  //   githubUrl: "https://github.com/chandrashekhar235"
  // }
];

export const journeyMilestones = [
  {
    year: "2025 - Present",
    title: "Full Stack Innovation & Production Applications",
    company: "Personal & Open Source Projects",
    description: "Architected and deployed production-grade applications like LearnBridge and WriteSpace. Integrated real-time WebRTC audio streams, reactive state management in React, and scalable backend REST architectures in Node.js and MongoDB.",
    skills: ["React", "WebRTC", "MongoDB", "Express", "Socket.io", "UI/UX Systems"]
  },
  {
    year: "2024 - 2025",
    title: "Core Engineering, Data Structures & Algorithms",
    company: "Continuous Learning & Engineering Rigor",
    description: "Deepened computer science foundations with C++ and Java. Solved algorithmic challenges focusing on time/space complexity, graph theory, trees, dynamic programming, and object-oriented architectural patterns.",
    skills: ["C++", "Data Structures", "Algorithms", "OOP", "System Logic"]
  },
  {
    year: "2023 - 2024",
    title: "Frontend Foundations & Modern Web Technologies",
    company: "Developer Exploration",
    description: "Mastered modern JavaScript (ES6+), responsive design systems, CSS Flexbox/Grid, DOM manipulation, asynchronous programming, Git workflows, and user-centric interface design.",
    skills: ["JavaScript", "HTML5", "CSS3", "Git", "Responsive Design"]
  }
];

export const terminalBio = {
  whoami: "Chandra Shekhar (CS) — Full Stack Developer & UI/UX Designer based in Delhi, India.",
  skills: "React, Node.js, Express, MongoDB, C++, JavaScript (ES6+), WebRTC, REST APIs, Git, Figma.",
  contact: "Email: sahiljoshi399@gmail.com | Phone: +91 6005518186 | LinkedIn: linkedin.com/in/chandra-shekhar-a29789284",
  projects: "1. Learn Bridge (WebRTC study hub) | 2. WriteSpace (Markdown CMS) | 3. TechStore (E-commerce)",
  status: "🟢 Open for full-time software engineering roles and high-impact freelance projects."
};
