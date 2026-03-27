import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Utensils, Coffee, GlassWater, X } from "lucide-react";
import heroImg from "@/assets/hero-rooftop.jpg";
import ambienceImg from "@/assets/ambience.jpg";
import foodImg from "@/assets/food-platter.jpg";
import galleryFood1 from "@/assets/gallery-food1.jpg";
import galleryDrinks from "@/assets/gallery-drinks.jpg";
import galleryAmbience2 from "@/assets/gallery-ambience2.jpg";
import terraceImg from "@/assets/Terrace.webp";
import diningAreaImg from "@/assets/Dinning area.webp";
import pergolaImg from "@/assets/pergola.webp";
import insideSittingImg from "@/assets/inside-sitting-room.webp";
import haraBharaKababImg from "@/assets/hara-bhara-kabab.webp";
import cocktailImg from "@/assets/coctail.webp";
import trellisImg from "@/assets/Trellis.webp";
import ReviewCarousel from "@/components/ReviewCarousel";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const menuItems = {
  starters: [
    { name: "Paneer Tikka", price: "₹220" },
    { name: "Crispy Corn", price: "₹180" },
    { name: "Hara Bhara Kebab", price: "₹190" },
    { name: "Mushroom Croquettes", price: "₹210" },
  ],
  mains: [
    { name: "Dal Makhani", price: "₹260" },
    { name: "Paneer Butter Masala", price: "₹280" },
    { name: "Veg Biryani", price: "₹240" },
    { name: "Malai Kofta", price: "₹270" },
  ],
  beverages: [
    { name: "Virgin Mojito", price: "₹150" },
    { name: "Cold Coffee", price: "₹130" },
    { name: "Fresh Lime Soda", price: "₹100" },
    { name: "Masala Chai", price: "₹60" },
  ],
};

const galleryImages = [
  { src: heroImg, alt: "Rooftop view" },
  { src: terraceImg, alt: "The Open Terrace", title: "The Open Terrace", desc: "Experience the breeze and starry nights with a spectacular view." },
  { src: foodImg, alt: "Food platter" },
  { src: diningAreaImg, alt: "Elegant Dining Area", title: "Elegant Dining Area", desc: "A cozy, beautifully lit space perfect for romantic dinners and family gatherings." },
  { src: galleryFood1, alt: "Samosa starter" },
  { src: pergolaImg, alt: "The Pergola", title: "The Pergola", desc: "Semi-open and shaded, offering a serene, relaxed daytime or evening dining experience." },
  { src: galleryDrinks, alt: "Refreshing drinks" },
  { src: insideSittingImg, alt: "Private Inner Lounge", title: "Private Inner Lounge", desc: "An intimate setting with plush seating for exclusive gatherings and quiet moments." },
  { src: ambienceImg, alt: "Restaurant ambience" },
  { src: galleryAmbience2, alt: "Candlelight dinner" },
  { src: haraBharaKababImg, alt: "Hara Bhara Kabab" },
  { src: cocktailImg, alt: "Signature Cocktail" },
  { src: trellisImg, alt: "The Trellis" },
];

const MenuCard = ({ name, price }: { name: string; price: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-secondary/30 px-2 -mx-2 rounded transition-colors duration-200">
    <span className="font-body text-sm text-foreground">{name}</span>
    <span className="font-body text-sm font-medium text-primary">{price}</span>
  </div>
);

const Index = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main>
    {/* Hero */}
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Rooftop by Vrindavan" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-foreground/40" />
      <motion.div
        className="relative z-10 text-center px-4 max-w-2xl"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.p variants={fadeUp} className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4">
          Shujalpur, Madhya Pradesh
        </motion.p>
        <motion.h1 variants={fadeUp} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground leading-tight mb-4">
          Rooftop by Vrindavan
        </motion.h1>
        <motion.p variants={fadeUp} className="font-body text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl mx-auto">
          A Warm Rooftop Dining Experience. Discover the magic of dining under the stars with exquisite culinary delights and a breathtaking ambience designed to elevate every occasion.
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Reserve a Table <ArrowRight size={16} />
          </Link>
          <a
            href="#menu"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-body text-sm font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            View Menu
          </a>
        </motion.div>
      </motion.div>
    </section>

    {/* About Preview */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Our Story</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Dine Under the Open Sky
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            Perched above the bustling streets of Shujalpur, Rooftop by Vrindavan offers a serene escape where delicious food meets breathtaking views. Our warm ambience, twinkling fairy lights, and carefully curated menu create the perfect setting for unforgettable evenings with loved ones. Whether you're seeking a quiet, romantic corner or a vibrant space to celebrate with friends, our thoughtfully designed atmosphere promises an experience that lingers long after your visit.
          </p>
          <Link to="/about" className="font-body text-sm text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
            Read More <ArrowRight size={14} />
          </Link>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img
            src={ambienceImg}
            alt="Rooftop ambience"
            className="w-full rounded-xl shadow-card object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
        </motion.div>
      </div>
    </section>

    {/* Spaces Section Removed and Combined into Gallery below */}

    {/* Menu Preview */}
    <section id="menu" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Our Menu</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Crafted with Love</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {([
            { title: "Starters", icon: Utensils, items: menuItems.starters },
            { title: "Main Course", icon: Coffee, items: menuItems.mains },
            { title: "Beverages", icon: GlassWater, items: menuItems.beverages },
          ] as const).map((cat) => (
            <motion.div
              key={cat.title}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="flex items-center gap-3 mb-5">
                <cat.icon size={20} className="text-primary" />
                <h3 className="font-heading text-lg font-semibold text-foreground">{cat.title}</h3>
              </div>
              {cat.items.map((item) => (
                <MenuCard key={item.name} {...item} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Combined Gallery Section */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Gallery & Spaces</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Glimpses of Vrindavan</h2>
        </motion.div>
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="group overflow-hidden rounded-xl relative cursor-pointer break-inside-avoid shadow-sm"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              onClick={() => setSelectedImg(img.src)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {img.title && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="font-heading text-xl font-semibold text-white mb-1">{img.title}</h3>
                  <p className="font-body text-sm text-white/80">{img.desc}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-20 md:py-28 relative overflow-hidden">
      <img src={terraceImg} alt="Background" className="absolute inset-0 w-full h-full object-cover -z-20" />
      <div className="absolute inset-0 bg-black/80 -z-10" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white">What Our Guests Say</h2>
        </motion.div>
        <ReviewCarousel />
        
        <motion.div className="mt-12 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <a
            href="https://g.page/r/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white text-foreground shadow-md hover:shadow-xl transition-all font-body font-medium border border-border hover:border-border/50 hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-5 h-5">
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
            </svg>
            Review us on Google
          </a>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Reserve Your Table Now</h2>
          <p className="font-body text-muted-foreground mb-8 max-w-md mx-auto">
            Join us for an unforgettable evening under the stars. Book your spot today.
          </p>
          <Link
            to="/reservation"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Reserve a Table <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Lightbox Modal */}
    <AnimatePresence>
      {selectedImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors bg-black/40 hover:bg-black/60 p-2 rounded-full"
            onClick={(e) => { e.stopPropagation(); setSelectedImg(null); }}
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            src={selectedImg}
            alt="Expanded view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  </main>
  );
};

export default Index;
