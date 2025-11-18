import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container-width px-6 md:px-12 lg:px-24 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="text-xl font-semibold text-foreground hover:text-primary transition-colors">Polly  Kwan</button>
          <div className="hidden md:flex items-center gap-8">
            {["about", "projects", "skills", "contact"].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors capitalize"
              >
                {section}
              </button>
            ))}
          </div>
          
        </div>
      </div>
    </nav>;
};
export default Navigation;