export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-slate-600 md:flex-row">
        <span className="text-center md:text-left">
          © {new Date().getFullYear()} Felix Zhang ·
          <span className="font-medium text-slate-800">
            {" "}
            GIS Developer / Spatial Analyst
          </span>
        </span>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/felix-zhang1"
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-1.5 transition hover:bg-indigo-100 hover:text-indigo-700"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/gongfanzhang/"
            target="_blank"
            rel="noreferrer"
            className="rounded-md px-3 py-1.5 transition hover:bg-indigo-100 hover:text-indigo-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
