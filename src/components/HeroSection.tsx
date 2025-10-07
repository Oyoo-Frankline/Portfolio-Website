import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ChevronDown, Download, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "I'm a website and software developer who specializes in full-stack web development and building smart, data-driven solutions that bring ideas to life.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated background overlay */}
      <div className="absolute inset-0 animated-bg opacity-50" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            I am <span className="gradient-text">Frankline</span>
          </h1>
          
          <div className="h-32 md:h-24 flex items-center justify-center">
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl leading-relaxed px-4">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={scrollToContact}
            className="text-lg px-8"
          >
            <Mail className="mr-2" size={20} />
            Hire Me
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
            onClick={scrollToContact}
            className="text-lg px-8"
          >
            <Download className="mr-2" size={20} />
            Contact
          </Button>
        </div>

        {/* Scroll indicator */}
        <div 
          className="animate-bounce cursor-pointer"
          onClick={scrollToAbout}
        >
          <ChevronDown size={32} className="mx-auto text-muted-foreground hover:text-primary transition-colors" />
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;