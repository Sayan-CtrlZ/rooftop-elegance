import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import ClockPicker from "@/components/ClockPicker";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Reservation = () => {
  const [form, setForm] = useState({
    name: "", phone: "", guests: "", date: "", time: "", occasion: "", request: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Reservation request sent! We'll confirm shortly.");
    setForm({ name: "", phone: "", guests: "", date: "", time: "", occasion: "", request: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow";

  return (
    <main className="pt-16">
      <section className="py-16 md:py-28">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <motion.div className="text-center mb-12" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-3">Book a Table</p>
            <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">Reserve Your Table</h1>
            <p className="font-body text-muted-foreground">Fill in the details below and we'll get back to you shortly.</p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl border border-border/50 p-6 md:p-8 space-y-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required className={inputClass} />
              <input name="phone" placeholder="Phone Number" type="tel" value={form.phone} onChange={handleChange} required className={inputClass} />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <select name="guests" value={form.guests} onChange={handleChange} required className={inputClass}>
                <option value="">Number of Guests</option>
                {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((n) => (
                  <option key={n} value={n}>{n} {typeof n === "number" && n === 1 ? "Guest" : "Guests"}</option>
                ))}
              </select>
              <input 
                name="date" 
                type="text"
                placeholder="Select Date" 
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => !form.date && (e.target.type = "text")}
                value={form.date} 
                onChange={handleChange} 
                required 
                className={inputClass} 
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <ClockPicker
                value={form.time}
                onChange={(t) => setForm({ ...form, time: t })}
                className={inputClass}
              />
              <select name="occasion" value={form.occasion} onChange={handleChange} className={inputClass}>
                <option value="">Occasion (Optional)</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Date Night</option>
                <option>Family Gathering</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              name="request"
              placeholder="Special Requests (Optional)"
              value={form.request}
              onChange={handleChange}
              rows={3}
              className={inputClass + " resize-none"}
            />
            <button
              type="submit"
              className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-body text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Reserve Now
            </button>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Reservation;
