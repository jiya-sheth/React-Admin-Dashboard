import { Bell, ShoppingBag, AlertTriangle, UserPlus, FileCheck2 } from "lucide-react";
import { notifications } from "../../data/mockData";

const iconFor = {
    order: { Icon: ShoppingBag, className: "text-accent bg-accent-soft" },
    alert: { Icon: AlertTriangle, className: "text-danger bg-danger-soft" },
    user: { Icon: UserPlus, className: "text-teal bg-teal-soft" },
    task: { Icon: FileCheck2, className: "text-amber bg-amber-soft" },
};

export default function NotificationsPanel({ open, onToggle }) {
    const unreadCount = notifications.filter((n) => n.unread).length;

    return (
        <div className="relative">
            <button
                onClick={onToggle}
                aria-label="Notifications"
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface text-muted transition hover:text-text"
            >
                <Bell size={18} />
                {unreadCount > 0 && (
                    <span className="live-dot absolute right-2 top-2 h-2 w-2 rounded-full bg-danger text-danger" />
                )}
            </button>

            {open && (
                <div className="absolute right-0 z-50 mt-2 w-80 origin-top-right rounded-2xl border border-border bg-surface p-2 shadow-xl fade-up sm:w-96">
                    <div className="flex items-center justify-between px-3 py-2">
                        <h3 className="font-display text-sm font-semibold">Notifications</h3>
                        <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-xs text-accent">
              {unreadCount} new
            </span>
                    </div>
                    <div className="max-h-80 space-y-0.5 overflow-y-auto">
                        {notifications.map((n) => {
                            const { Icon, className } = iconFor[n.type];
                            return (
                                <div
                                    key={n.id}
                                    className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-base"
                                >
                                    <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${className}`}>
                                        <Icon size={15} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm leading-snug text-text">{n.text}</p>
                                        <p className="mt-0.5 font-mono text-xs text-muted-2">{n.time}</p>
                                    </div>
                                    {n.unread && <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />}
                                </div>
                            );
                        })}
                    </div>
                    <button className="mt-1 w-full rounded-xl py-2 text-center text-sm font-medium text-accent transition hover:bg-accent-soft">
                        View all notifications
                    </button>
                </div>
            )}
        </div>
    );
}
