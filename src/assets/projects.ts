import { Project } from "@/models/models";

export const projects: Project[] = [
  {
    name: "Easy secret santa (Amigo Secreto Facil)",
    description: "Intuitive no-account-needed secret santa app",
    detailedDescription: `A simple and intuitive app to organize your Secret Santa gift exchange, replacing pen and paper with a skeuomorphic interface. No accounts or emails required - just add participants and draw names instantly. After the draw, the app generates unique secret links for each participant.
    <br/><br/>
    Made as an exercise on the following:
    <ul>
    <li> - Using a project template</li>
    <li> - Typescript, Nextjs/React and Tailwind CSS</li>
    <li> - Vercel static site hosting</li>
    <li> - Conventional commits standard</li>
    <li> - No component libraries</li>
    </ul>`,
    images: ["/images/amigosecretofacil_sorteio.png"],
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
      "App to quickly track expenses, which I use daily. Released on Google Play Store, and there is also a web version at <a href='https://spendingtracker.cortez.top' target='_blank' rel='noopener noreferrer'>https://spendingtracker.cortez.top</a>",
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
    gitUrl: "https://github.com/vicortez/spending-tracker",
    category: "useful",
    featured: true,
    // year: 2024,
  },
  {
    name: "Screen distance calculator (Calculadora de distância para TV)",
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
    name: "Auto chooser (Auto Escolhedor)",
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
    gitUrl: "https://github.com/vicortez/Autoescolhedor",
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
    liveUrl: "https://brewview.cortez.top/",
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
    gitUrl: "https://gitlab.com/ctovictor/homeapp-v2",
    // category: "experimental",
    // featured: false,
    // year: 2023,
  },
  {
    name: "Jobs AI filter",
    description:
      "Simple app I created to help me bulk analyze and find job listings that interest me",
    detailedDescription: `
    Simple utility app to filter job offers. I used the POE API, which is identical to the openai API, because I have a POE subscription.
    <br/><br/>
    The user can set their own API key, and configure their likes and dislikes so that the AI can automatically filter the job offers.
    <br/><br/>
    The app generates a detailed report explaining each offer kept and why others were discarded
    `,
    images: ["/images/jobfilter.cortez.top.png"],
    liveUrl: "https://jobfilter.cortez.top/",
    gitUrl: "https://github.com/cortez-ai/jobs-ai-filter",
  },
  {
    name: "Installments real cost calculator",
    description:
      'This app helps you find the "real" cost of purchasing in installments, considering you could be investing the rest of the money in a savings account as you pay it off',
    detailedDescription: undefined,
    images: ["/images/installmentrealcostcalculator.cortez.top.png"],
    liveUrl: "https://installmentrealcostcalculator.netlify.app/",
    gitUrl: undefined,
  },
  {
    name: "R factor calculator (comparador de fator R)",
    description:
      "Created for brazillian enterpreneurs. A handy graph to compare expected liquid profits across 2 different tax regimes as gross monthly revenue scales",
    detailedDescription: undefined,
    images: ["/images/comparar-fator-r.cortez.top.png"],
    liveUrl: "https://comparar-fator-r.netlify.app/",
    gitUrl: undefined,
  },
  {
    name: "Footvolley championship elo tracker",
    description: "Simple app to track the elo score of players across matches",
    detailedDescription: undefined,
    images: ["/images/futevolei-cortez.png"],
    liveUrl: "https://futevolei-cortez.netlify.app/",
    gitUrl: undefined,
  },
  {
    name: "Tech demo: Floating cards",
    description:
      "A tech demo for a highly interactive floating card effect using TailwindCSS",
    detailedDescription: undefined,
    images: ["/images/floating-cards.png"],
    liveUrl: "https://floating-cards.netlify.app/",
    gitUrl: undefined,
  },
  {
    name: "ZapOpen",
    description:
      "WhatsApp chat opener. Open a WhatsApp chat from a phone number without adding them to contacts.",
    detailedDescription: undefined,
    images: ["/images/zapopen.png"],
    liveUrl: "https://zapopen.netlify.app/",
    gitUrl: undefined,
  },
  {
    name: "Quick photo edit",
    description:
      "This web app allows you to quickly edit your pictures to perform some useful and common operations.",
    detailedDescription: undefined,
    images: ["/images/quickphotoedit.png"],
    liveUrl: "https://quickphotoedit.netlify.app/",
    gitUrl: undefined,
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
        return (b.year || 0) - (a.year || 0);
      case "category":
        return a.category.localeCompare(b.category);
      default:
        return 0;
    }
  });
};
