import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, Stethoscope, GraduationCap, User, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "الرئيسية", href: "#home", icon: Heart },
    { name: "عني", href: "#about", icon: User },
    { name: "التعليم", href: "#education", icon: GraduationCap },
    { name: "المهارات", href: "#skills", icon: Stethoscope },
    { name: "تواصل", href: "#contact", icon: Mail },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/80 backdrop-blur-lg border-b border-border/50 shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <div className="text-primary-foreground font-bold text-lg">أ</div>
            </div>
            <div className="font-bold text-xl text-foreground font-cairo">أدهم أحمد</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 font-cairo font-medium"
              >
                <item.icon size={16} />
                {item.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-cairo"
              onClick={() => scrollToSection("#contact")}
            >
              تواصل معي
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-lg rounded-lg mt-2 border border-border/50">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center gap-3 w-full text-right px-3 py-2 text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-md transition-colors duration-200 font-cairo"
                >
                  <item.icon size={16} />
                  {item.name}
                </button>
              ))}
              <div className="pt-2">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-cairo"
                  onClick={() => scrollToSection("#contact")}
                >
                  تواصل معي
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;