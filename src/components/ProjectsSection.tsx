import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  const projects = [
    {
      title: "UI/UX Developer",
      description: "A comprehensive digital product interface case study focusing on user-centered design and intuitive interactions.",
      role: "Lead UI/UX Designer & Developer",
      tools: ["Figma", "Adobe XD", "React", "Tailwind CSS"],
      buttonText: "View Case Study"
    },
    {
      title: "3D Animation",
      description: "A motion piece exploring visual narrative through 3D environments and character animation.",
      role: "3D Artist & Animator",
      tools: ["Blender", "Cinema 4D", "After Effects"],
      buttonText: "Watch Reel"
    },
    {
      title: "Editing",
      description: "A storytelling reel showcasing video editing techniques and narrative flow across multiple projects.",
      role: "Video Editor & Colorist",
      tools: ["DaVinci Resolve", "Premiere Pro", "After Effects"],
      buttonText: "Watch Reel"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
          A selection of my recent work across UI/UX design, 3D animation, and video editing.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
