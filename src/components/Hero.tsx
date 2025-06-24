import { ArrowUpDown } from "lucide-react";
import React from "react";

interface HeaderProps {
  onSortToggle: () => void;
  isAscending: boolean;
}

const Hero: React.FC<HeaderProps> = ({ onSortToggle, isAscending }) => {
  return (
    <header className="w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
          My App Hub
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Below you can browse some useful and some not so useful apps and tools
          I made
        </p>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onSortToggle}
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-all duration-200"
          aria-label={`Sort ${isAscending ? "descending" : "ascending"}`}
        >
          <ArrowUpDown size={16} className="text-primary" />
          <span className="text-sm text-muted-foreground">
            {isAscending ? "A-Z" : "Z-A"}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
