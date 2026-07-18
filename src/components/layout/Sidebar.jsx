import {
    LayoutGrid,
    BarChart3,
    FolderKanban,
    ShoppingCart,
    Users,
    MessageSquare,
    Settings,
    Activity,
    X,
    LogOut,
} from "lucide-react";
import { navItems } from "../../data/mockData";

const icons = {
    LayoutGrid,
    BarChart3,
    FolderKanban,
    ShoppingCart,
    Users,
    MessageSquare,
    Settings,
};

export default function Sidebar({ active, onSelect, open, onClose }) {
    return (
        <>
            {/* Mobile scrim */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-ink/50 lg:hidden"
                    onClick={onClose}
                    aria-hidden="true"
                />
            )}

            <aside
                className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-ink text-white transition-transform duration-300 ease-out
        lg:static lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex items-center justify-between px-5 pt-6 pb-5">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
                            <Activity size={18} strokeWidth={2.5} />
                        </div>
                        <span className="font-display text-lg font-semibold tracking-tight">
              Pulse
            </span>
                    </div>
                    <button
                        className="rounded-lg p-1.5 text-white/60 hover:bg-white/5 lg:hidden"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <X size={18} />
                    </button>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
                    <p className="px-3 pb-2 pt-3 font-mono text-[11px] uppercase tracking-widest text-white/35">
                        Main
                    </p>
                    {navItems.map((item) => {
                        const Icon = icons[item.icon];
                        const isActive = active === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => onSelect(item.id)}
                                className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors
                  ${
                                    isActive
                                        ? "bg-accent text-white"
                                        : "text-white/60 hover:bg-white/5 hover:text-white"
                                }`}
                            >
                                <Icon size={18} strokeWidth={2} />
                                {item.label}
                                {isActive && (
                                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="border-t border-ink-line px-3 py-4">
                    <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white">
                        <LogOut size={18} strokeWidth={2} />
                        Sign out
                    </button>
                </div>
            </aside>
        </>
    );
}