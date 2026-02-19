export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Contact</h1>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
        {/* LinkedIn Info */}
        <a
          href="https://www.linkedin.com/in/gongfanzhang/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
        >
          <span>LinkedIn</span>
          <span className="text-slate-400">↗</span>
        </a>

        {/* GitHub Info */}
        <a
          href="https://github.com/felix-zhang1"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
        >
          <span>GitHub</span>
          <span className="text-slate-400">↗</span>
        </a>

        {/* Email Info */}
        <a
          href="mailto:zhanggongfan2024@gmail.com"
          className="flex items-center justify-between rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:border-slate-300"
        >
          <div>
            <div>Email</div>
            <div className="text-xs text-slate-400">
              zhanggongfan2024@gmail.com
            </div>
          </div>
          <span className="text-slate-400">✉</span>
        </a>
      </div>
    </div>
  );
}
