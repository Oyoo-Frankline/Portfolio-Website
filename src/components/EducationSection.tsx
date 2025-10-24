import { useEffect, useRef } from "react";
import { Card } from "./ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const EducationSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const education = [
    {
      year: "2025",
      title: "Bsc in Computer Science",
      institution: "Univeristy of the People",
      description:
        " Currently pursuing a comprehensive degree program focused on computer systems, algorithms, and software development. The coursework emphasizes both theoretical and practical skills in programming, web technologies, and data structures, preparing for a career in full-stack development and software engineering.",
      color: "from-primary to-secondary",
    },
    {
      year: "2025",
      title: "Data Science and Machine Learning",
      institution: "Africa Leadership Experience (ALX - Africa)",
      description:
        "Currently advancing through the Data Science and Machine Learning program after completing the Data Analytics track. The program focuses on building expertise in data manipulation, visualization, statistical modeling, and machine learning techniques for real-world problem solving",
      color: "from-secondary to-accent",
    },
    {
      year: "2024",
      title: "Software Engineering",
      institution: "Power Learn Project Academy",
      description:
        "Successfully completed an intensive program in Software Development covering Python, web technologies, database management, Node.js, and Express.js, along with essential soft skills. Specialized in web development and Python development, gaining practical experience in building scalable and efficient applications",
      color: "from-secondary to-accent",
    },
    {
      year: "2023",
      title: "Artificial Intelligence Career Essentials",
      institution: "African Leadership Experience (ALX Africa)",
      description:
        "I completed the AI Career Essentials (AiCE) programme with ALX Africa, focused on practical AI skills and career development. I gained hands-on experience with tools like ChatGPT, Canva, Notion, and Grammarly to improve productivity, communication, and problem-solving. The programme strengthened my skills in prompt engineering, data analysis, digital research, and content creation, while enhancing critical thinking, collaboration, and an entrepreneurial mindset.",
      color: "from-accent to-primary",
    },
    {
      year: "2021",
      title: "BSc. Environment & Natural Resources Management",
      institution: "MMUST",
      description:
        "Earned a comprehensive degree focused on sustainable environmental management, resource conservation, and ecological research. Developed strong analytical, research, and problem-solving skills applicable to sustainability and technology-driven environmental solutions.",
      color: "from-primary to-accent",
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
    <section ref={sectionRef} id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A journey of continuous learning and skill development in technology
            and beyond
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

          {education.map((item, index) => (
            <div
              key={index}
              className={`scroll-reveal flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div className="w-5/12">
                <Card className="glass p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}
                    />
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar size={14} className="mr-1" />
                      {item.year}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap size={16} className="text-primary" />
                    <span className="font-semibold text-primary">
                      {item.institution}
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className="w-2/12 flex justify-center">
                <div
                  className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color} shadow-lg animate-pulse-glow`}
                />
              </div>

              {/* Spacer */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
