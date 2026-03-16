import { Project } from "@/models/models";
import { ChevronDown, ChevronUp, ExternalLink, GitBranch } from "lucide-react";
import React, { useState } from "react";
import IconButton from "./IconButton";
import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVisitAppClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank");
    }
  };

  const handleSourceClick = () => {
    if (project.gitUrl) {
      window.open(project.gitUrl, "_blank");
    }
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <article
      className={`portfolio-card animate-slide-up group transition-all duration-300 
        ${isExpanded ? "h-auto" : "md:h-56 h-auto"}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Mobile Layout - Vertical Stack */}
      <div className={"md:hidden"}>
        {/* Image Section - Mobile */}
        <div className="w-full h-48">
          <ImageCarousel
            images={project.images}
            projectName={project.name}
            imageOptions={project.imageOptions}
          />
        </div>

        {/* Content Section - Mobile */}
        <div className="p-4 flex flex-col justify-between h-full">
          <div className="mb-4">
            <div className="mb-2">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200 mb-1">
                {project.name}
              </h3>

              {/* Action Buttons and Status - Mobile */}
              <div className="flex flex-row items-center gap-3">
                <div className="flex flex-row gap-2">
                  {project.liveUrl && (
                    <IconButton
                      onClick={handleVisitAppClick}
                      tooltip="Visit App"
                      ariaLabel={`Visit ${project.name} app`}
                      icon={<ExternalLink size={16} />}
                    />
                  )}
                  {project.gitUrl && (
                    <IconButton
                      onClick={handleSourceClick}
                      tooltip="View Source Code"
                      ariaLabel={`View source code of ${project.name}`}
                      icon={<GitBranch size={16} />}
                    />
                  )}
                </div>
                {!project.liveUrl && (
                  <span className="text-xs text-gray-500 italic">
                    Not currently deployed
                  </span>
                )}
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mt-2">
              {project.description}
            </p>
          </div>

          {/* Controls - Mobile */}
          <div className="flex items-center justify-end gap-1 mt-2">
            {/* Expand/Collapse Button */}
            <IconButton
              onClick={handleExpandClick}
              tooltip={isExpanded ? "Collapse details" : "Expand details"}
              ariaLabel={isExpanded ? "Collapse details" : "Expand details"}
              icon={
                isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              }
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Horizontal */}
      <div className={`hidden md:flex h-56`}>
        {/* Image Section - Desktop */}
        <div className="w-80 flex-shrink-0 p-4">
          <ImageCarousel
            images={project.images}
            projectName={project.name}
            imageOptions={project.imageOptions}
          />
        </div>

        {/* Content Section - Desktop */}
        <div className="flex-1 p-4 flex flex-col justify-between">
          <div>
            <div className="mb-2">
              <div className="flex flex-row justify-between items-start">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.name}
                </h3>
                <div className="flex flex-row gap-2 ml-2">
                  {project.liveUrl && (
                    <IconButton
                      onClick={handleVisitAppClick}
                      tooltip="Visit App"
                      ariaLabel={`Visit ${project.name} app`}
                      icon={<ExternalLink size={16} />}
                    />
                  )}
                  {project.gitUrl && (
                    <IconButton
                      onClick={handleSourceClick}
                      tooltip="View Source Code"
                      ariaLabel={`View source code of ${project.name}`}
                      icon={<GitBranch size={16} />}
                    />
                  )}
                </div>
              </div>
              {!project.liveUrl && (
                <span className="text-xs text-gray-500 italic">
                  Not currently deployed
                </span>
              )}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-end gap-1 mt-2">
            <IconButton
              onClick={handleExpandClick}
              tooltip={isExpanded ? "Collapse details" : "Expand details"}
              ariaLabel={isExpanded ? "Collapse details" : "Expand details"}
              icon={
                isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              }
            />
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div className="border-t border-border p-4 animate-fade-in details-container">
          <p
            className="text-foreground leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: project.detailedDescription || `No detailed description`,
            }}
          >
            {}
          </p>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
