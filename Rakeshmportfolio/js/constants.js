// Constants for the portfolio
const APP_NAME = "Rakesh M Portfolio";
const VERSION = "1.0.0";

// Typing animation constants
const TYPING_TEXTS = [
    "Full Stack Java Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer"
];

const TYPING_SPEED = 100;
const ERASING_SPEED = 50;
const DELAY_BETWEEN_TEXTS = 2000;

// Code typing animation
const CODE_TEXT = `const developer = {
    name: "Rakesh M",
    role: "Full Stack Java Developer",
    skills: ["Java", "JavaScript", "React", "MySQL"],
    passion: "Creating innovative solutions",
    currentFocus: "Learning at Tap Academy",
    
    getIntroduction() {
        return \`Hello! I'm \${this.name}, 
                a passionate \${this.role}.\`;
    }
};

console.log(developer.getIntroduction());`;

const CODE_TYPING_SPEED = 50;

// Projects data
const PROJECTS = [
    {
        id: 1,
        title: "AI Portfolio",
        description: "A portfolio website used to describe my achievements and showcase my work. Built with modern web technologies and responsive design.",
        image: "fas fa-user-circle",
        technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
        liveLink: "myportfolio.html",
        githubLink: "#",
        featured: true
    },
    {
        id: 2,
        title: "Food Delivery Application",
        description: "A full-stack food delivery application built with Java backend and modern frontend technologies. Features user authentication, order management, and real-time tracking.",
        image: "fas fa-utensils",
        technologies: ["Java", "JDBC", "Spring Boot", "Hibernate", "ReactJS"],
        liveLink: "#",
        githubLink: "#",
        featured: true
    },
    {
        id: 3,
        title: "The Defender",
        description: "A security-focused web application built with Django and Streamlit, featuring robust backend functionality and interactive UI. Team Size: 2",
        image: "fas fa-shield-alt",
        technologies: ["Python", "Django", "Streamlit", "SQLite", "HTML", "CSS", "JavaScript"],
        liveLink: "#",
        githubLink: "#",
        featured: true
    },
    {
        id: 4,
        title: "BMI Calculator App",
        description: "A health-focused web application for calculating Body Mass Index with user-friendly interface and database integration. Team Size: 4",
        image: "fas fa-heartbeat",
        technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
        liveLink: "#",
        githubLink: "#",
        featured: true
    },
    {
        id: 5,
        title: "Deep Learning Preprocessing",
        description: "Applied preprocessing techniques on real-time datasets for deep learning models using Python and Jupyter Lab with Deep Learning Toolbox.",
        image: "fas fa-brain",
        technologies: ["Python", "Jupyter Lab", "Deep Learning", "Data Preprocessing"],
        liveLink: "#",
        githubLink: "#",
        featured: true
    },
    {
        id: 6,
        title: "Full Stack Development Internship",
        description: "Internship at Aurelia Technologies Pvt. Ltd, Davangere. Worked with MERN Stack to develop full stack applications with industry-standard practices.",
        image: "fas fa-code",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "HTML", "CSS"],
        liveLink: "#",
        githubLink: "#",
        featured: true
    }
];

// Experience data
const EXPERIENCE = [
    {
        id: 1,
        title: "Full Stack Java Developer Course",
        company: "Tap Academy",
        type: "education",
        duration: "3 months (Current)",
        startDate: "2024-06",
        endDate: "Present",
        description: "Currently pursuing comprehensive training in Full Stack Java Development, learning modern web technologies and best practices. Gaining hands-on experience with enterprise-level frameworks and tools.",
        skills: ["Java", "Spring Boot", "React", "MySQL", "JDBC", "Hibernate", "HTML", "CSS", "JavaScript"],
        location: "India"
    }
];

// Skills data organized by categories
const SKILLS = {
    backend: [
        { name: "Java", icon: "fab fa-java", level: 80 },
        { name: "Python", icon: "fab fa-python", level: 75 },
        { name: "Django", icon: "fas fa-fire", level: 70 },
        { name: "Node.js", icon: "fab fa-node-js", level: 70 },
        { name: "Spring Boot", icon: "fas fa-leaf", level: 70 },
        { name: "PHP", icon: "fab fa-php", level: 65 }
    ],
    frontend: [
        { name: "HTML5", icon: "fab fa-html5", level: 90 },
        { name: "CSS3", icon: "fab fa-css3-alt", level: 85 },
        { name: "JavaScript", icon: "fab fa-js-square", level: 80 },
        { name: "React.js", icon: "fab fa-react", level: 75 },
        { name: "Streamlit", icon: "fas fa-chart-line", level: 70 }
    ],
    database: [
        { name: "MySQL", icon: "fas fa-database", level: 80 },
        { name: "MongoDB", icon: "fas fa-database", level: 70 },
        { name: "SQLite", icon: "fas fa-database", level: 75 },
        { name: "JDBC", icon: "fas fa-plug", level: 75 },
        { name: "Hibernate", icon: "fas fa-cogs", level: 65 }
    ],
    tools: [
        { name: "Git", icon: "fab fa-git-alt", level: 70 },
        { name: "VS Code", icon: "fas fa-code", level: 85 },
        { name: "Jupyter Lab", icon: "fas fa-flask", level: 70 },
        { name: "Postman", icon: "fas fa-paper-plane", level: 75 }
    ]
};

// Contact information
const CONTACT_INFO = {
    email: {
        value: "rakeshmmadiwalar.com",
        icon: "fas fa-envelope",
        link: "mailto:rakeshmmadiwalar.com"
    },
    phone: {
        value: "6364124215",
        icon: "fas fa-phone",
        link: "tel:+916364124215"
    },
    linkedin: {
        value: "Connect with me",
        icon: "fab fa-linkedin",
        link: "https://www.linkedin.com/in/rakesh-m-madiwalar"
    },
    github: {
        value: "View my code",
        icon: "fab fa-github",
        link: "#"
    },
    location: {
        value: "India",
        icon: "fas fa-map-marker-alt",
        link: "#"
    }
};

// Personal information
const PERSONAL_INFO = {
    name: "Rakesh M",
    fullName: "Rakesh M",
    title: "Full Stack Java Developer",
    description: "My name is Rakesh M. I am taking a course in Tap Academy as a Full Stack Developer. I'm passionate about creating innovative web solutions and continuously learning new technologies.",
    resumeLink: "#",
    profileImage: "images/profile.jpg" // Add your profile image here
};

// Animation settings
const ANIMATION_SETTINGS = {
    fadeInDuration: 600,
    slideUpDistance: 30,
    staggerDelay: 100,
    observerThreshold: 0.1,
    observerRootMargin: '0px 0px -50px 0px'
};
