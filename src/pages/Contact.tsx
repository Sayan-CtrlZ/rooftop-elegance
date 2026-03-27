import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Contact = () => (
  <main className="pt-16">
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="text-center mb-14" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Get in Touch</p>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground">Contact Us</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div className="space-y-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-card rounded-xl shadow-card p-6 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">Address</h3>
                  <p className="font-body text-sm text-muted-foreground">Kanha ka Vrindavan Garden, Shujalpur, Madhya Pradesh, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+919876543210" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">Opening Hours</h3>
                  <p className="font-body text-sm text-muted-foreground">Daily from 4:00 PM onwards</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-heading text-base font-semibold text-foreground mb-1">Email</h3>
                  <p className="font-body text-sm text-muted-foreground">hello@rooftopbyvrindavan.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="rounded-xl overflow-hidden shadow-card h-full min-h-[350px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.123456789!2d76.7123456!3d23.3456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShujalpur%2C+Madhya+Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 350 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rooftop by Vrindavan Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </main>
);

export default Contact;
