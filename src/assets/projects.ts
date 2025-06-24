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
  category?: "useful" | "experimental" | "fun";
  featured?: boolean;
  year?: number;
}

export const projects: Project[] = [
  {
    name: "Amigo Secreto Facil (Easy secret santa)",
    description: "Intuitive no-account-needed secret santa app",
    detailedDescription: `A simple and intuitive app to organize your Secret Santa gift exchange, replacing paper-and-pen. No accounts or emails required - just add participants and draw names instantly. After the draw, the app generates unique secret links for each participant.
    <br/><br/>
    Made as an exercise on the following:
    <ul>
    <li> - Using a project template</li>
    <li> - Typescript, Nextjs/React and Tailwind CSS</li>
    <li> - Vercel static site hosting</li>
    <li> - Conventional commits standard</li>
    <li> - No component libraries</li>
    </ul>`,
    images: ["/images/amigosecretofacil.cortez.top_sorteio.png"],
    imageOptions: {
      // fit: "contain",
      position: "center",
    },
    technologies: [
      // "React",
      // "TypeScript",
      // "Firebase",
      // "Tailwind CSS",
      // "Framer Motion",
    ],
    liveUrl: "https://amigosecretofacil.cortez.top",
    // gitUrl: "https://github.com/vicortez/amigo-secreto-facil",
    category: "useful",
    featured: true,
  },
  {
    name: "Spending tracker",
    description: "Multiplatform app to track expenses. Made with Flutter.",
    detailedDescription:
      "Blablabla, there is also a web version: https://spendingtracker.cortez.top",
    images: [
      "/images/spending_tracker.webp",
      "/images/spending_tracker-2.webp",
    ],
    imageOptions: {
      fit: "contain",
      position: "top",
    },
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
    name: "Calculadora de distância para TV (Screen distance calculator)",
    description:
      "A website that calculates the ideal distance between your sofa and screen",
    // detailedDescription: "",
    images: ["/images/distanciatv.cortez.top.png"],
    // imageOptions: {
    //   fit: "cover",
    //   position: "center",
    //   aspectRatio: "4/3",
    // },
    // technologies: ["Python", "TensorFlow", "React", "Color Theory", "APIs"],
    liveUrl: "https://distanciatv.cortez.top/",
    // gitUrl: "",
    // category: "experimental",
    // featured: false,
    // year: 2023,
  },
  {
    name: "Auto Escolhedor (Auto chooser)",
    description:
      "Simple app where you itemize choices and ask the app to choose for you",
    detailedDescription: `Simple utility app to draw a random choice for you.
    <br/><br/>
    Made as an exercise on the following:
    <ul>
    <li> - Speedrunning app creation</li>
    </ul>`,
    images: ["/images/autoescolhedor.cortez.top_.png"],
    // imageOptions: {
    //   fit: "cover",
    //   position: "center",
    //   aspectRatio: "4/3",
    // },
    // technologies: ["Python", "TensorFlow", "React", "Color Theory", "APIs"],
    liveUrl: "https://autoescolhedor.cortez.top/",
    // gitUrl: "",
    // category: "experimental",
    // featured: false,
    // year: 2023,
  },
  {
    name: "My beers / Brew view",
    description: "An app for tracking and rating brews you've had",
    detailedDescription:
      "Originally made to exercise oauth2 authentication, Heroku hosting and CDN-based media storage with Cloudinary. Later remade using the lovable AI app maker and builder.io to test AI code generation tech",
    images: ["/images/brew-view.lovable.app_.png"],
    // imageOptions: {
    //   fit: "cover",
    //   position: "center",
    //   aspectRatio: "4/3",
    // },
    // technologies: ["Python", "TensorFlow", "React", "Color Theory", "APIs"],
    liveUrl: "http://brewview.cortez.top/",
    // gitUrl: "",
    // category: "experimental",
    // featured: false,
    // year: 2023,
  },
  {
    name: "HomeApp V2",
    description:
      "Small demo app to store notices, shopping list and food recipes for a home",
    detailedDescription: "",
    images: ["/images/homeapp-v2-example2.jpg"],
    imageOptions: {
      fit: "contain",
      position: "top",
      aspectRatio: "4/3",
    },
    // technologies: ["Python", "TensorFlow", "React", "Color Theory", "APIs"],
    // liveUrl: "https://autoescolhedor.cortez.top/",
    // gitUrl: "",
    // category: "experimental",
    // featured: false,
    // year: 2023,
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
