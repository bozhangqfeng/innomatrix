import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav className="relative w-full z-50 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-20">
        <Link to="/" className="h-20 flex items-center">
          <img
            src="/lovable-uploads/logo.png"
            alt="InnoMatrix"
            className="h-full max-h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <button
            onClick={() => scrollToSection('features')}
            className="text-sm font-medium hover:text-primary"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('partners')}
            className="text-sm font-medium hover:text-primary"
          >
            AI Data Centers
          </button>
          <button
            onClick={() => scrollToSection('infrastructure')}
            className="text-sm font-medium hover:text-primary"
          >
            Blockchain Data Centers
          </button>
          <button
            onClick={() => scrollToSection('platform')}
            className="text-sm font-medium hover:text-primary"
          >
            Private LLM Inference Platform
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="text-sm font-medium hover:text-primary"
          >
            Team
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection('features')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('partners')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                AI Data Centers
              </button>
              <button
                onClick={() => scrollToSection('infrastructure')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Blockchain Data Centers
              </button>
              <button
                onClick={() => scrollToSection('platform')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Private LLM Inference Platform
              </button>
              <button
                onClick={() => scrollToSection('team')}
                className="text-sm font-medium hover:text-primary text-left"
              >
                Team
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;