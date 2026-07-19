import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar.jsx";

const titles = {
    overview: "Overview",
    analytics: "Analytics",
    projects: "Projects",
    orders: "Orders",
    customers: "Customers",
    messages: "Messages",
    settings: "Settings",
};

export default function DashboardLayout({ children, active, onSelect }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <div className="flex min-h-screen bg-base">
            <Sidebar
                active={active}
                onSelect={(id) => {
                    onSelect(id);
                    setSidebarOpen(false);
                }}
                open={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex min-w-0 flex-1 flex-col">
                <Topbar
                    onMenuClick={() => setSidebarOpen(true)}
                    search={search}
                    onSearchChange={setSearch}
                    pageTitle={titles[active] || "Overview"}
                />
                <main className="flex-1 px-4 py-5 sm:px-6 lg:py-6">{children}</main>
            </div>
        </div>
    );
}
