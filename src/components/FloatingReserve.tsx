import { Link } from "react-router-dom";

const FloatingReserve = () => {
  return (
    <Link
      to="/reservation"
      className="fixed z-[100] right-0 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground py-6 px-2 shadow-2xl rounded-l-lg hover:-translate-x-1.5 transition-transform duration-300 flex flex-col items-center border border-r-0 border-white/20"
    >
      <span 
        style={{ writingMode: 'vertical-rl' }} 
        className="font-heading text-sm font-semibold tracking-[0.25em] uppercase rotate-180 drop-shadow-sm"
      >
        Reserve
      </span>
    </Link>
  );
};

export default FloatingReserve;
