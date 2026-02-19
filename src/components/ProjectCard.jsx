import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Image */}
      <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
        {project.featured && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-slate-900 px-3 py-1 text-xs text-white">
            Featured
          </span>
        )}

        {project.images?.length > 0 ? (
          <img
            src={project.images[0].src}
            alt={project.images[0].caption}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-xs text-slate-400">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-base font-semibold text-slate-900">
          {project.title}
        </h3>

        <p className="text-sm leading-6 text-slate-600 line-clamp-3">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Overview
          </Link>

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
