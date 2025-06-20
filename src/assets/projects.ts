export interface Project {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: "useful" | "experimental" | "fun";
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "task-manager",
    name: "Advanced Task Manager",
    description:
      "A sophisticated task management application with real-time collaboration features.",
    detailedDescription:
      "Built with React, TypeScript, and Firebase, this task manager includes features like drag-and-drop kanban boards, real-time updates, team collaboration, file attachments, and advanced filtering. The app supports multiple project workspaces and includes analytics dashboards for productivity tracking.",
    images: [
      "/src/assets/task-manager-1.jpg",
      "/src/assets/task-manager-2.jpg",
      "/src/assets/task-manager-3.jpg",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    liveUrl: "https://taskmanager.example.com",
    githubUrl: "https://github.com/username/task-manager",
    category: "useful",
    featured: true,
    year: 2024,
  },
  {
    id: "weather-app",
    name: "Minimalist Weather Dashboard",
    description:
      "Clean and intuitive weather application with beautiful animations.",
    detailedDescription:
      "A weather app focused on clean design and smooth user experience. Features include 7-day forecasts, weather maps, location-based detection, and beautiful animated weather icons. The app adapts its theme based on current weather conditions.",
    images: ["/src/assets/weather-1.jpg", "/src/assets/weather-2.jpg"],
    technologies: [
      "React",
      "OpenWeather API",
      "CSS Animations",
      "Geolocation API",
    ],
    liveUrl: "https://weather.example.com",
    githubUrl: "https://github.com/username/weather-app",
    category: "useful",
    featured: true,
    year: 2024,
  },
  {
    id: "color-palette-generator",
    name: "AI Color Palette Generator",
    description:
      "Generate beautiful color palettes using machine learning algorithms.",
    detailedDescription:
      "An experimental tool that uses AI to generate harmonious color palettes based on mood, keywords, or uploaded images. Features include palette export in various formats (CSS, SCSS, Adobe), color accessibility checking, and palette history.",
    images: ["/src/assets/color-palette-1.jpg"],
    technologies: ["Python", "TensorFlow", "React", "Color Theory", "APIs"],
    liveUrl: "https://colorgen.example.com",
    githubUrl: "https://github.com/username/color-generator",
    category: "experimental",
    featured: false,
    year: 2023,
  },
  {
    id: "pixel-art-editor",
    name: "Browser Pixel Art Editor",
    description:
      "Nostalgic pixel art creation tool built entirely in the browser.",
    detailedDescription:
      "A fun project that brings back the joy of pixel art creation. Features include multiple brush sizes, color palettes, layers, animation frames, and export to various formats. Built with HTML5 Canvas and includes undo/redo functionality.",
    images: ["/src/assets/pixel-art-1.jpg", "/src/assets/pixel-art-2.jpg"],
    technologies: ["HTML5 Canvas", "JavaScript", "CSS Grid", "Local Storage"],
    liveUrl: "https://pixelart.example.com",
    githubUrl: "https://github.com/username/pixel-art-editor",
    category: "fun",
    featured: false,
    year: 2023,
  },
  {
    id: "code-snippet-manager",
    name: "Smart Code Snippet Manager",
    description:
      "Organize and search through your code snippets with AI-powered tagging.",
    detailedDescription:
      "A productivity tool for developers to save, organize, and quickly find code snippets. Features include syntax highlighting for 50+ languages, AI-powered automatic tagging, team sharing, and integration with popular code editors through browser extensions.",
    images: ["/src/assets/snippet-manager-1.jpg"],
    technologies: ["Node.js", "React", "MongoDB", "Elasticsearch", "Prism.js"],
    liveUrl: "https://snippets.example.com",
    githubUrl: "https://github.com/username/snippet-manager",
    category: "useful",
    featured: true,
    year: 2024,
  },
  {
    id: "random-quote-machine",
    name: "Philosophical Quote Machine",
    description:
      "Sometimes useful, sometimes not - generates random philosophical quotes.",
    detailedDescription:
      "A simple yet oddly addictive quote generator that pulls from a curated collection of philosophical quotes. Features a minimalist design, tweet functionality, and a save-to-favorites option. Built as a fun exercise in API integration.",
    images: ["/src/assets/quote-machine-1.jpg"],
    technologies: ["React", "Quote API", "Twitter API", "CSS Animations"],
    liveUrl: "https://quotes.example.com",
    githubUrl: "https://github.com/username/quote-machine",
    category: "experimental",
    featured: false,
    year: 2023,
  },
];

export const getProjectsByCategory = (category?: Project["category"]) => {
  if (!category) return projects;
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const sortProjects = (
  projects: Project[],
  sortBy: "name" | "year" | "category",
) => {
  return [...projects].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return a.name.localeCompare(b.name);
      case "year":
        return b.year - a.year;
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });
};
