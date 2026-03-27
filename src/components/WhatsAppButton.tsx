import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phone = "919876543210";
  const message = encodeURIComponent("Hello, I would like to book a table at Rooftop by Vrindavan.");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-card hover:shadow-card-hover transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-primary-foreground" />
    </a>
  );
};

export default WhatsAppButton;
