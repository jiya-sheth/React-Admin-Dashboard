import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";
import { revenueSeries } from "../../data/mockData";

function CustomTooltip({ active, payload, label }) {
    if (!active || !payload?.length) return null;
    return (
        <div className="rounded-xl border border-border bg-surface px-3 py-2 text-xs shadow-lg">
            <p className="mb-1 font-medium text-text">{label} 2026</p>
            <p className="text-accent">Revenue: ${payload[0].value.toLocaleString()}</p>
            <p className="text-muted-2">Target: ${payload[1].value.toLocaleString()}</p>
        </div>
    );
}

export default function RevenueChart() {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 fade-up">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="font-display text-base font-semibold text-text">
                        Revenue Performance
                    </h3>
                    <p className="text-sm text-muted-2">Actual vs target, last 7 months</p>
                </div>
                <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-muted">
            <span className="h-2 w-2 rounded-full bg-accent" /> Revenue
          </span>
                    <span className="flex items-center gap-1.5 text-muted">
            <span className="h-2 w-2 rounded-full bg-border" /> Target
          </span>
                </div>
            </div>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={revenueSeries} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#6C5CE7" stopOpacity={0.35} />
                                <stop offset="100%" stopColor="#6C5CE7" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid stroke="#E7E7F1" vertical={false} />
                        <XAxis
                            dataKey="month"
                            tick={{ fontSize: 12, fill: "#9a9aab" }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <YAxis
                            tick={{ fontSize: 12, fill: "#9a9aab" }}
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={(v) => `$${v / 1000}k`}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="#6C5CE7"
                            strokeWidth={2.5}
                            fill="url(#revFill)"
                        />
                        <Area
                            type="monotone"
                            dataKey="target"
                            stroke="#D7D7E5"
                            strokeWidth={2}
                            fill="transparent"
                            strokeDasharray="4 4"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
