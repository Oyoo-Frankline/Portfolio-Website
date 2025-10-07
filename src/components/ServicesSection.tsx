import { useEffect, useRef } from 'react';
import { Card } from './ui/card';
import { Code, Smartphone, Palette, Globe } from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'I create stunning, responsive websites that drive engagement and provide exceptional user experiences using modern technologies like React, Node.js, and advanced frameworks.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Modern Technologies']
    },
    {
      icon: Smartphone,
      title: 'Software Development',
      description: 'Custom software solutions tailored to your business needs, from desktop applications to complex web systems that streamline your operations.',
      features: ['Custom Solutions', 'Scalable Architecture', 'API Development', 'Database Design']
    },
    {
      icon: Globe,
      title: 'WordPress Development',
      description: 'Dynamic WordPress sites with modern features, custom themes, and powerful functionality that grows with your business needs.',
      features: ['Custom Themes', 'Plugin Development', 'E-commerce Integration', 'Performance Optimization']
    },
    {
      icon: Palette,
      title: 'UX/UI Design',
      description: 'Intuitive and visually appealing designs for web and mobile platforms that enhance user experience and drive conversions.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 px-4 bg-background-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="scroll-reveal text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="scroll-reveal glass p-8 hover:shadow-lg transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;