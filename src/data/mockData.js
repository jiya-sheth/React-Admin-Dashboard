export const currentUser = {
    name: "Amara Chen",
    role: "Product Operations Lead",
    email: "amara.chen@pulse.io",
    avatarColor: "#6C5CE7",
    initials: "AC",
};

export const statOverview = [
    {
        id: "users",
        label: "Active Users",
        value: "12,482",
        delta: "+8.2%",
        trend: "up",
        spark: [4, 6, 5, 8, 7, 9, 12, 11, 14],
    },
    {
        id: "revenue",
        label: "Revenue (MTD)",
        value: "$84,290",
        delta: "+12.4%",
        trend: "up",
        spark: [10, 9, 12, 11, 15, 14, 17, 19, 22],
    },
    {
        id: "orders",
        label: "Orders",
        value: "1,926",
        delta: "-3.1%",
        trend: "down",
        spark: [14, 15, 13, 12, 12, 11, 10, 9, 9],
    },
    {
        id: "projects",
        label: "Active Projects",
        value: "37",
        delta: "+4 new",
        trend: "up",
        spark: [3, 4, 4, 5, 5, 6, 6, 7, 8],
    },
];

export const revenueSeries = [
    { month: "Jan", revenue: 32000, target: 30000 },
    { month: "Feb", revenue: 38500, target: 33000 },
    { month: "Mar", revenue: 35200, target: 35000 },
    { month: "Apr", revenue: 44800, target: 37000 },
    { month: "May", revenue: 41200, target: 39000 },
    { month: "Jun", revenue: 52600, target: 41000 },
    { month: "Jul", revenue: 58900, target: 43000 },
];

export const recentOrders = [
    {
        id: "ORD-8841",
        customer: "Liam Foster",
        initials: "LF",
        product: "Pro Workspace Plan",
        date: "Jul 16, 2026",
        amount: "$249.00",
        status: "Completed",
    },
    {
        id: "ORD-8840",
        customer: "Priya Nair",
        initials: "PN",
        product: "Team Seats x12",
        date: "Jul 16, 2026",
        amount: "$1,440.00",
        status: "Processing",
    },
    {
        id: "ORD-8839",
        customer: "Sofia Marquez",
        initials: "SM",
        product: "Analytics Add-on",
        date: "Jul 15, 2026",
        amount: "$89.00",
        status: "Completed",
    },
    {
        id: "ORD-8838",
        customer: "Daniel Osei",
        initials: "DO",
        product: "Starter Plan",
        date: "Jul 15, 2026",
        amount: "$29.00",
        status: "Failed",
    },
    {
        id: "ORD-8837",
        customer: "Wei Zhang",
        initials: "WZ",
        product: "Pro Workspace Plan",
        date: "Jul 14, 2026",
        amount: "$249.00",
        status: "Completed",
    },
    {
        id: "ORD-8836",
        customer: "Grace Kelly",
        initials: "GK",
        product: "Team Seats x5",
        date: "Jul 14, 2026",
        amount: "$600.00",
        status: "Processing",
    },
];

export const notifications = [
    {
        id: 1,
        type: "order",
        text: "New order #ORD-8841 placed by Liam Foster",
        time: "2m ago",
        unread: true,
    },
    {
        id: 2,
        type: "alert",
        text: "Server response time above threshold on eu-west-1",
        time: "26m ago",
        unread: true,
    },
    {
        id: 3,
        type: "user",
        text: "Priya Nair upgraded to Team plan",
        time: "1h ago",
        unread: true,
    },
    {
        id: 4,
        type: "task",
        text: "Weekly analytics report is ready to view",
        time: "3h ago",
        unread: false,
    },
    {
        id: 5,
        type: "user",
        text: "3 new signups from the onboarding campaign",
        time: "5h ago",
        unread: false,
    },
];

export const navItems = [
    { id: "overview", label: "Overview", icon: "LayoutGrid" },
    { id: "analytics", label: "Analytics", icon: "BarChart3" },
    { id: "projects", label: "Projects", icon: "FolderKanban" },
    { id: "orders", label: "Orders", icon: "ShoppingCart" },
    { id: "customers", label: "Customers", icon: "Users" },
    { id: "messages", label: "Messages", icon: "MessageSquare" },
    { id: "settings", label: "Settings", icon: "Settings" },
];
