import { useEffect, useRef } from "react";
import { Card } from "./ui/card";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  const aboutText = [
    "I'm a Web Designer, Software Developer, and AI Enthusiast passionate about turning ideas into smart, user-friendly digital experiences.",
    "With training from Moringa School, Power Learn Project Academy, and ALX Africa, I've built a strong foundation in both front-end and back-end development, and I love bringing it all together to solve real-world problems.",
    "I work with tools like the MERN stack (MongoDB, Express.js, React.js, Node.js) and modern frameworks like Next.js and TypeScript to build fast, scalable web applications.",
    "On the front end, I focus on clean, responsive design using React, Next.js, and Tailwind CSS. On the back end, I build reliable, secure APIs using Express.js, connected to databases like MongoDB and MySQL.",
    "In addition to my full-stack expertise, I have extensive experience in WordPress development, specializing in eCommerce solutions using WooCommerce and page building with Elementor. I focus on custom WordPress theme development, creating responsive, accessible designs, and integrating WooCommerce for seamless online store functionality.",
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="scroll-reveal space-y-6">
            {aboutText.map((paragraph, index) => (
              <p
                key={index}
                className="text-muted-foreground leading-relaxed text-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Stats Cards */}
          <div className="scroll-reveal grid grid-cols-2 gap-4">
            <Card className="glass p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">25+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>

            <Card className="glass p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">2+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>

            <Card className="glass p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </Card>

            <Card className="glass p-6 text-center hover:shadow-lg transition-all duration-300">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
