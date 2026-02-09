import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-sm sm:text-base text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
          Made using React & Tailwind CSS
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2">
          © {new Date().getFullYear()} Vidyarth Venkateswaran. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
