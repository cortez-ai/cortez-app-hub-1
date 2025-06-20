import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown, ChevronUp } from "lucide-react";
import { Project } from "@/assets/projects";
import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const categoryColors = {
    useful: "text-primary",
    experimental: "text-secondary",
    fun: "text-purple-400",
  };

  const categoryBadgeColors = {
    useful: "bg-primary/20 text-primary border-primary/30",
    experimental: "bg-secondary/20 text-secondary border-secondary/30",
    fun: "bg-purple-400/20 text-purple-400 border-purple-400/30",
  };

  return (
    <article
      className="portfolio-card animate-slide-up group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section */}
      <div className="relative">
        <ImageCarousel images={project.images} projectName={project.name} />

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium border ${categoryBadgeColors[project.category]}`}
        >
          {project.category}
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-gold/20 text-secondary border border-secondary/30">
            Featured
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
              {project.name}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              {project.description}
            </p>
          </div>
          <span className="text-sm text-muted-foreground ml-4 flex-shrink-0">
            {project.year}
          </span>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Expanded Content */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mb-4 animate-scale-in">
            <p className="text-foreground leading-relaxed">
              {project.detailedDescription}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-primary px-4 py-2 gap-2"
                aria-label={`View live demo of ${project.name}`}
              >
                <ExternalLink size={16} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-button-ghost px-4 py-2 gap-2"
                aria-label={`View source code of ${project.name} on GitHub`}
              >
                <Github size={16} />
                Code
              </a>
            )}
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="portfolio-button-ghost px-3 py-2 gap-1"
            aria-label={isExpanded ? "Collapse details" : "Expand details"}
          >
            <span className="text-sm">{isExpanded ? "Less" : "More"}</span>
            {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
