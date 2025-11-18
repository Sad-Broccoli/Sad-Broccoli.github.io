import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center section-padding pt-32">
      <div className="container-width text-center animate-fade-in-up px-[4px]">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 tracking-tight text-left py-[15px]">
          <span className="space-y-0 ">Hey!</span><br />
          <span>I'm Polly Kwan.  </span>













 
 






 
 












      </h1>
        <p className="text-xl md:text-2xl font-medium mb-6 text-left text-zinc-800 mx-[9px]">
          Multimedia Designer
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={() => scrollToSection("projects")} className="group w-full sm:w-auto">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="w-full sm:w-auto">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>;
};
export default HeroSection;