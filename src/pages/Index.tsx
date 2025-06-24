import { projects } from "@/assets/projects";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import React, { useMemo, useState } from "react";

const Index: React.FC = () => {
  const [isAscending, setIsAscending] = useState(true);

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return isAscending ? comparison : -comparison;
    });
  }, [isAscending]);

  const handleSortToggle = () => {
    setIsAscending(!isAscending);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Hero onSortToggle={handleSortToggle} isAscending={isAscending} />

        <main className="w-full max-w-5xl mx-auto">
          {/* Projects Grid */}
          <div className="space-y-4">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Built with React and TypeScript by{" "}
              <span className="underline">
                <a href="https://github.com/vicortez" rel="noopener">
                  Victor Cortez
                </a>
              </span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
