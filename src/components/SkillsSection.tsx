import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

import jsIcon from "../assets/icons8-javascript-48.png";
import htmlIcon from "../assets/html-icon.png";
import cssIcon from "../assets/icons8-css-48.png";
import reactIcon from "../assets/icons8-react-js-40.png";
import typescriptIcon from "../assets/icons8-typescript-48.png";
import tailwindIcon from "../assets/icons8-tailwindcss-48.png";
import nodeIcon from "../assets/icons8-node-js-48 - Copy.png";
import expressIcon from "../assets/icons8-express-js-64.png";
import mongoIcon from "../assets/icons8-mongodb-48.png";
import mysqlIcon from "../assets/icons8-mysql-48 - Copy.png";
import phpIcon from "../assets/icons8-php-64.png";
import pythonIcon from "../assets/icons8-python-48.png";
import wordpressIcon from "../assets/icons8-wordpress-48 - Copy.png";
import gitIcon from "../assets/icons8-git-48.png";

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      name: "React.js",
      level: 95,
      color: "from-blue-500 to-cyan-400",
      icon: reactIcon,
    },
    {
      name: "JavaScript",
      level: 90,
      color: "from-yellow-500 to-orange-400",
      icon: jsIcon,
    },
    {
      name: "HTML",
      level: 98,
      color: "from-orange-500 to-red-400",
      icon: htmlIcon,
    },
    {
      name: "CSS",
      level: 94,
      color: "from-blue-500 to-blue-300",
      icon: cssIcon,
    },
    {
      name: "TypeScript",
      level: 94,
      color: "from-blue-600 to-blue-400",
      icon: typescriptIcon,
    },
    {
      name: "Tailwind CSS",
      level: 95,
      color: "from-cyan-500 to-blue-400",
      icon: tailwindIcon,
    },
    {
      name: "Node.js",
      level: 93,
      color: "from-green-500 to-emerald-400",
      icon: nodeIcon,
    },
    {
      name: "Express.js",
      level: 87,
      color: "from-gray-600 to-gray-400",
      icon: expressIcon,
    },
    {
      name: "MongoDB",
      level: 97,
      color: "from-green-600 to-green-400",
      icon: mongoIcon,
    },
    {
      name: "MySQL",
      level: 89,
      color: "from-blue-600 to-indigo-400",
      icon: mysqlIcon,
    },
    {
      name: "PHP",
      level: 80,
      color: "from-orange-500 to-red-400",
      icon: phpIcon,
    },
    {
      name: "Python",
      level: 92,
      color: "from-yellow-600 to-blue-500",
      icon: pythonIcon,
    },
    {
      name: "WordPress",
      level: 97,
      color: "from-blue-800 to-blue-600",
      icon: wordpressIcon,
    },
    {
      name: "Git & GitHub",
      level: 91,
      color: "from-gray-800 to-gray-600",
      icon: gitIcon,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 px-4 bg-background-secondary"
    >
      <div className="container mx-auto max-w-6xl">
        {/* === SECTION HEADER === */}
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring your ideas
            to life.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.name}
              className="scroll-reveal glass p-6 hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                  {skill.icon && (
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-8 h-8 object-contain transform transition-transform duration-300 hover:scale-110"
                    />
                  )}
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                <span className="text-sm font-bold gradient-text">
                  {skill.level}%
                </span>
              </div>

              <div className="relative">
                <Progress
                  value={isVisible ? skill.level : 0}
                  className="h-3 bg-muted"
                />
                <div
                  className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 0.1}s`,
                  }}
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
