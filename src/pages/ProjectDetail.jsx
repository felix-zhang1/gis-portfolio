import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="space-y-4">
        <h1 className="text-xl font-semibold">Project not found</h1>
        <Link className="text-slate-600 hover:text-slate-900" to="/projects">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const { sections } = project;

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <Link
          className="text-sm text-slate-600 hover:text-slate-900"
          to="/projects"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title}
        </h1>

        <p className="text-slate-600 leading-7 max-w-3xl">{project.summary}</p>

        <div className="flex flex-wrap gap-3">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
          >
            View on GitHub
          </a>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {project.highlights?.length ? (
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold">Project Highlights</h2>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
                {project.highlights.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ) : null}

          <Block title="Problem" content={sections.problem} />
          <Block title="Data" content={sections.data} />
          <Block title="Method" content={sections.method} />
          <Block title="Key Results" content={sections.results} />
          <Block
            title="Limitations & Improvements"
            content={sections.limitations}
          />

          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Figures</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.images.map((img) => (
                <figure
                  key={img.src}
                  className="rounded-2xl border border-slate-200 bg-white p-3"
                >
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-slate-100">
                    <img
                      src={img.src}
                      alt={img.caption ?? ""}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-slate-600">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Tags</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="text-sm font-semibold text-slate-900">Tools</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
              {project.tools.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Block({ title, content }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>

      <div className="mt-2 space-y-3 text-sm leading-6 text-slate-700">
        {content?.map((node, idx) => {
          if (!node) return null;

          switch (node.type) {
            case "text":
              return (
                <p key={idx} className="whitespace-pre-line">
                  {node.value}
                </p>
              );

            case "list":
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1">
                  {node.items.map((item, i) => (
                    <li key={`${idx}-${i}`}>{item}</li>
                  ))}
                </ul>
              );

            case "image":
              return (
                <figure
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-3"
                >
                  <img
                    src={node.src}
                    alt={node.alt ?? ""}
                    className="w-full rounded-xl"
                    loading="lazy"
                  />
                  {node.caption ? (
                    <figcaption className="mt-2 text-xs text-slate-600">
                      {node.caption}
                    </figcaption>
                  ) : null}
                </figure>
              );

            default:
              // fallback for unexpected types
              return null;
          }
        })}
      </div>
    </div>
  );
}
