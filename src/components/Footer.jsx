import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        bg-[#F9F7F7] dark:bg-[#0F0F0F]
        text-[#112D4E]/70 dark:text-[#F9F7F7]/70
        py-10 border-t
        border-[#3F72AF]/20
      "
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-6 text-sm sm:text-base">
          © 2025 Shubham Gupta. All rights reserved.
        </p>

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
                text-[#3F72AF]
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:text-[#2F5F99]
                dark:hover:text-[#DBE2EF]
              "
            >
              <Icon size={26} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
