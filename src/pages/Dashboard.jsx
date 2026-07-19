import StatCard from "../components/dashboard/StatCard.jsx";
import RevenueChart from "../components/dashboard/RevenueChart";
import ActivityTable from "../components/dashboard/ActivityTable";
import ProfileCard from "../components/dashboard/ProfileCard";
import NotificationsFeed from "../components/dashboard/NotificationsFeed";
import { statOverview } from "../data/mockData";

const delayClasses = ["stagger-1", "stagger-2", "stagger-3", "stagger-4"];

export default function Dashboard() {
    return (
        <div className="mx-auto max-w-[1400px] space-y-5">
            <div className="fade-up">
                <h2 className="font-display text-xl font-semibold text-text lg:hidden">
                    Overview
                </h2>
                <p className="mt-1 text-sm text-muted-2">
                    Welcome back, here's what's happening across your workspace today.
                </p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {statOverview.map((s, i) => (
                    <StatCard key={s.id} {...s} delayClass={delayClasses[i]} />
                ))}
            </div>

            {/* Chart + Profile */}
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <RevenueChart />
                </div>
                <ProfileCard />
            </div>

            {/* Table + Notifications */}
            <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
                <div className="xl:col-span-2">
                    <ActivityTable />
                </div>
                <NotificationsFeed />
            </div>
        </div>
    );
}
