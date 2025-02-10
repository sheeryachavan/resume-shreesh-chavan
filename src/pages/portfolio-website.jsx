import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import image from "../MyImage.jpeg";
import { ExternalLink, ChevronRight } from "lucide-react";
const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const projects = [
    {
      title: "Paper Ganesh",
      url: "paperganesh.com",
      description: "E-commerce platform for eco-friendly Ganesh idols",
      tags: ["E-commerce", "React", "Node.js"],
      color: "from-green-500 to-emerald-700",
    },
    {
      title: "ICPA Union",
      url: "icpaunion.com",
      description:
        "Professional platform for Indian Commercial Pilots Association",
      tags: ["Organization", "React", "Redux"],
      color: "from-blue-500 to-indigo-700",
    },
    {
      title: "ICPA Admin",
      url: "admin.icpaunion.com",
      description: "Administrative dashboard for ICPA management",
      tags: ["Dashboard", "React", "TypeScript"],
      color: "from-purple-500 to-indigo-700",
    },
    {
      title: "Bolo Periods",
      url: "boloperiods.in",
      description: "Educational platform for menstrual health awareness",
      tags: ["Healthcare", "Education", "React"],
      color: "from-pink-500 to-rose-700",
    },
    {
      title: "Abhyasetu",
      url: "abhyasetu.com",
      description: "Educational technology platform for students",
      tags: ["EdTech", "React", "Node.js"],
      color: "from-orange-500 to-red-700",
    },
    {
      title: "Brainways Care",
      url: "brainways.care",
      description: "Mental health and wellness platform",
      tags: ["Healthcare", "React", "AWS"],
      color: "from-teal-500 to-cyan-700",
    },
  ];

  const [activeProject, setActiveProject] = useState(null);
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
    "AWS Services": [
      "Lambda",
      "API Gateway",
      "DynamoDB",
      "Cognito",
      "CloudWatch",
      "ECS",
      "Lex",
      "Kendra",
      "Textract",
      "AppSync",
      "Kinesis",
      "S3",
      "CloudFront",
      "Route53",
      "SNS",
      "SQS",
    ],
    "Programming Languages": [
      "JavaScript",
      "Python",
      "Java",
      "TypeScript",
      "C#",
    ],
    "Backend and Databases": [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "DynamoDB",
      "Redis",
    ],
    Security: [
      "AWS IAM",
      "Auth0",
      "JWT",
      "OAuth2.0",
      "Role-Based Access Control",
    ],
    "Version Control": ["Git", "GitLab", "BitBucket"],
  };

  // Experience data from resume
  const experiences = [
    {
      company: "Bally's Interactive",
      role: "Software Engineer",
      period: "August 2022 - Present",
      highlights: [
        "Developed React-based admin portals and dashboards with real-time analytics, JIRA integration, and customizable interfaces, boosting team productivity by 35% and reducing customer verification time by 50%",
        "Created robust frontend applications using TypeScript, React.js, and Redux, implementing comprehensive testing frameworks (Jest, React Testing Library) with 90%+ test coverage and reducing bug reports by 60%",
        "Engineered secure frontend architectures with data masking, role-based access control, and responsive design, achieving 98% cross-browser compatibility and creating a reusable component library that improved development efficiency by 40%",
        "Built advanced data visualization solutions using D3.js and Recharts, processing over 1M daily data points and creating real-time analytics dashboards",
        "Implemented CI/CD pipelines and dynamic form builder systems, reducing deployment and form development times by 70% and 50% respectively",
        "Developed AWS-based AI chatbot using Lex, Kendra, and Lambda for customer service automation, resulting in 40% reduction in support tickets and $200K annual cost savings",
        "Architected serverless microservices infrastructure on AWS supporting 100K+ concurrent users, achieving 99.99% uptime using ECS, Lambda, and API Gateway",
        "Designed secure customer identity verification systems using AWS Textract and Lambda, processing 10K+ daily verifications with 99.5% accuracy",
        "Led authentication infrastructure improvements by migrating to AWS Cognito and Auth0, implementing custom authentication flows that reduced authentication errors by 75% and improved login success by 40%",
        "Created comprehensive AWS CloudWatch monitoring systems with custom metrics and automated alerting, reducing incident detection time by 60% and improving mean time to recovery by 45%",
        "Implemented infrastructure as code using Terraform and AWS CloudFormation, reducing deployment time from 3 hours to 15 minutes and optimizing cloud infrastructure costs by 30%",
        "Developed secure API Gateway integrations for third-party vendors, handling 1M+ daily requests with 99.9% availability and enabling seamless system interoperability",
      ],
    },
    {
      company: "TenFour (now Acuative)",
      role: "Software Engineer",
      period: "January 2020 - August 2022",
      highlights: [
        "Developed high-performance task scheduler using Singleton pattern and Multithreading, dramatically reducing data processing time from 1 minute to 7 seconds",
        "Led technology migration from AngularJS to Vue.js, improving application performance by 80% and reducing application entry point size by 50%",
        "Architected and implemented procurement web applications with modern UI/UX practices, including stakeholder-aligned solutions and responsive layouts",
        "Created custom billing applications using diverse technologies, including Python and MSSQL for Twilio usage, and transforming Excel VBA applications into cloud-based solutions with Vue.js and Azure SQL",
        "Optimized software modules and performance, including a 30% improvement in bill generator module efficiency",
        "Established robust version control infrastructure by self-hosting GitLab server and managing SVN repository migration",
        "Enhanced mobile application development with Xamarin UWP Site Survey app, adding new file editing capabilities",
        "Implemented user management services in AngularJS inventory system, demonstrating expertise in front-end development and system integration",
        "Utilized modern web technologies including HTML5, CSS3, and Vue.js to create interactive and responsive web applications",
        "Developed cross-platform applications with a focus on performance optimization, modularity, and user experience",
      ],
    },
    {
      company: "Indian Commercial Pilots Association",
      role: "Freelance Developer and Manager",
      period: "August 2018 - February 2020",
      highlights: [
        "Designed and implemented modern React-based flight management system using hooks and Redux, serving 1000+ pilots with comprehensive state management and cross-platform mobile experience",
        "Built responsive and intuitive admin dashboards with role-based access control using React, TypeScript, and real-time update capabilities",
        "Created advanced grievance management module utilizing React Hooks and custom reducers, demonstrating expertise in complex frontend architecture",
        "Developed cross-platform mobile applications using React Native, ensuring consistent user experience across multiple devices",
        "Optimized frontend performance through efficient state management, data fetching strategies, and performant data visualization components",
        "Implemented robust, scalable interfaces with strong emphasis on responsive design, security, and user experience across web and mobile platforms",
      ],
    },
    {
      company: "Vistaar Technology Pvt Ltd",
      role: "Freelance Developer and Manager",
      period: "July 2017 - June 2018",
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
          <a href="#home">
            <span className="text-white font-semibold">Shreesh Chavan</span>
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#skills" className="text-purple-300  hover:text-white">
            Skills
          </a>
          <a href="#experience" className="text-purple-300  hover:text-white">
            Experience
          </a>
          <a href="#portfolio" className="text-purple-300 hover:text-white">
            Portfolio
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="relative min-h-screen flex flex-col-reverse md:flex-row"
        id="home"
      >
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
              Software Engineer and UI Enthusiast
            </h2>
            <p className="text-lg text-white/70 mb-8">
              I'm a creative engineer based in New York. Passionate about
              creating intuitive and engaging user experiences. Specialized in
              transforming ideas into scalable and sustainable products.
            </p>

            <div className="flex space-x-4 mb-4">
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full">
                <a
                  href="https://form.jotform.com/250405281056146 "
                  target="_blank"
                >
                  {" "}
                  Get in Touch{" "}
                </a>
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

        {/* Hire Me Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <a href="https://form.jotform.com/250405281056146 " target="_blank">
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
          </a>
        </div>
      </div>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-gray-900" id="skills">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
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
      <section className="py-16 px-6 bg-purple-500" id="experience">
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
                <div className="p-6 rounded-lg shadow-lg bg-blue-800">
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
      <section className="py-20 px-6 bg-gray-900" id="portfolio">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Featured Projects
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div
                  className={`bg-gradient-to-br ${project.color} rounded-xl p-6 h-full 
                  transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                  onMouseEnter={() => setActiveProject(project)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <a
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/80 hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-white/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeProject === project ? 1 : 0 }}
                      className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center space-x-2"
                    >
                      <span>Visit Site</span>
                      <ChevronRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 px-6 bg-blue-600 text-white" id="contact">
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
