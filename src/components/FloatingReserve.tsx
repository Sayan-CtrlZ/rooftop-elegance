import { Link } from "react-router-dom";

const FloatingReserve = () => {
  return (
    <Link
      to="/reservation"
      className="fixed z-[100] right-0 top-[16%] md:top-[20%] -translate-y-1/2 bg-primary text-primary-foreground py-3.5 px-4 shadow-2xl rounded-l-xl hover:pr-6 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center border border-r-0 border-white/20 group"
    >
      <span className="font-heading text-xs font-bold tracking-[0.2em] uppercase drop-shadow-sm whitespace-nowrap">
        Reserve Now
      </span>
    </Link>
  );
};

export default FloatingReserve;
