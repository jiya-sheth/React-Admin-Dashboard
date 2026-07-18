const styles = {
    Completed: "text-teal bg-teal-soft",
    Processing: "text-amber bg-amber-soft",
    Failed: "text-danger bg-danger-soft",
};

export default function Badge({ status }) {
    return (
        <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
                styles[status] || "bg-base text-muted"
            }`}
        >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {status}
    </span>
    );
}
