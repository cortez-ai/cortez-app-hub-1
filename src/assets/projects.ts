export type ImageFit =
  | "cover" // Default - fills container, may crop
  | "contain" // Fits entire image within container
  | "fill" // Stretches to fill container
  | "scale-down" // Like contain but won't scale up
  | "none"; // Original size

export type ImagePosition =
  | "center" // center center
  | "top" // center top
  | "bottom" // center bottom
  | "left" // left center
  | "right" // right center
  | "top-left" // left top
  | "top-right" // right top
  | "bottom-left" // left bottom
  | "bottom-right"; // right bottom

export interface ImageOptions {
  fit?: ImageFit;
  position?: ImagePosition;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "3/2" | "auto";
}

export interface Project {
  name: string;
  description: string;
  detailedDescription?: string;
  images: string[];
  imageOptions?: ImageOptions;
  technologies?: string[];
  liveUrl?: string;
  gitUrl?: string;
  category: "useful" | "experimental" | "fun";
  featured?: boolean;
  year?: number;
}

export const projects: Project[] = [
  {
    name: "Easy Secret santa",
    description: "Intuitive no-account secret santa app",
    detailedDescription:
      "A simple and intuitive app to organize your Secret Santa gift exchange, replacing paper-and-pen. No accounts or emails required - just add participants and draw names instantly. After the draw, the app generates unique secret links for each participant, ensuring only they know who they picked. Perfect for families, friends, coworkers, or any group looking for a hassle-free way to organize their gift exchange. \n Made with TODO™",
    images: [
      "src/assets/amigosecretofacil.cortez.top_sorteio.png",
      "src/assets/task-manager-2.jpg",
    ],
    technologies: [
      // "React",
      // "TypeScript",
      // "Firebase",
      // "Tailwind CSS",
      // "Framer Motion",
    ],
    liveUrl: "https://amigosecretofacil.cortez.top",
    gitUrl: "https://github.com/vicortez/amigo-secreto-facil",
    category: "useful",
    featured: true,
  },
  {
    name: "Spending tracker",
    description: "TODO",
    detailedDescription:
      "Blablabla, there is also a web version: https://spendingtracker.cortez.top",
    images: ["src/assets/spending_tracker.webp"],
    // technologies: [
    //   "React",
    //   "OpenWeather API",
    //   "CSS Animations",
    //   "Geolocation API",
    // ],
    liveUrl:
      "https://play.google.com/store/apps/details?id=top.cortez.spending_tracker&hl=en",
    // gitUrl: "https://github.com/username/weather-app",
    category: "useful",
    featured: true,
    year: 2024,
  },
  {
    name: "AI Color Palette Generator",
    description:
      "Generate beautiful color palettes using machine learning algorithms.",
    detailedDescription:
      "An experimental tool that uses AI to generate harmonious color palettes based on mood, keywords, or uploaded images. Features include palette export in various formats (CSS, SCSS, Adobe), color accessibility checking, and palette history.",
    images: ["src/assets/color-palette-1.jpg"],
    technologies: ["Python", "TensorFlow", "React", "Color Theory", "APIs"],
    liveUrl: "https://colorgen.example.com",
    gitUrl: "https://github.com/username/color-generator",
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
