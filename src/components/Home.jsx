import { Code, Github, Linkedin, Mail } from "lucide-react";

const Home = ({ isVisible }) => {
  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8
        bg-gradient-to-b from-[#F9F7F7] to-[#DBE2EF]
        dark:bg-none dark:from-transparent dark:to-transparent
        dark:bg-[#0F0F0F]
      "
    >
      <div
        className={`
          text-center max-w-5xl mx-auto
          transition-all duration-1000 ease-out
          ${isVisible.home ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* Icon */}
        <div className="mb-10">
          <div
            className="
              w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto
              bg-[#3F72AF] rounded-full flex items-center justify-center
              shadow-xl
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl
            "
          >
            <Code size={80} className="text-[#F9F7F7] sm:w-24 sm:h-24" />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
            text-[#112D4E] dark:text-[#F9F7F7]
            mb-4
          "
        >
          Hi, I'm <span className="text-[#3F72AF]">Shubham Gupta</span>
        </h1>

        {/* Subtitle */}
        <p
          className="
            text-xl sm:text-2xl md:text-3xl
            text-[#112D4E]/80 dark:text-[#F9F7F7]/80
            mb-10
          "
        >
          MERN Stack Developer
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {[
            {
              href: "https://github.com/sg2403gupta",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/shubham-gupta-a2855b236/",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "mailto:shubham.gupta.stack@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="
                text-[#112D4E] dark:text-[#F9F7F7]/70
                transition-all duration-300
                hover:-translate-y-1 hover:text-[#3F72AF]
              "
            >
              <Icon size={32} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
