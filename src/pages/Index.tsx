import React, { useState, useMemo } from "react";
import { projects, sortProjects, Project } from "@/assets/projects";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";

const Index: React.FC = () => {
  const [currentSort, setCurrentSort] = useState<"name" | "year" | "category">(
    "year",
  );

  const sortedProjects = useMemo(() => {
    return sortProjects(projects, currentSort);
  }, [currentSort]);

  const handleSortChange = (sortBy: "name" | "year" | "category") => {
    setCurrentSort(sortBy);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <Header onSortChange={handleSortChange} currentSort={currentSort} />

        <main className="w-full max-w-4xl mx-auto">
          {/* Projects Grid */}
          <div className="space-y-8">
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
