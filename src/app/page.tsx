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
} from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

// Add this component before the main Portfolio component
function AccordionItem({ title, content }: { title: string; content: string }) {
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
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Flutter", "Provider", "RestAPI", "Tensorflow Lite", "OpenCV"],
      category: "Mobile App",
    },
    {
      title: "Includemy",
      description:
        "An application that supports people with disabilities in developing skills and finding employment, with features such as mentoring, certification, and job application tools.",
      image: "/assets/includemy.png",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Flutter", "GetX", "RestAPI"],
      category: "Mobile App",
    },
    {
      title: "Nusastra",
      description:
        "An application that helps users learn traditional languages through gamification, with features such as NusaSmart, NusaFriend, NusaLingo, and NusaMaps.",
      image: "/assets/nusastra.png",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Flutter", "BLoC", "RestAPI", "OpenAI"],
      category: "Mobile App",
    },
    {
      title: "Morie",
      description:
       "An application designed to prevent and manage baby blues and postpartum depression, offering features such as access to healthcare providers, community support, journaling, mental and physical wellness tips, and self-care tools.",
      image: "/assets/Morie.png",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Flutter", "Firebase"],
      category: "Mobile App",
    },
    {
      title: "TRIPLED",
      description:
        "A smart school pickup solution integrated with IP camera and machine learning. It optimizes traffic flow and enhances efficiency, ensuring a smarter, safer experience for students and parents.",
      image: "/assets/TRIPLED.png",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Python", "EasyOCR", "YOLOv8", "Ultralytics", "ONNX", "WebSocket", "HTML & CSS", "JavaScript"],
      category: "Website",
    },
    {
      title: "SARPRASKU",
      description:
        "A web app designed to simplify the process of borrowing facilities and equipment at FILKOM by centralizing submissions, availability checks, and tracking in one platform. SARPRASKU helps both students and staff save time and reduce confusion by offering real-time availability, guided forms, and transparent status updates.",
      image: "/assets/sarprasku.png",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Typescript", "Next.js", "Tailwind", "Shadcn", "Pocketbase"],
      category: "Website",
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
              I&apos;m an undergraduate computer science student based in Malang,
              Indonesia. I&apos;m passionate about building useful and meaningful
              technology that can solve real-world problems.
            </p>
          </div>

          <div className="flex justify-center space-x-6 animate-fade-in-up animation-delay-300">
            <a
              href="#"
              className="text-purple-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="#"
              className="text-purple-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a
              href="#"
              className="text-purple-300 hover:text-white transition-colors transform hover:scale-110"
            >
              <Instagram size={32} />
            </a>
          </div>

          {/* Add Download CV and Say Hi buttons here */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-500">
            <Button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-12 py-5 rounded-full transition-all transform hover:scale-105">
              <Download className="mr-2" size={20} />
              Download CV
            </Button>
            <Button
              variant="outline"
              className="border-purple-500/50 text-purple-300 hover:bg-purple-700/50 hover:text-white px-12 py-5 rounded-full bg-transparent transition-all transform hover:scale-105"
            >
              <Mail className="mr-2" size={20} />
              Say Hi!
            </Button>
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
                current interest in Software Development and AI/ML. I&apos;ve always been
                driven to contribute to the tech-driven society. I work well in
                both collaborative and individual environments. As I have a firm
                desire to grow, I&apos;m always eager to expand my skill set and
                enjoy making new connections with others. I&apos;m actively on the
                lookout for new opportunities to get involved in!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-purple-400" size={20} />
                  <span>Malang City, East Java</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-purple-400" size={20} />
                  <span>indahgitha99@gmail.com</span>
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
                    {project.technologies.map((tech) => (
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
                        {project.category === "UI/UX" ? "View Design" : "Demo"}
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-500/50 text-purple-300 hover:bg-purple-700/50 hover:text-white flex-1 bg-transparent"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2" size={16} />
                        {project.category === "UI/UX" ? "Files" : "Code"}
                      </a>
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
          <h2 className="text-4xl text-center text-centera font-bold mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
            Dive Into My Brain
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: "How I work.",
                content:
                  "I approach every problem with curiosity and systematic thinking. My brain works like a debugger - breaking down complex issues into smaller, manageable pieces. I believe in iterative development, continuous testing, and always keeping the end user in mind.",
              },
              {
                title: "What I value in teammates.",
                content:
                  "I value teammates who are collaborative, communicate openly, and aren't afraid to ask questions. I appreciate people who take ownership of their work, are willing to help others, and bring diverse perspectives to problem-solving.",
              },
              {
                title: "What I value in friends.",
                content:
                  "Authenticity, loyalty, and a good sense of humor. I cherish friends who challenge me to grow, support me through difficulties, and celebrate successes together. I value deep conversations and shared experiences over surface-level interactions.",
              },
              {
                title: "What I don't have patience for.",
                content:
                  "Micromanagement, unnecessary meetings that could be emails, and people who don&apos;t respect others&apos; time. I also struggle with perfectionism paralysis - sometimes done is better than perfect, and I'm learning to embrace that philosophy.",
              },
              {
                title: "What people misunderstand about me.",
                content:
                  "People often think I'm introverted because I&apos;m thoughtful and deliberate in my responses, but I actually love collaborating and discussing ideas. They might also assume I&apos;m overly serious, but I have a playful side and enjoy creative problem-solving.",
              },
              {
                title: "How to best communicate with me.",
                content:
                  "Be direct and honest - I appreciate straightforward communication. Give me context for decisions and changes. I prefer written communication for complex topics so I can process and respond thoughtfully, but I'm always open to face-to-face discussions for brainstorming.",
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 relative z-10 border-t border-purple-500/20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-300">
            © 2025 Indah Githa. Made with ❤️ and lots of coffee.
          </p>
        </div>
      </footer>
    </div>
  );
}
