import { Search } from "lucide-react";

export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative hidden w-full max-w-sm sm:block">
            <Search
                size={17}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-2"
            />
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search orders, customers, projects…"
                className="w-full rounded-xl border border-border bg-base py-2.5 pl-10 pr-4 text-sm text-text placeholder:text-muted-2 outline-none transition focus:border-accent focus:bg-surface focus:ring-4 focus:ring-accent-soft"
            />
        </div>
    );
}
