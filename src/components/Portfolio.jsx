import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Footer from "./Footer";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./CustomCursor";
import ParticlesBackground from "./ParticlesBackground";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import DarkModeToggle from "./DarkModeToggle";

import prepbotImg from "../assets/projects/prepbot.png";
import oasisImg from "../assets/projects/oasis.png";
import weatherImg from "../assets/projects/weather.png";
import foodImg from "../assets/projects/foodMart.png";

import ibmInternshipCert from "../assets/certificates/ibmInternshipCert.png";
import reactUdemyCert from "../assets/certificates/reactUdemyCert.png";
import nptelJavaCert from "../assets/certificates/nptelJavaCert.png";
import oracleCert from "../assets/certificates/oracleCert.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [darkMode, setDarkMode] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [particles, setParticles] = useState([]);

  // Loading
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2500);
  }, []);

  // 🔗 Handle direct links like /#projects or /#certificates
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setIsVisible((prev) => ({ ...prev, [hash]: true }));
          setActiveSection(hash);
        }
      }, 300);
    }
  }, []);

  // Generate particles
  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        }))
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Cursor trail
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorTrail((prev) => [
        ...prev.slice(-10),
        { x: e.clientX, y: e.clientY, id: crypto.randomUUID() },
      ]);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Data
  const projects = [
    {
      title: "PrepBot: Interview Practice System",
      description:
        "A MERN app for technical interview prep using a locally hosted AI. Generates role-specific questions, evaluates answers with hybrid AI + rules, and provides personalized feedback with secure, privacy-first session analytics.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Open-Meteo API",
        "OpenAQ API",
        "Ollama (phi3:mini)",
        "DSA",
      ],
      image: prepbotImg,
      link: "https://ai-interview-frontend-ivory.vercel.app/",
    },
    {
      title: "The Wild Oasis (Hotel Management System)",
      description:
        "A full-stack hotel management system with user and admin dashboards for bookings and operations. Built with React, Next.js, Tailwind, Styled Components, and Supabase for authentication, data, and real-time workflows.",
      tech: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Styled Components",
        "Supabase",
      ],
      image: oasisImg,
      link: "https://oasis-hotel-hub.vercel.app/login",
    },
    {
      title: "Weather & AQI Platform",
      description:
        "A MERN analytics app using Open-Meteo and OpenAQ for real-time weather and air quality. Implements DSA-based forecasting, priority alerts, decision-tree AQI classification, and LRU caching on a fully free, scalable stack.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Open-Meteo API",
        "OpenAQ API",
        "DSA",
      ],
      image: weatherImg,
      link: "https://weather-aqi-platform.vercel.app/",
    },
    {
      title: "ClinckNChow",
      description:
        "A modern and responsive food ordering web application built with React JS, Bootstrap, and React Router. Users can browse food items, add them to a cart, and place orders — all with a smooth single-page application (SPA) experience.",
      tech: ["React JS", "React Router", "Bootstrap", "Vite"],
      image: foodImg,
      link: "https://ai-interview-frontend-ivory.vercel.app/",
    },
  ];

  const certificates = [
    {
      title:
        "PBEL Equivalent to Virtual Internship – Web, Mobile Development & Marketing",
      issuer: "IBM Developer Skills Network",
      date: "2025",
      description:
        "Industry-recognized virtual internship focused on web and mobile development, project-based learning, and professional skills.",
      image: ibmInternshipCert,
      link: "https://drive.google.com/file/d/1StONUW7JyTH7LbK_anleC_5khDdQoE2_/view",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL (IIT Kharagpur) – SWAYAM",
      date: "2025",
      description:
        "Elite certification in Java programming covering OOP, data structures, exception handling, and application development with a proctored exam.",
      image: nptelJavaCert,
      link: "https://drive.google.com/file/d/1iY1yE6oxYuc-JmBcmUtN7kzT6o0gtwTs/view",
    },
    {
      title: "The Ultimate React Course 2025: React, Next.js, Redux & More",
      issuer: "Udemy",
      date: "2025",
      description:
        "Comprehensive React training covering modern React, Next.js, Redux, hooks, performance optimization, and real-world projects.",
      image: reactUdemyCert,
      link: "https://drive.google.com/file/d/12MtXUqPbkn6PPkabka_IwqO1KiU79sWD/view",
    },
    {
      title: "Oracle Certified Foundations Associate",
      issuer: "Oracle University",
      date: "2025",
      description:
        "Foundational certification covering cloud infrastructure, databases, security, and core IT concepts using Oracle Cloud Infrastructure (OCI).",
      image: oracleCert,
      link: "https://drive.google.com/file/d/1I5OkDFfTr7RIyYa-Hwd6E-Gv9tSl2hE4/view?usp=drive_link",
    },
  ];

  const skills = [
    "MongoDB",
    "Express.js",
    "React.js",
    "Node.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "Redux",
    "REST APIs",
    "Git",
    "Docker",
  ];

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      {isLoading && <LoadingScreen />}

      <CustomCursor cursorPos={cursorPos} cursorTrail={cursorTrail} />
      <ParticlesBackground particles={particles} />
      <ScrollProgress scrollProgress={scrollProgress} />
      <BackToTop show={showBackToTop} onClick={scrollToTop} />
      <DarkModeToggle
        darkMode={darkMode}
        toggle={() => setDarkMode(!darkMode)}
      />

      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />

        <Home isVisible={isVisible} />
        <About isVisible={isVisible} skills={skills} />
        <Projects
          isVisible={isVisible}
          projects={projects}
          setSelectedImage={setSelectedImage}
        />
        <Certificates
          isVisible={isVisible}
          certificates={certificates}
          setSelectedImage={setSelectedImage}
        />
        <Contact isVisible={isVisible} />
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
