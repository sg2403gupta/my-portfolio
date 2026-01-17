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

  /* ---------------- DARK MODE (✅ FIX) ---------------- */
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  /* ---------------- LOADING ---------------- */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  /* ---------------- HASH NAV ---------------- */
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    setTimeout(() => {
      const section = document.getElementById(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsVisible((prev) => ({ ...prev, [hash]: true }));
        setActiveSection(hash);
      }
    }, 300);
  }, []);

  /* ---------------- PARTICLES ---------------- */
  useEffect(() => {
    setParticles(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
      })),
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: (p.x + p.speedX + 100) % 100,
          y: (p.y + p.speedY + 100) % 100,
        })),
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  /* ---------------- CURSOR ---------------- */
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

  /* ---------------- SCROLL ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollProgress((window.scrollY / total) * 100);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------- OBSERVER ---------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [e.target.id]: true }));
            setActiveSection(e.target.id);
          }
        });
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll("section").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /* ---------------- DATA ---------------- */
  const projects = [
    {
      title: "PrepBot: Interview Practice System",
      description:
        "A MERN app for interview prep using local AI with evaluation and analytics.",
      tech: ["MongoDB", "Express", "React", "Node", "Ollama", "DSA"],
      image: prepbotImg,
      link: "https://ai-interview-frontend-ivory.vercel.app/",
    },
    {
      title: "The Wild Oasis",
      description: "Hotel management system with admin & user dashboards.",
      tech: ["React", "Next.js", "Tailwind", "Supabase"],
      image: oasisImg,
      link: "https://oasis-hotel-hub.vercel.app/login",
    },
    {
      title: "Weather & AQI Platform",
      description: "Weather + AQI analytics with caching and alerts.",
      tech: ["MongoDB", "Express", "React", "Node"],
      image: weatherImg,
      link: "https://weather-aqi-platform.vercel.app/",
    },
    {
      title: "ClickNChow",
      description: "Food ordering SPA with cart and routing.",
      tech: ["React", "Vite", "Bootstrap"],
      image: foodImg,
      link: "https://ai-interview-frontend-ivory.vercel.app/",
    },
  ];

  const certificates = [
    {
      title: "IBM Virtual Internship",
      issuer: "IBM Developer Skills Network",
      date: "2025",
      image: ibmInternshipCert,
      link: "https://drive.google.com/",
    },
    {
      title: "Programming in Java",
      issuer: "NPTEL – IIT Kharagpur",
      date: "2025",
      image: nptelJavaCert,
      link: "https://drive.google.com/",
    },
    {
      title: "Ultimate React Course",
      issuer: "Udemy",
      date: "2025",
      image: reactUdemyCert,
      link: "https://drive.google.com/",
    },
    {
      title: "Oracle Foundations Associate",
      issuer: "Oracle University",
      date: "2025",
      image: oracleCert,
      link: "https://drive.google.com/",
    },
  ];

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <div className="min-h-screen">
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
