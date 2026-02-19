export default function TagChips({ tags = [], selected = null, onSelect }) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onSelect?.(null)}
        className={`rounded-full border px-3 py-1 text-sm transition ${
          selected === null
            ? "border-slate-900 bg-slate-900 text-white"
            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
        }`}
      >
        All
      </button>

      {tags.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => onSelect?.(t)}
          className={`rounded-full border px-3 py-1 text-sm transition ${
            selected === t
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
          }`}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
