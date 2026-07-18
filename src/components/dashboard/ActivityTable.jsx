import { MoreHorizontal } from "lucide-react";
import Avatar from "../ui/Avatar";
import Badge from "../ui/Badge";
import { recentOrders } from "../../data/mockData";

const avatarPalette = ["#6C5CE7", "#00B8A0", "#F5A524", "#F0506E", "#8B7CF6"];

export default function ActivityTable() {
    return (
        <div className="rounded-2xl border border-border bg-surface p-5 fade-up">
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <h3 className="font-display text-base font-semibold text-text">Recent Orders</h3>
                    <p className="text-sm text-muted-2">{recentOrders.length} orders this week</p>
                </div>
                <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-accent transition hover:bg-accent-soft">
                    View all
                </button>
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto md:block">
                <table className="w-full text-left text-sm">
                    <thead>
                    <tr className="border-b border-border text-xs uppercase tracking-wide text-muted-2">
                        <th className="pb-3 font-medium">Order</th>
                        <th className="pb-3 font-medium">Customer</th>
                        <th className="pb-3 font-medium">Product</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium">Amount</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {recentOrders.map((order, i) => (
                        <tr
                            key={order.id}
                            className="border-b border-border/70 last:border-0 hover:bg-base"
                        >
                            <td className="py-3 font-mono text-xs text-muted-2">{order.id}</td>
                            <td className="py-3">
                                <div className="flex items-center gap-2.5">
                                    <Avatar
                                        initials={order.initials}
                                        color={avatarPalette[i % avatarPalette.length]}
                                        size={28}
                                    />
                                    <span className="font-medium text-text">{order.customer}</span>
                                </div>
                            </td>
                            <td className="py-3 text-muted">{order.product}</td>
                            <td className="py-3 text-muted-2">{order.date}</td>
                            <td className="py-3 font-mono font-medium text-text">{order.amount}</td>
                            <td className="py-3">
                                <Badge status={order.status} />
                            </td>
                            <td className="py-3 text-right">
                                <button className="rounded-lg p-1.5 text-muted-2 hover:bg-base hover:text-text">
                                    <MoreHorizontal size={16} />
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile stacked cards */}
            <div className="space-y-3 md:hidden">
                {recentOrders.map((order, i) => (
                    <div key={order.id} className="rounded-xl border border-border p-3.5">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <Avatar
                                    initials={order.initials}
                                    color={avatarPalette[i % avatarPalette.length]}
                                    size={30}
                                />
                                <div>
                                    <p className="text-sm font-medium text-text">{order.customer}</p>
                                    <p className="font-mono text-xs text-muted-2">{order.id}</p>
                                </div>
                            </div>
                            <Badge status={order.status} />
                        </div>
                        <div className="mt-3 flex items-center justify-between text-sm">
                            <span className="text-muted">{order.product}</span>
                            <span className="font-mono font-medium text-text">{order.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
