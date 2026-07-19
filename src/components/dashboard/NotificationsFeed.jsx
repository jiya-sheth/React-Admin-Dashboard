import { ShoppingBag, AlertTriangle, UserPlus, FileCheck2 } from "lucide-react";
import { notifications } from "../../data/mockData";

const iconFor = {
    order: { Icon: ShoppingBag, className: "text-accent bg-accent-soft" },
    alert: { Icon: AlertTriangle, className: "text-danger bg-danger-soft" },
    user: { Icon: UserPlus, className: "text-teal bg-teal-soft" },
    task: { Icon: FileCheck2, className: "text-amber bg-amber-soft" },
};

export default function NotificationsFeed() {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 fade-up">
            <div className="mb-3 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-text">Activity Feed</h3>
                <span className="live-dot relative h-2 w-2 rounded-full bg-teal text-teal" />
            </div>
            <ul className="space-y-4">
                {notifications.slice(0, 4).map((n, idx) => {
                    const { Icon, className } = iconFor[n.type];
                    return (
                        <li key={n.id} className="flex gap-3">
                            <div className="flex flex-col items-center">
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${className}`}>
                                    <Icon size={14} />
                                </div>
                                {idx < 3 && <span className="mt-1 w-px flex-1 bg-border" />}
                            </div>
                            <div className="pb-1">
                                <p className="text-sm leading-snug text-text">{n.text}</p>
                                <p className="mt-0.5 font-mono text-xs text-muted-2">{n.time}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
