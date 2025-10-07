import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import travelProject from "@/assets/project-travel.jpg";
import educationProject from "@/assets/project-education.jpg";
import ecommerceProject from "@/assets/project-ecommerce.png";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Dik Dik Adventures - Tours & Travel",
      description:
        "A comprehensive travel booking platform featuring stunning destinations, tour packages, and integrated payment gateway. Built with modern React architecture and responsive design.",
      image: travelProject,
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Payment Gateway",
      ],
      liveUrl: "https://www.linkedin.com/in/frankline-oyoo-992189304/",
      githubUrl: "#",
      category: "Web Development",
    },
    {
      title: "Instacore Institute Website",
      description:
        "Modern e-learning platform with real-time features, course management, and JWT authentication. Features live chat functionality and comprehensive student dashboard.",
      image: educationProject,
      technologies: [
        "React.js",
        "Express.js",
        "Node.js",
        "Socket.IO",
        "MongoDB",
        "JWT Auth",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Education Platform",
    },
    {
      title: "Zuri Brands Limited - E-commerce",
      description:
        "Full-featured e-commerce platform with product catalog, shopping cart, user authentication, and comprehensive REST API for seamless shopping experience.",
      image: ecommerceProject,
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST API",
      ],
      liveUrl: "https://legacykenya.co.ke/",
      githubUrl: "#",
      category: "E-commerce",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and the solutions I've built for
            various clients
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="scroll-reveal glass overflow-hidden hover:shadow-lg transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary/90 text-primary-foreground text-xs px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="hero"
                    className="flex-1"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink size={14} className="mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="glass"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github size={14} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
