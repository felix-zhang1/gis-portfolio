import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16 bg-slate-50/60 px-4 py-12">
      {/* HERO */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50/40 to-white p-10 shadow-sm">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight">
            Data Engineer · Geospatial Data Specialist
          </h1>

          <p className="text-slate-600 leading-7">
            I build reliable, automated data pipelines using Python, SQL, Azure,
            Snowflake and dbt. With a strong background in geospatial data and
            PostGIS, I transform complex spatial and business datasets into
            trusted, analytics-ready data products.
          </p>

          <div className="flex flex-wrap gap-3 text-sm">
            {[
              "Python & SQL",
              "ETL / ELT Pipelines",
              "Snowflake & dbt",
              "Azure Data Engineering",
              "PostGIS & Geospatial Data",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="rounded-xl bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition"
            >
              View Projects
            </Link>

            <a
              href="https://github.com/felix-zhang1"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:border-slate-400 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="space-y-6 border-t border-slate-200 pt-10">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold">Featured Projects</h2>
          <Link
            to="/projects"
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            All projects →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
