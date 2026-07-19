import { Menu, ChevronDown } from "lucide-react";
import { useState } from "react";
import SearchBar from "../dashboard/SearchBar.jsx";
import NotificationsPanel from "../dashboard/NotificationsPanel";
import Avatar from "../ui/Avatar";
import { currentUser } from "../../data/mockData";

export default function Topbar({ onMenuClick, search, onSearchChange, pageTitle }) {
    const [notifOpen, setNotifOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);


    return (
        <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border bg-surface/90 px-4 py-3.5 backdrop-blur sm:px-6">
            <button
                onClick={onMenuClick}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border text-muted lg:hidden"
                aria-label="Open menu"
            >
                <Menu size={18} />
            </button>

            <div className="hidden shrink-0 lg:block">
                <h1 className="font-display text-lg font-semibold text-text">{pageTitle}</h1>
            </div>

            <div className="flex flex-1 items-center justify-end gap-3 sm:justify-between">
                <SearchBar value={search} onChange={onSearchChange} />

                <div className="flex items-center gap-2 sm:gap-3">
                    <NotificationsPanel
                        open={notifOpen}
                        onToggle={() => {
                            setNotifOpen((v) => !v);
                            setProfileOpen(false);
                        }}
                    />

                    <div className="relative">
                        <button
                            onClick={() => {
                                setProfileOpen((v) => !v);
                                setNotifOpen(false);
                            }}
                            className="flex items-center gap-2 rounded-xl border border-border bg-surface py-1.5 pl-1.5 pr-2.5 transition hover:border-accent/40"
                        >
                            <Avatar initials={currentUser.initials} color={currentUser.avatarColor} size={30} />
                            <span className="hidden font-medium text-sm text-text sm:block">
                {currentUser.name.split(" ")[0]}
              </span>
                            <ChevronDown size={14} className="hidden text-muted-2 sm:block" />
                        </button>

                        {profileOpen && (
                            <div className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-2xl border border-border bg-surface p-1.5 shadow-xl fade-up">
                                <div className="border-b border-border px-3 py-2.5">
                                    <p className="text-sm font-medium text-text">{currentUser.name}</p>
                                    <p className="text-xs text-muted-2">{currentUser.email}</p>
                                </div>
                                {["View profile", "Account settings", "Billing"].map((label) => (
                                    <button
                                        key={label}
                                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-muted transition hover:bg-base hover:text-text"
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}