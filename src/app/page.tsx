"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Linkedin,
  Instagram,
  Download,
  Mail,
  MapPin,
  Calendar,
  ExternalLink,
  Menu,
  X,
  Phone,
  Paintbrush,
  Paintbrush2,
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Add this component before the main Portfolio component
import { ReactNode } from "react";

function AccordionItem({
  title,
  content,
}: {
  title: string;
  content: ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-purple-500/20">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:text-purple-300 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-white">{title}</h3>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-purple-300"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="pb-6 text-purple-100 leading-relaxed animate-fade-in-up">
          {content}
        </div>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [stars, setStars] = useState<
    Array<{
      id: number;
      color: string;
      left: string;
      top: string;
      animationDelay: string;
      animationDuration: string;
    }>
  >([]);

  const [experienceFilter, setExperienceFilter] = useState("Organizational");

  const experiences = [
    // Organizational Experience
    {
      title: "Vice Head of Front End Department",
      company: "Basic Computing Community (BCC) FILKOM",
      location: "Kota Malang, Indonesia",
      period: "January 2025 - Present",
      category: "Organizational",
      description: [
        "Leading a team of 14 active members in frontend development initiatives.",
        "Designed department curriculum, strategic plans, and KPIs for a full organizational period.",
        "Delivered 5+ technical workshops on mobile app development, receiving an average feedback score of 4.8/5 for clarity and content quality.",
      ],
    },
    {
      title: "Head of Software Development Department",
      company: "DevGirls FILKOM",
      location: "Kota Malang, Indonesia",
      period: "January 2025 - Present",
      category: "Organizational",
      description: [
        "Leading a team of 8 active members in full-stack development initiatives.",
        "Organized and delivered 3+ workshops on web development (both frontend and backend), resulting in a 68% increase in participant scores from pretest to post-test.",
      ],
    },
    {
      title: "Coordinator of Basic Programming Laboratory Assistant",
      company: "Faculty of Computer Science (FILKOM) UB",
      location: "Kota Malang, Indonesia",
      period: "August - December 2024",
      category: "Work",
      description: [
        "Mentored over 40 students in Java programming through lectures, hands-on guidance, and assignment support, achieving a 95% student pass rate.",
        "Organized the students&apos; examination process, including scheduling and coordinating grading procedures, while leading a team of 12 assistants and serving as the main liaison between lab assistants and the professor.",
      ],
    },
    {
      title: "Front End Web Developer",
      company: "POROS Organization of Open Source FILKOM",
      location: "Kota Malang, Indonesia",
      period: "March - December 2024",
      category: "Organizational",
      description: [
        "Utilized React and Redux to develop team-based web projects, including e-commerce and company profile websites, which were later used as internal learning material and project showcases for open source contributors.",
      ],
    },
    // Volunteer Experience
    {
      title: "Staff of Publication Information and Technology",
      company: "Brawijaya Appreciate 2024 EM UB",
      location: "Kota Malang, Indonesia",
      period: "August - December 2024",
      category: "Volunteer",
      description: [
        "Developed the official event website using React.js, designed to support over 1000+ users.",
        "Collaborated with cross-functional teams to ensure content accuracy, accessibility, and optimal user experience.",
      ],
    },
  ];

  const filteredExperience = experiences.filter(
    (exp) => exp.category === experienceFilter
  );

  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  // Typing effect for name
  useEffect(() => {
    const name = "Indah Githa";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex <= name.length) {
        setTypedText(name.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150); // Adjust speed here (lower = faster)

    return () => clearInterval(typingInterval);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    if (isTypingComplete) {
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 600); // Blink every 500ms

      return () => clearInterval(cursorInterval);
    }
  }, [isTypingComplete]);

  // Generate stars on client side only to avoid hydration mismatch
  useEffect(() => {
    const colors = [
      "bg-pink-400/60",
      "bg-cyan-400/60",
      "bg-yellow-400/60",
      "bg-emerald-400/60",
      "bg-white/40",
    ];
    const generatedStars = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 4}s`,
      animationDuration: `${3 + Math.random() * 3}s`,
    }));
    setStars(generatedStars);
  }, []);

  const projects = [
    {
      title: "DeepGaze",
      description:
        "A learning support application for students with speech and motor disabilities using eye movement tracker with client-side image processing, with features such as eye-controlled keyboard, lecture recorder, and interactive reader.",
      image: "/assets/deepgaze.png",
      demoUrl:
        "https://drive.google.com/drive/folders/1pIvm896WlIYQZFlZserVnU7y1naXrSMB",
      githubUrl: "https://github.com/indahgithaa/deep-gaze",
      technologies: [
        "Flutter",
        "Provider",
        "RestAPI",
        "Tensorflow Lite",
        "OpenCV",
      ],
      category: "Mobile App",
    },
    {
      title: "Includemy",
      description:
        "An application that supports people with disabilities in developing skills and finding employment, with features such as mentoring, certification, and job application tools.",
      image: "/assets/includemy.png",
      demoUrl:
        "https://clips.id/demo-includemy-bcc-intern",
      githubUrl: "https://github.com/indahgithaa/includemy",
      technologies: ["Flutter", "GetX", "RestAPI"],
      category: "Mobile App",
    },
    {
      title: "Nusastra",
      description:
        "An application that helps users learn traditional languages through gamification, with features such as NusaSmart, NusaFriend, NusaLingo, and NusaMaps.",
      image: "/assets/nusastra.png",
      demoUrl:
        "https://clips.id/demo-nusastra-bccgembira",
      githubUrl: "https://github.com/kmdavidds/BCCGembira_Nusastra",
      technologies: ["Flutter", "BLoC", "RestAPI", "OpenAI"],
      category: "Mobile App",
    },
    {
      title: "Morie",
      description:
        "An application designed to prevent and manage baby blues and postpartum depression, offering features such as access to healthcare providers, community support, journaling, mental and physical wellness tips, and self-care tools.",
      image: "/assets/Morie.png",
      demoUrl: "https://www.youtube.com/watch?v=grBppu6v8yA",
      githubUrl: "https://github.com/indahgithaa/morie",
      technologies: ["Flutter", "Firebase"],
      category: "Mobile App",
    },
    {
      title: "TRIPLED",
      description:
        "A smart school pickup solution integrated with IP camera and machine learning. It optimizes traffic flow and enhances efficiency, ensuring a smarter, safer experience for students and parents.",
      image: "/assets/TRIPLED.png",
      demoUrl: "https://youtu.be/d8fdl8cPQuQ?si=2c576mPflfhEq3Wm",
      githubUrl: "https://github.com/kmdavidds/gemastik_tripled",
      technologies: [
        "Python",
        "EasyOCR",
        "YOLOv8",
        "Ultralytics",
        "ONNX",
        "WebSocket",
        "HTML & CSS",
        "JavaScript",
      ],
      category: "Website",
    },
    {
      title: "Suarai",
      description:
        "Suarai is an app designed to maximize the effectiveness of social campaigns through AI-generated content. It helps users automatically create impactful campaign materials, including slogans, illustrations, and videos.",
      image: "/assets/suarai.png",
      demoUrl: "https://drive.google.com/drive/folders/1LGPoIz14X3u5adrlJsCMqcPvLOwxgMKL?usp=sharing",
      githubUrl: "https://www.figma.com/design/XlVNYuWRrdJNXvDw8oZdzY/Suarai?node-id=24-511&t=7FEEbjqhryapfuoP-0",
      category: "UI/UX",
    },
  ];

  const categories = ["All", "Website", "Mobile App", "UI/UX"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      {/* Animated Background - Enhanced with colors */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Colorful stars - only render after client-side generation */}
        {stars.map((star) => (
          <div
            key={star.id}
            className={`absolute w-0.5 h-0.5 ${star.color} rounded-full animate-pulse`}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          />
        ))}

        {/* Colorful comet */}
        <div
          className="absolute w-1 h-1 bg-gradient-to-r from-pink-400/40 via-cyan-400/40 to-transparent rounded-full animate-comet opacity-60"
          style={{
            left: "10%",
            top: "20%",
            animationDelay: "2s",
            animationDuration: "20s",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-purple-900/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Indah Githa
            </h1>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="hover:text-purple-300 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="hover:text-purple-300 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="hover:text-purple-300 transition-colors"
              >
                Projects
              </a>
              <a href="" className="hover:text-purple-300 transition-colors">
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-purple-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-purple-500/20">
              <div className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => handleNavClick("#about")}
                  className="text-left hover:text-purple-300 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick("#experience")}
                  className="text-left hover:text-purple-300 transition-colors"
                >
                  Experience
                </button>
                <button
                  onClick={() => handleNavClick("#projects")}
                  className="text-left hover:text-purple-300 transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => handleNavClick("")}
                  className="text-left hover:text-purple-300 transition-colors"
                >
                  Contact Me
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Fixed for mobile centering */}
      <section className="min-h-screen flex items-center justify-center relative z-10 pt-20 md:pt-0">
        <div className="text-center space-y-8 px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold mb-6">
              <span className="font-bold text-white mb-8">Hello, I&apos;m</span>
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 min-h-[1.2em]">
              {typedText}
              <span
                className={`text-purple-400 font-light ${
                  showCursor || !isTypingComplete ? "opacity-100" : "opacity-0"
                }`}
              >
                |
              </span>
            </h2>

            <p className="text-lg md:text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              I&apos;m an undergraduate Computer Science student based in
              Malang, Indonesia. I&apos;m passionate about building useful and
              meaningful technology that can solve real-world problems.
            </p>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-300">
            <a
              href="https://www.linkedin.com/in/indahgithaa/"
              className="text-purple-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/indahgithaa"
              className="text-purple-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.instagram.com/indahgithaa"
              className="text-purple-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Instagram size={32} />
            </a>
          </div>

          {/* Add Download CV and Say Hi buttons here */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-500">
            <a
              href="https://clips.id/cv-indah-githa"
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-5 py-3 rounded-full transition-all transform hover:scale-105 inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2" size={20} />
              Download CV
            </a>
            <a
              href="mailto:indahgithadev@gmail.com"
              className="border border-purple-500/50 text-purple-300 hover:bg-purple-700/50 hover:text-white px-4 py-3 rounded-full bg-transparent transition-all transform hover:scale-105 inline-flex items-center"
            >
              <Mail className="mr-2" size={20} />
              Say Hi!
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <div className="relative w-fit mx-auto">
                <Image
                  src="/assets/foto_profil.jpg"
                  alt="Profile"
                  width={400}
                  height={400}
                  className="rounded-2xl shadow-2xl border-4 border-purple-500/30"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-purple-500/20 to-transparent"></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-purple-100 leading-relaxed">
                I&apos;m an undergraduate student majoring in Informatics with
                current interest in Software Development and AI. I&apos;ve
                always been driven to contribute to the tech-driven society. I
                work well in both collaborative and individual environments. As
                I have a firm desire to grow, I&apos;m always eager to expand my
                skill set and enjoy making new connections with others. I&apos;m
                actively on the lookout for new opportunities to get involved
                in!
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-600/50 p-2 rounded-full mt-1">
                    <svg
                      className="text-white"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>
                  <div>
                    {/* <p className="text-purple-300 text-sm">Education</p> */}
                    <p className="text-white font-medium">
                      Informatics Engineering
                    </p>
                    <p className="text-purple-300 text-sm">
                      University of Brawijaya • 2023-2027 (expected)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Experience
          </h2>

          {/* Experience Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Work", "Organizational", "Volunteer"].map((category) => (
              <button
                key={category}
                onClick={() => setExperienceFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                  experienceFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25"
                    : "bg-purple-800/30 text-purple-300 hover:bg-purple-700/50 hover:text-white border border-purple-500/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {filteredExperience.map((job, index) => (
              <Card
                key={index}
                className="bg-purple-800/30 border-purple-500/30 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {job.title}
                      </h3>
                      <p className="text-purple-300">{job.company}</p>
                      <p className="text-purple-400 text-sm">{job.location}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center text-purple-400 mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span className="text-sm">{job.period}</span>
                      </div>
                      <Badge className="bg-purple-600/80 text-white text-xs">
                        {job.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {job.description.map((desc, i) => (
                      <p
                        key={i}
                        className="text-purple-100 text-sm leading-relaxed"
                      >
                        • {desc}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredExperience.length === 0 && (
            <div className="text-center py-12">
              <p className="text-purple-300 text-lg">
                {experienceFilter === "Work"
                  ? "Work experience coming soon!"
                  : `No ${experienceFilter.toLowerCase()} experience found.`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                  activeFilter === category
                    ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/25"
                    : "bg-purple-800/30 text-purple-300 hover:bg-purple-700/50 hover:text-white border border-purple-500/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="pt-0 bg-purple-800/30 border-purple-500/30 backdrop-blur-sm hover:bg-purple-700/40 transition-all transform hover:scale-105 overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-purple-600/80 text-white text-xs backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pb-6 pt-4 space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="text-purple-100 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies &&
                      project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-purple-600/50 text-white text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white flex-1"
                      asChild
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2" size={16} />
                        {project.category === "UI/UX" ? "Prototype" : "Demo"}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-700/50 hover:text-white flex-1 bg-transparent"
                      asChild
                    >
                      {project.category === "UI/UX" ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Paintbrush className="mr-2" size={16} />
                          View Design
                        </a>
                      ) : (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2" size={16} />
                          Code
                        </a>
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-purple-300 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Deep Dive Into My Brain Section */}
      <section id="brain" className="py-20 relative z-10 mx-auto">
        <div className="container mx-auto px-6 items-center">
          <h2 className="text-4xl text-center font-bold mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Dive Into My Brain
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                title: "How I work",
                content: [
                  "I really enjoy working when I’m in the flow state, fully focused and making great progress. I love putting my headphones on to tune out distractions and fully focus on the task at hand.",
                  "My brain works like a debugger, breaking down complex issues into smaller, manageable pieces. 🧠",
                  "I care a lot about making sure everyone on the team feels included. If someone feels left out, I feel that too. I believe that a strong team is built on people feeling heard, valued, and connected. 🙂",
                  "I always try to stay open to different ideas, whether they are small tips or big changes. I like to remind myself that if someone sees things differently, it doesn't mean they are wrong. It could mean there is something I haven't considered yet.",
                ],
              },
              {
                title: "What I value in teammates",
                content: [
                  "I really value consistency above all else. I believe that success, whether it’s reaching a goal or overcoming a challenge, comes from staying committed. When a teammate is consistent, it tells me a lot about their character. 💪",
                  "I appreciate teammates I can rely on. That means meeting deadlines, following through on what they say, and if something comes up, communicating openly and honestly.",
                  "I respect coworkers who are goal-oriented and focused on what really matters. I appreciate it when someone works on the root of a problem, not just quick fixes, and cares more about the process than just the end result. 🙂",
                ],
              },
              {
                title: "What I value in friends",
                content: [
                  "I don’t expect perfect loyalty or constant attention. I know you have your own life, and you’re not a side character in mine. I just hope you value the friendship too. 🙂",
                  "I respect friends who can be real with me. If we can’t be honest with each other, are we really friends?",
                  "I really value friends who are open about what they’re going through. If they’re struggling, I’d rather know or at least be aware of it so I can be there for them. 🤗",
                  "I appreciate friends who can celebrate each other's wins and still keep a little friendly competition going. It’s uplifting when we push each other to do better in positive ways. 🙌",
                ],
              },
              {
                title: "What people misunderstand about me",
                content: [
                  "People sometimes think I’m too serious, but I actually love humor and enjoy being playful. Just send me the meme you found on the internet, I’ll probably laugh way too hard at it. 😆",
                  "I’m not indecisive. I just like to take my time understanding the full picture before choosing a side. Even when one side seems right, I hold off on making a call until I’ve looked at everything carefully. 🤓",
                  "I’m an introvert who actually enjoys being social 👋, but only when it feels right. I recharge best on my own, but when I’m around the right people or in a meaningful setting, I genuinely love connecting and having good conversations.",
                ],
              },
              {
                title: "How to best communicate with me",
                content: [
                  "Be direct and honest. Clear communication is important to me. 🙂",
                  "I prefer written communication for complex topics, but I’m happy to brainstorm face-to-face too.",
                  "I prefer not to jump into a heavy conversation or big project without some heads-up. Giving me at least a day’s notice helps a lot. It allows me to show up fully prepared, both mentally and physically, so I can give it my best effort.",
                ],
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={
                  <ul className="list-disc list-inside space-y-2">
                    {item.content.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Get in Touch
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <Card className="bg-purple-800/30 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Contact
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-600/50 p-3 rounded-full">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm">Email</p>
                        <a
                          href="mailto:indahgithadev@gmail.com"
                          className="text-white hover:text-purple-300 transition-colors"
                        >
                          indahgithadev@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-600/50 p-3 rounded-full">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm">WhatsApp</p>
                        <a
                          href="https://wa.me/6287863533982"
                          className="text-white hover:text-purple-300 transition-colors"
                        >
                          +6287863533982
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="bg-purple-600/50 p-3 rounded-full">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-purple-300 text-sm">Location</p>
                        <p className="text-white">
                          Malang City, East Java, Indonesia
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact Form */}
              <Card className="bg-purple-800/30 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Send a Message
                  </h3>

                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-purple-300 text-sm mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-purple-300 text-sm mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-purple-300 text-sm mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 bg-purple-900/50 border border-purple-500/30 rounded-lg text-white placeholder-purple-400 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                        placeholder="Tell me about your project or just say hi!"
                      />
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 rounded-lg transition-all transform hover:scale-105">
                      <Mail className="mr-2" size={20} />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-300">
            © 2025 Indah Githa. Made with ❤️ and a cup of matcha latte.
          </p>
        </div>
      </footer>
    </div>
  );
}
