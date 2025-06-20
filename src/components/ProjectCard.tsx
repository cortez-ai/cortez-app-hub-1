import React from "react";
import { GitBranch } from "lucide-react";
import { Project } from "@/assets/projects";
import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleSourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.githubUrl) {
      window.open(project.githubUrl, "_blank");
    }
  };

  return (
    <article
      className="portfolio-card animate-slide-up group cursor-pointer h-32"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleCardClick}
    >
      <div className="flex h-full">
        {/* Image Section */}
        <div className="w-48 flex-shrink-0">
          <ImageCarousel images={project.images} projectName={project.name} />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Source Code Button */}
          {project.githubUrl && (
            <div className="flex justify-end mt-2">
              <button
                onClick={handleSourceClick}
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`View source code of ${project.name}`}
              >
                <GitBranch size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
