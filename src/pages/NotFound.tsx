import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center animate-fade-in">
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-medium text-foreground mb-2">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist. It might have been moved,
            deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="portfolio-button-primary px-6 py-3 gap-2 text-base"
          >
            <Home size={20} />
            Back to Portfolio
          </Link>

          <button
            onClick={() => window.history.back()}
            className="portfolio-button-ghost px-6 py-3 gap-2 text-base"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        <div className="mt-12 text-sm text-muted-foreground">
          <p>
            Lost? That's okay. Even the best developers get{" "}
            <span className="text-primary">404 errors</span> sometimes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
