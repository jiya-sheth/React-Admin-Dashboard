export default function Avatar({ initials, color = "#6C5CE7", size = 40 }) {
    return (
        <div
            className="flex shrink-0 items-center justify-center rounded-full font-display font-semibold text-white"
            style={{
                width: size,
                height: size,
                background: color,
                fontSize: size * 0.38,
            }}
        >
            {initials}
        </div>
    );
}
