import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Gallery", path: "/#gallery" },
  { label: "About", path: "/about" },
  { label: "Reserve", path: "/reservation" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (path: string) => {
    setOpen(false);
    if (path.startsWith("/#")) {
      const id = path.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background border-border shadow-sm" 
          : "bg-background/10 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img src="/logo.jpg" alt="Rooftop by Vrindavan Logo" className="h-10 md:h-16 w-auto rounded-md object-contain" />
          <span className="font-heading text-lg md:text-2xl font-bold text-foreground tracking-wide drop-shadow-sm truncate">
            Rooftop <span className="text-primary drop-shadow-sm">by Vrindavan</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2 md:mr-12">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                onClick={() => handleLinkClick(link.path)}
                className={`font-body text-base px-5 py-2.5 rounded-md tracking-wide transition-all ${
                  location.pathname === link.path 
                    ? "bg-primary/15 text-primary font-semibold drop-shadow-sm" 
                    : "text-foreground font-medium drop-shadow-sm hover:bg-secondary/60 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-foreground active:scale-95 transition-transform" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col items-stretch px-4 gap-1 py-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => handleLinkClick(link.path)}
                    className={`block font-body text-lg px-6 py-4 rounded-xl tracking-wide transition-all active:bg-secondary/80 ${
                      location.pathname === link.path 
                        ? "bg-primary/10 text-primary font-semibold" 
                        : "text-foreground font-medium hover:bg-secondary/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
