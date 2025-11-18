import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Palette, Video, Layers } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Product & UI/UX",
      description: "Creating intuitive digital experiences",
      icon: Palette,
      skills: ["Figma", "UI Design", "Wireframing", "Prototyping", "User Research", "Design Systems"]
    },
    {
      title: "Motion & 3D",
      description: "Bringing ideas to life through animation",
      icon: Layers,
      skills: ["3D Animation", "Motion Design", "Blender", "Cinema 4D", "Character Animation"]
    },
    {
      title: "Post-production & Editing",
      description: "Crafting compelling visual stories",
      icon: Video,
      skills: ["Adobe Premiere", "DaVinci Resolve", "After Effects", "Color Grading", "Sound Design"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-card">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Skills
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          A diverse toolkit for creating cohesive visual experiences across digital and motion media.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.title} className="border-border">
                <CardHeader>
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
