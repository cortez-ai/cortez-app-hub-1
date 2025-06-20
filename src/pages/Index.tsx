import React, { useState, useMemo } from "react";
import { projects } from "@/assets/projects";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

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
        <Header onSortToggle={handleSortToggle} isAscending={isAscending} />

        <main className="w-full max-w-4xl mx-auto">
          {/* Projects Grid */}
          <div className="space-y-4">
            {sortedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              Built with React, TypeScript, and a lot of{" "}
              <span className="text-primary">caffeine</span>
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Index;
