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
