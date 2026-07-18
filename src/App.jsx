import { useState } from "react";
import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./pages/Dashboard";

// Placeholder for sections not yet built out — keeps navigation functional
// while signaling which page is active.
function ComingSoon({ label }) {
  return (
      <div className="flex h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-border text-center">
        <p className="font-display text-lg font-semibold text-text">{label}</p>
        <p className="mt-1 text-sm text-muted-2">This section is under construction.</p>
      </div>
  );
}

export default function App() {
  const [active, setActive] = useState("overview");

  return (
      <DashboardLayout active={active} onSelect={setActive}>
        {active === "overview" ? (
            <Dashboard />
        ) : (
            <ComingSoon label={active[0].toUpperCase() + active.slice(1)} />
        )}
      </DashboardLayout>
  );
}
