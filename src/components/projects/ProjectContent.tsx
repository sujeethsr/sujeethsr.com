import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectContentProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    technologies: readonly string[];
    github: string;
    status: string;
  };
}

// Status → color mapping. Add new synonyms to these lists any time —
// no need to touch the badge markup below.
const STATUS_COLORS = {
  green: ['live', 'completed', 'shipped'],
  yellow: ['in progress', 'in development', 'active'],
  orange: ['paused', 'on hold'],
  blue: ['planned', 'upcoming'],
  // Anything not listed above (including "archived", "discontinued")
  // falls through to red automatically.
} as const;

function getStatusColor(status: string): 'green' | 'yellow' | 'orange' | 'blue' | 'red' {
  const normalized = status.toLowerCase();
  if (STATUS_COLORS.green.includes(normalized as any)) return 'green';
  if (STATUS_COLORS.yellow.includes(normalized as any)) return 'yellow';
  if (STATUS_COLORS.orange.includes(normalized as any)) return 'orange';
  if (STATUS_COLORS.blue.includes(normalized as any)) return 'blue';
  return 'red';
}

const BADGE_CLASSES: Record<string, string> = {
  green: 'bg-green-500/10 text-green-400 border-green-500/30',
  yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/30',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  red: 'bg-red-500/10 text-red-400 border-red-500/30',
};

const DOT_CLASSES: Record<string, string> = {
  green: 'bg-green-400',
  yellow: 'bg-yellow-400',
  orange: 'bg-orange-400',
  blue: 'bg-blue-400',
  red: 'bg-red-400',
};

const ProjectContent: React.FC<ProjectContentProps> = ({ project }) => {
  const statusColor = getStatusColor(project.status);

  return (
    <div className="p-6">
      <div className="mb-3">
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${BADGE_CLASSES[statusColor]}`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${DOT_CLASSES[statusColor]}`} />
          {project.status}
        </span>
      </div>

      <h3 className="text-xl font-bold text-foreground mb-2">
        {project.title}
      </h3>
      
      <p className="text-sm text-primary font-medium mb-3">
        {project.subtitle}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.slice(0, 4).map((tech, techIndex) => (
          <Badge key={techIndex} variant="outline" className="text-xs bg-primary/10">
            {tech}
          </Badge>
        ))}
        {project.technologies.length > 4 && (
          <Badge variant="outline" className="text-xs bg-primary/10">
            +{project.technologies.length - 4} more
          </Badge>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <Button size="sm" variant="outline" asChild className="flex-1 group/view-code">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2 stroke-white group-hover/view-code:stroke-black" />
            View Code
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProjectContent;
