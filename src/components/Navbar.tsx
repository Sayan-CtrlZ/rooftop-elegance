import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-background border-border shadow-sm" 
          : "bg-background/10 backdrop-blur-md border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 md:h-24 px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Rooftop by Vrindavan Logo" className="h-14 md:h-16 w-auto rounded-md object-contain" />
          <span className="font-heading text-xl md:text-2xl font-bold text-foreground tracking-wide drop-shadow-sm">
            Rooftop <span className="text-primary drop-shadow-sm">by Vrindavan</span>
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-2 md:mr-12">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
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
        <button className="md:hidden text-foreground drop-shadow-sm" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background border-b border-border shadow-sm">
          <ul className="flex flex-col items-stretch px-4 gap-2 py-6 text-center">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block font-body text-lg px-6 py-3 rounded-md tracking-wide transition-all ${
                    location.pathname === link.path 
                      ? "bg-primary/15 text-primary font-semibold" 
                      : "text-foreground font-medium hover:bg-secondary/60 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
