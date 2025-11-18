import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  role: string;
  tools: string[];
  buttonText: string;
}

const ProjectCard = ({ title, description, role, tools, buttonText }: ProjectCardProps) => {
  return (
    <Card className="h-full flex flex-col card-hover border-border">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium text-foreground mb-2">Role</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-foreground mb-2">Tools</p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <Badge key={tool} variant="secondary" className="text-xs">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group">
          {buttonText}
          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
