import { ArrowUpRight, ArrowDownRight } from "lucide-react";

function Sparkline({ points, up }) {
    const w = 120;
    const h = 36;
    const max = Math.max(...points);
    const min = Math.min(...points);
    const range = max - min || 1;
    const step = w / (points.length - 1);

    const coords = points.map((p, i) => {
        const x = i * step;
        const y = h - ((p - min) / range) * (h - 6) - 3;
        return [x, y];
    });

    const d = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x},${y}`).join(" ");

    return (
        <svg viewBox={`0 0 ${w} ${h}`} width={w} height={h} className="overflow-visible">
            <path
                d={d}
                fill="none"
                stroke={up ? "var(--color-teal)" : "var(--color-danger)"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="pulse-line"
            />
            <circle
                cx={coords[coords.length - 1][0]}
                cy={coords[coords.length - 1][1]}
                r="3"
                fill={up ? "var(--color-teal)" : "var(--color-danger)"}
            />
        </svg>
    );
}

export default function StatCard({ label, value, delta, trend, spark, delayClass }) {
    const up = trend === "up";
    return (
        <div
            className={`fade-up ${delayClass} rounded-2xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-lg`}
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm text-muted">{label}</p>
                    <p className="mt-2 font-display text-2xl font-semibold tracking-tight text-text">
                        {value}
                    </p>
                </div>
                <Sparkline points={spark} up={up} />
            </div>
            <div className="mt-3 flex items-center gap-1">
        <span
            className={`flex items-center gap-0.5 rounded-full px-1.5 py-0.5 font-mono text-xs font-medium ${
                up ? "bg-teal-soft text-teal" : "bg-danger-soft text-danger"
            }`}
        >
          {up ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
            {delta}
        </span>
                <span className="text-xs text-muted-2">vs last month</span>
            </div>
        </div>
    );
}
