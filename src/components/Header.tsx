import React from "react";

interface HeaderProps {
  onSortChange: (sortBy: "name" | "year" | "category") => void;
  currentSort: "name" | "year" | "category";
}

const Header: React.FC<HeaderProps> = ({ onSortChange, currentSort }) => {
  return (
    <header className="w-full max-w-4xl mx-auto px-6 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
          Below you can browse some useful and some not so useful apps and tools
          I made
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="flex items-center gap-2 p-1 bg-card border border-border rounded-lg">
          <span className="text-sm text-muted-foreground px-3">Sort by:</span>
          {(["name", "year", "category"] as const).map((sort) => (
            <button
              key={sort}
              onClick={() => onSortChange(sort)}
              className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 capitalize ${
                currentSort === sort
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {sort}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
