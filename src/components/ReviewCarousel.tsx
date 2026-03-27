import { useRef, useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Priya S.", text: "Absolutely loved the rooftop ambience! The paneer tikka was to die for. Perfect for a date night.", rating: 5 },
  { name: "Rahul M.", text: "Best dining experience in Shujalpur. The sunset view from the rooftop is magical. Will visit again!", rating: 5 },
  { name: "Anita K.", text: "Beautiful decor, warm hospitality, and the food was delicious. Highly recommend the biryani!", rating: 4 },
  { name: "Vikram J.", text: "We celebrated our anniversary here. The ambience, service, and food — everything was perfect.", rating: 5 },
  { name: "Sneha P.", text: "A hidden gem! The mojitos are refreshing and the starters are amazing. Great for family outings.", rating: 5 },
  { name: "Amit D.", text: "Calm, peaceful, and elegant. Exactly what Shujalpur needed. The dal makhani is exceptional.", rating: 4 },
];

const ReviewCarousel = () => {
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      ref={ref}
    >
      <div
        className="flex gap-6"
        style={{
          animation: "scroll-left 30s linear infinite",
          animationPlayState: paused ? "paused" : "running",
          width: "max-content",
        }}
      >
        {[...reviews, ...reviews].map((r, i) => (
          <div
            key={i}
            className="w-[300px] shrink-0 bg-card rounded-lg p-6 shadow-card"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className={j < r.rating ? "fill-primary text-primary" : "text-border"}
                />
              ))}
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">"{r.text}"</p>
            <p className="font-heading text-sm font-medium text-foreground">{r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;
