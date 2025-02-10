import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "../MyImage.jpeg";
const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  // Skills data from resume
  const skills = {
    "Frontend Core": [
      "React.js",
      "Vue.js",
      "AngularJS",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
    "UI Frameworks": [
      "Material-UI",
      "Tailwind CSS",
      "Bootstrap",
      "ExtJS",
      "Chakra UI",
    ],
    "State Management": [
      "Redux",
      "Redux Toolkit",
      "Vuex",
      "React Hooks",
      "Context API",
    ],
    Testing: ["Jest", "React Testing Library", "Cypress", "Storybook"],
    "Mobile Development": ["React Native", "Xamarin"],
    "Build & Performance": [
      "Webpack",
      "Babel",
      "npm",
      "Code Splitting",
      "Lazy Loading",
    ],
    "Version Control": ["Git", "GitLab", "BitBucket"],
    "Design & UI": ["Responsive Design", "CSS Grid", "Flexbox", "SASS/SCSS"],
  };

  // Experience data from resume
  const experiences = [
    {
      company: "Bally's Interactive",
      role: "Software Engineer",
      period: "August 2022 - Present",
      highlights: [
        "Architected and developed React-based internal admin portal featuring real-time analytics, JIRA integration, and customizable dashboards, increasing team productivity by 35% ",
        "Built responsive KYC review portal using React.js and Material-UI, reducing customer verification time by 50% ",
        "Engineered customer onboarding application with TypeScript and Redux, achieving 99% test coverage and reducing bug reports by 60% ",
        "Implemented secure data masking and role-based access control using custom React hooks and context API ",
        "Created reusable component library with Storybook, improving development efficiency by 40% ",
        "Developed third-party integration wrappers enabling seamless account linking with Bally Rewards System ",
        "Implemented responsive design patterns supporting mobile and desktop platforms with 98% cross-browser compatibility ",
        "Built real-time analytics dashboards using D3.js and Recharts, processing 1M+ daily data points ",
        "Established frontend testing framework using Jest and React Testing Library, achieving 90%+ test coverage ",
        "Implemented CI/CD pipeline for frontend deployments, reducing deployment time by 70% ",
      ],
    },
    {
      company: "TenFour",
      role: "Software Engineer",
      period: "January 2020 - August 2022",
      highlights: [
        "Led migration from AngularJS to Vue.js, improving application performance by 80%",
        "Reduced application entry point size by 50% through code optimization",
        "Developed procurement web applications with modern UI/UX practices",
        "Enhanced Xamarin UWP Site Survey app with new file editing capabilities",
        "Implemented user management services in AngularJS inventory system",
        "Converted Excel VBA application to modern web app using Vue.js",
        "Created responsive layouts and interactive components using HTML5 and CSS3",
      ],
    },
    {
      company: "Indian Commercial Pilots Association",
      role: "Freelance Developer and Manager",
      period: "August 2018 - February 2020",
      highlights: [
        "Developed React-based flight management system with Redux state management",
        "Created grievance management module using React Hooks and custom reducers",
        "Built responsive admin dashboard with real-time updates",
        "Implemented performant data visualization component",
        "Developed cross-platform mobile application using React Native",
      ],
    },
    {
      company: "Vistaar Technology Pvt Ltd",
      role: "Freelance Developer and Manager",
      period: "August 2018 - February 2020",
      highlights: [
        "Built pricing software modules using ExtJS and Bootstrap",
        "Developed real-time search functionality with dynamic suggestions",
        "Created UI components for Benjamin Moore & Co. using ExtJS",
        "Implemented responsive designs for multiple client applications",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100  bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full"></div>
          <span className="text-white font-semibold">Shreesh Chavan</span>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="text-white/70 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-white/70 hover:text-white">
            About
          </a>
          <a href="#service" className="text-white/70 hover:text-white">
            Service
          </a>
          <a href="#portfolio" className="text-white/70 hover:text-white">
            Portfolio
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col-reverse md:flex-row">
        {/* Text Content */}
        <div className="md:w-1/2 px-6 md:px-12 pt-24 md:pt-0 flex items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Shreesh Chavan
            </h1>
            <h2 className="text-2xl text-white/80 mb-6">
              Frontend Engineer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-white/70 mb-8">
              I'm a creative engineer based in New York, and I'm very passionate
              and dedicated to my work.
            </p>

            <div className="flex space-x-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full">
                Get in Touch
              </button>
              <button className="border border-white/50 text-white px-6 py-3 rounded-full">
                View LinkedIn
              </button>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src={image}
            alt="Shreesh Chavan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-blue-600/80"></div>
        </div>

        {/* Decorative Dots */}
        <div className="absolute left-4 bottom-1/2 transform translate-y-1/2 space-y-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div key={dot} className="w-2 h-2 bg-white/30 rounded-full"></div>
          ))}
        </div>

        {/* Hire Me Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-full flex items-center space-x-2">
            <span>Hire Me</span>
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-blue-600"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 capitalize text-purple-500">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6 bg-purple-500">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-blue-100 text-center mb-12">
            Work Experience
          </h2>
          <div className="relative border-l-4 border-blue-800 pl-8  ">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mb-10 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[42px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white"></div>

                {/* Experience Card */}
                <div className="bg-white p-6 rounded-lg shadow-lg bg-blue-800">
                  <h3 className="text-2xl font-bold text-white-800">
                    {exp.company}
                  </h3>
                  <p className="text-blue-100 font-semibold">{exp.role}</p>
                  <p className="text-gray-100 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:shreeshc95@gmail.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/sheeryachavan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://gitlab.com/shreesh.chavan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition-colors"
            >
              GitLab
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioWebsite;
