import { useMemo, useState } from "react";
import { projects } from "../data/projects.js";
import TagChips from "../components/TagChips.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const allTags = useMemo(() => {
    const s = new Set();
    projects.forEach((p) => p.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchText =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q));
      const matchTag = !selectedTag || p.tags.includes(selectedTag);
      return matchText && matchTag;
    });
  }, [query, selectedTag]);

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <h1 className="text-2xl font-semibold">Projects</h1>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects..."
            className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-400 md:max-w-md"
          />

          <TagChips tags={allTags} selected={selectedTag} onSelect={setSelectedTag} />
        </div>
      </header>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
