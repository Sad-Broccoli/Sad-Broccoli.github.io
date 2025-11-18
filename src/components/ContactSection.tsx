import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";
const ContactSection = () => {
  return <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            I'm always open to new a
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <a href="mailto:poyeekwan22702@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
              <a href="https://www.linkedin.com/in/polly-kwan-292b28245/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;