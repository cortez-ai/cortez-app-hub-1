import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  projectName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return (
      <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground">No images available</span>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-l-lg bg-muted">
        <img
          src={images[0]}
          alt={`${projectName} screenshot`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0xMiA5QzEzLjY1IDkgMTUgMTAuMzUgMTUgMTJDMTUgMTMuNjUgMTMuNjUgMTUgMTIgMTVDMTAuMzUgMTUgOSAxMy42NSA5IDEyQzkgMTAuMzUgMTAuMzUgOSAxMiA5Wk0xMiA3QzkuMjQgNyA3IDkuMjQgNyAxMkM3IDE0Ljc2IDkuMjQgMTcgMTIgMTdDMTQuNzYgMTcgMTcgMTQuNzYgMTcgMTJDMTcgOS4yNCAxNC43NiA3IDEyIDdaIiBmaWxsPSIjNjY2Ii8+Cjwvc3ZnPgo=";
          }}
        />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-l-lg bg-muted group">
      <div
        className="flex transition-transform duration-500 ease-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${projectName} screenshot ${index + 1}`}
            className="w-full h-full object-cover flex-shrink-0"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMzMzIi8+CjxwYXRoIGQ9Ik0xMiA5QzEzLjY1IDkgMTUgMTAuMzUgMTUgMTJDMTUgMTMuNjUgMTMuNjUgMTUgMTIgMTVDMTAuMzUgMTUgOSAxMy42NSA5IDEyQzkgMTAuMzUgMTAuMzUgOSAxMiA5Wk0xMiA3QzkuMjQgNyA3IDkuMjQgNyAxMkM3IDE0Ljc2IDkuMjQgMTcgMTIgMTdDMTQuNzYgMTcgMTcgMTQuNzYgMTcgMTJDMT7gOS4yNCAxNC43NiA3IDEyIDdaIiBmaWxsPSIjNjY2Ii8+Cjwvc3ZnPgo=";
            }}
          />
        ))}
      </div>

      {/* Navigation arrows - smaller for compact layout */}
      <button
        onClick={prevImage}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Previous image"
      >
        <ChevronLeft size={12} />
      </button>

      <button
        onClick={nextImage}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200"
        aria-label="Next image"
      >
        <ChevronRight size={12} />
      </button>

      {/* Dots indicator - smaller and positioned lower */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
              currentIndex === index
                ? "bg-primary"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
