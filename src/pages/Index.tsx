import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Utensils, Coffee, GlassWater } from "lucide-react";
import heroImg from "@/assets/hero-rooftop.jpg";
import ambienceImg from "@/assets/ambience.jpg";
import foodImg from "@/assets/food-platter.jpg";
import galleryFood1 from "@/assets/gallery-food1.jpg";
import galleryDrinks from "@/assets/gallery-drinks.jpg";
import galleryAmbience2 from "@/assets/gallery-ambience2.jpg";
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
  { src: foodImg, alt: "Food platter" },
  { src: galleryFood1, alt: "Samosa starter" },
  { src: galleryDrinks, alt: "Refreshing drinks" },
  { src: ambienceImg, alt: "Restaurant ambience" },
  { src: galleryAmbience2, alt: "Candlelight dinner" },
];

const MenuCard = ({ name, price }: { name: string; price: string }) => (
  <div className="flex items-center justify-between py-3 border-b border-border last:border-0 hover:bg-secondary/30 px-2 -mx-2 rounded transition-colors duration-200">
    <span className="font-body text-sm text-foreground">{name}</span>
    <span className="font-body text-sm font-medium text-primary">{price}</span>
  </div>
);

const Index = () => (
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
        <motion.p variants={fadeUp} className="font-body text-lg text-primary-foreground/90 mb-8">
          A Warm Rooftop Dining Experience
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
            Perched above the bustling streets of Shujalpur, Rooftop by Vrindavan offers a serene escape where delicious food meets breathtaking views. Our warm ambience, twinkling fairy lights, and carefully curated menu create the perfect setting for unforgettable evenings with loved ones.
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

    {/* Gallery */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Gallery</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Glimpses of Vrindavan</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl aspect-square"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">What Our Guests Say</h2>
        </motion.div>
        <ReviewCarousel />
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
  </main>
);

export default Index;
