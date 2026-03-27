import { useState, useRef, useCallback } from "react";
import { Clock } from "lucide-react";

interface ClockPickerProps {
  value: string;
  onChange: (time: string) => void;
  className?: string;
}

const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);
const MINUTES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

function polarToPoint(angle: number, r: number, cx: number, cy: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

const ClockPicker = ({ value, onChange, className }: ClockPickerProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"hour" | "minute">("hour");
  const [hour, setHour] = useState<number>(() => {
    if (!value) return 7;
    const [h] = value.split(":").map(Number);
    return h % 12 || 12;
  });
  const [minute, setMinute] = useState<number>(() => {
    if (!value) return 0;
    const [, m] = value.split(":").map(Number);
    return m;
  });
  const [ampm, setAmpm] = useState<"AM" | "PM">(() => {
    if (!value) return "PM";
    const [h] = value.split(":").map(Number);
    return h >= 12 ? "PM" : "AM";
  });

  const svgRef = useRef<SVGSVGElement>(null);
  const cx = 100, cy = 100, r = 78;

  const getAngleFromEvent = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const rect = svgRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left - cx;
    const y = e.clientY - rect.top - cy;
    let angle = (Math.atan2(y, x) * 180) / Math.PI + 90;
    if (angle < 0) angle += 360;
    return angle;
  }, []);

  const handleClockClick = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const angle = getAngleFromEvent(e);
    if (step === "hour") {
      const h = Math.round(angle / 30) % 12 || 12;
      setHour(h);
      setStep("minute");
    } else {
      const m = Math.round(angle / 6) % 60;
      const snapped = Math.round(m / 5) * 5 % 60;
      setMinute(snapped);
    }
  }, [step, getAngleFromEvent]);

  const confirmTime = () => {
    let h24 = hour % 12;
    if (ampm === "PM") h24 += 12;
    const timeStr = `${String(h24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
    onChange(timeStr);
    setOpen(false);
  };

  const displayTime = value
    ? (() => {
        const [h, m] = value.split(":").map(Number);
        const displayH = h % 12 || 12;
        const ap = h >= 12 ? "PM" : "AM";
        return `${displayH}:${String(m).padStart(2, "0")} ${ap}`;
      })()
    : "Select Time";

  const currentAngle = step === "hour" ? (hour % 12) * 30 : (minute / 60) * 360;
  const handEnd = polarToPoint(currentAngle, 58, cx, cy);
  const dotPos = polarToPoint(currentAngle, r - 12, cx, cy);

  return (
    <div className="relative w-full">
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`${className} flex items-center gap-2 cursor-pointer text-left`}
      >
        <Clock size={16} className="text-primary shrink-0" />
        <span className={value ? "text-foreground" : "text-muted-foreground/60"}>
          {displayTime}
        </span>
      </button>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm touch-none"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white border border-border rounded-2xl shadow-2xl p-5 w-full max-w-[280px] animate-in fade-in zoom-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* AM/PM & Step Indicator */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setStep("hour")}
                  className={`font-heading text-2xl font-bold transition-colors active:scale-95 ${step === "hour" ? "text-primary" : "text-muted-foreground"}`}
                >
                  {String(hour).padStart(2, "0")}
                </button>
                <span className="font-heading text-2xl font-bold text-muted-foreground">:</span>
                <button
                  type="button"
                  onClick={() => setStep("minute")}
                  className={`font-heading text-2xl font-bold transition-colors active:scale-95 ${step === "minute" ? "text-primary" : "text-muted-foreground"}`}
                >
                  {String(minute).padStart(2, "0")}
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {(["AM", "PM"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setAmpm(p)}
                    className={`text-xs font-body font-medium px-2 py-0.5 rounded transition-colors active:scale-95 ${ampm === p ? "bg-primary text-white" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            {/* Clock SVG */}
            <svg
              ref={svgRef}
              viewBox="0 0 200 200"
              className="w-full cursor-pointer touch-none"
              onClick={handleClockClick}
            >
              <circle cx={cx} cy={cy} r={r} fill="hsl(36, 33%, 97%)" stroke="hsl(33, 20%, 88%)" strokeWidth="1.5" />
              <line x1={cx} y1={cy} x2={handEnd.x} y2={handEnd.y} stroke="hsl(30, 35%, 42%)" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx={cx} cy={cy} r="4" fill="hsl(30, 35%, 42%)" />
              <circle cx={dotPos.x} cy={dotPos.y} r="10" fill="hsl(30, 35%, 42%)" />
              {step === "hour"
                ? HOURS.map((h) => {
                    const angle = h * 30;
                    const p = polarToPoint(angle, r - 12, cx, cy);
                    const active = h === hour;
                    return (
                      <g key={h}>
                        <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight={active ? "700" : "400"} fill={active ? "white" : "hsl(30, 10%, 15%)"}>
                          {h}
                        </text>
                      </g>
                    );
                  })
                : MINUTES.map((m) => {
                    const angle = (m / 60) * 360;
                    const p = polarToPoint(angle, r - 12, cx, cy);
                    const active = m === minute;
                    return (
                      <g key={m}>
                        <text x={p.x} y={p.y} textAnchor="middle" dominantBaseline="central" fontSize="11" fontWeight={active ? "700" : "400"} fill={active ? "white" : "hsl(30, 10%, 15%)"}>
                          {String(m).padStart(2, "0")}
                        </text>
                      </g>
                    );
                  })}
            </svg>

            {/* Actions */}
            <div className="flex justify-between mt-3 gap-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex-1 py-2 text-sm font-body text-muted-foreground hover:text-foreground rounded-lg border border-border hover:bg-secondary/50 transition-colors active:scale-95"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmTime}
                className="flex-1 py-2 text-sm font-body bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium active:scale-95"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClockPicker;
