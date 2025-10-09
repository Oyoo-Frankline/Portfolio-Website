import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import legacyProject from "@/assets/project-ecommerce.png";
import pulseProject from "@/assets/project-Pulse.png";
import zuriProject from "@/assets/project-ecommerce1.png";

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: "Legacy Kenya",
      description:
        "An eCommerce platform for home appliances, offering a wide range of products with a seamless shopping experience. Built with WordPress and WooCommerce, featuring a responsive design, integrated payment gateway, and user-friendly navigation.",
      image: legacyProject,
      technologies: [
        "WordPress",
        "WooCommerce",
        "Elementor",
        "PHP",
        "Payment Gateway",
      ],
      liveUrl: "https://legacykenya.co.ke/",
      githubUrl: "#",
      category: "Ecommerce",
    },
    {
      title: "Pulse Sound",
      description:
        "Modern e-learning platform with real-time features, course management, and JWT authentication. Features live chat functionality and comprehensive student dashboard.",
      image: pulseProject,
      technologies: ["React.js", "HTML", "TailwindCss"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Mini-Ecommerce",
    },
    {
      title: "Zuri Brands Limited - Company Website",
      description:
        " A dynamic company website for Zuri Brands, a leading retailer of soaps and detergents. Built using HTML, CSS, JavaScript, and DOM manipulation, the website offers an engaging and responsive design, showcasing the company's products, values, and mission. The site is optimized for mobile devices and features smooth navigation, product details, and an about page.",
      image: zuriProject,
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "DOM Manipulation",
        "Media Queries",
        "Responsive Design",
      ],
      liveUrl: "https://zuri-brands-limited.vercel.app/",
      githubUrl: "https://github.com/Oyoo-Frankline/Zuri-Brands-Limited",
      category: "Web-Development",
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
