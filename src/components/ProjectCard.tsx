import { Project } from "@/assets/projects";
import { ChevronDown, ChevronUp, GitBranch } from "lucide-react";
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleSourceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (project.gitUrl) {
      window.open(project.gitUrl, "_blank");
    }
  };

  const handleExpandClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className={`portfolio-card animate-slide-up group cursor-pointer transition-all duration-300 ${
        isExpanded ? "h-auto" : "md:h-56 h-auto"
      }`}
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={handleCardClick}
    >
      {/* Mobile Layout - Vertical Stack */}
      <div className="md:hidden">
        {/* Image Section - Mobile */}
        <div className="w-full h-48">
          <ImageCarousel
            images={project.images}
            projectName={project.name}
            imageOptions={project.imageOptions}
          />
        </div>

        {/* Content Section - Mobile */}
        <div className="p-4">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Controls - Mobile */}
          <div className="flex items-center justify-end gap-1">
            {/* Source Code Button */}
            {project.gitUrl && (
              <button
                onClick={handleSourceClick}
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`View source code of ${project.name}`}
              >
                <GitBranch size={16} />
              </button>
            )}

            {/* Expand/Collapse Button */}
            <button
              onClick={handleExpandClick}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className="hidden md:flex h-56">
        {/* Image Section - Desktop */}
        <div className="w-80 flex-shrink-0">
          <ImageCarousel images={project.images} projectName={project.name} />
        </div>

        {/* Content Section - Desktop */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Controls - Desktop */}
          <div className="flex items-center justify-end gap-1 mt-2">
            {/* Source Code Button */}
            {project.gitUrl && (
              <button
                onClick={handleSourceClick}
                className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={`View source code of ${project.name}`}
              >
                <GitBranch size={16} />
              </button>
            )}

            {/* Expand/Collapse Button */}
            <button
              onClick={handleExpandClick}
              className="p-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label={isExpanded ? "Collapse details" : "Expand details"}
            >
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border p-4 animate-fade-in">
          <p className="text-foreground leading-relaxed">
            {project.detailedDescription}
          </p>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
