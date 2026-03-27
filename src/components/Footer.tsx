import { Link } from "react-router-dom";
import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-16">
    <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.jpg" alt="Rooftop by Vrindavan Logo" className="h-20 md:h-24 w-auto rounded-md object-contain" />
          <h3 className="font-heading text-xl md:text-2xl font-semibold">Rooftop by Vrindavan</h3>
        </div>
        <p className="text-sm opacity-70 leading-relaxed font-body">
          A warm rooftop dining experience in the heart of Shujalpur, Madhya Pradesh.
        </p>
      </div>
      <div>
        <h4 className="font-heading text-lg font-medium mb-4">Quick Links</h4>
        <ul className="space-y-2 font-body text-sm opacity-70">
          <li><Link to="/" className="hover:opacity-100 transition-opacity">Home</Link></li>
          <li><Link to="/about" className="hover:opacity-100 transition-opacity">About</Link></li>
          <li><Link to="/reservation" className="hover:opacity-100 transition-opacity">Reservation</Link></li>
          <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
        </ul>
      </div>
      <div className="space-y-3 font-body text-sm opacity-70">
        <div className="flex items-start gap-2">
          <MapPin size={16} className="mt-0.5 shrink-0" />
          <span>Kanha ka Vrindavan Garden, Shujalpur, MP</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} className="shrink-0" />
          <a href="tel:+919876543210" className="hover:opacity-100 transition-opacity">+91 98765 43210</a>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} className="shrink-0" />
          <span>Open daily from 4:00 PM onwards</span>
        </div>
      </div>
    </div>
    <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-primary-foreground/10 text-center font-body text-xs opacity-50">
      © {new Date().getFullYear()} Rooftop by Vrindavan. All rights reserved.
    </div>
  </footer>
);

export default Footer;
