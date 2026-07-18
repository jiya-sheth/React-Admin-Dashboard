import { Mail, MapPin, Briefcase } from "lucide-react";
import Avatar from "../ui/Avatar";
import { currentUser } from "../../data/mockData";

const stats = [
    { label: "Projects", value: "18" },
    { label: "Tasks done", value: "246" },
    { label: "Team", value: "9" },
];

export default function ProfileCard() {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 fade-up">
            <div className="flex items-center gap-3.5">
                <Avatar initials={currentUser.initials} color={currentUser.avatarColor} size={52} />
                <div className="min-w-0">
                    <h3 className="truncate font-display text-base font-semibold text-text">
                        {currentUser.name}
                    </h3>
                    <p className="text-sm text-muted-2">{currentUser.role}</p>
                </div>
            </div>

            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm text-muted">
                <div className="flex items-center gap-2.5">
                    <Mail size={15} className="text-muted-2" />
                    {currentUser.email}
                </div>
                <div className="flex items-center gap-2.5">
                    <Briefcase size={15} className="text-muted-2" />
                    Product Operations
                </div>
                <div className="flex items-center gap-2.5">
                    <MapPin size={15} className="text-muted-2" />
                    Bengaluru, India
                </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                {stats.map((s) => (
                    <div key={s.label} className="rounded-xl bg-base py-2.5 text-center">
                        <p className="font-display text-lg font-semibold text-text">{s.value}</p>
                        <p className="text-xs text-muted-2">{s.label}</p>
                    </div>
                ))}
            </div>

            <button className="mt-4 w-full rounded-xl bg-accent py-2.5 text-sm font-medium text-white transition hover:bg-accent-2">
                Edit profile
            </button>
        </div>
    );
}
