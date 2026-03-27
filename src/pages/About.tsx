import { motion } from "framer-motion";
import heroImg from "@/assets/hero-rooftop.jpg";
import ambienceImg from "@/assets/ambience.jpg";
import foodImg from "@/assets/food-platter.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const About = () => (
  <main className="pt-16">
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <img src={heroImg} alt="Rooftop by Vrindavan" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative z-10 text-center px-4">
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary-foreground/80 mb-3">Our Story</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">About Us</h1>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">
            Where Every Evening Feels Special
          </h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>
              Rooftop by Vrindavan was born from a simple dream — to create a space where people can unwind, enjoy great food, and make beautiful memories under the open sky. Nestled in the heart of Shujalpur at Kanha ka Vrindavan Garden, our rooftop restaurant has quickly become the town's most cherished dining destination.
            </p>
            <p>
              Every detail of our space has been thoughtfully designed — from the soft glow of fairy lights that set the mood to the carefully chosen music that plays in the background. Whether you're celebrating a special occasion or simply craving a peaceful dinner with loved ones, our rooftop offers the perfect escape from the everyday.
            </p>
            <p>
              Our kitchen takes pride in serving fresh, flavourful dishes that blend traditional Indian recipes with a modern presentation. Each plate is prepared with quality ingredients and a whole lot of love.
            </p>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <img src={ambienceImg} alt="Ambience" className="w-full rounded-xl shadow-card object-cover aspect-[4/3]" loading="lazy" width={800} height={600} />
        </motion.div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 md:order-1">
          <img src={foodImg} alt="Our food" className="w-full rounded-xl shadow-card object-cover aspect-square" loading="lazy" width={800} height={800} />
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-1 md:order-2">
          <h2 className="font-heading text-3xl font-semibold text-foreground mb-6">What We Stand For</h2>
          <ul className="space-y-5">
            {[
              { title: "Peaceful Ambience", desc: "A calm, beautifully lit rooftop that feels like a mini getaway from the world." },
              { title: "Quality Food", desc: "Every dish crafted with the freshest ingredients and authentic Indian flavors." },
              { title: "Warm Hospitality", desc: "Our team ensures every guest feels welcomed and valued, every single time." },
              { title: "Perfect for Celebrations", desc: "From birthdays to anniversaries, we make your special moments even more memorable." },
            ].map((v) => (
              <li key={v.title}>
                <h4 className="font-heading text-base font-semibold text-foreground mb-1">{v.title}</h4>
                <p className="font-body text-sm text-muted-foreground">{v.desc}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  </main>
);

export default About;
