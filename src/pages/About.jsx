// C:\IT_Projects\gis-portfolio\src\pages\About.jsx
export default function About() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Felix Zhang</h1>
        <p className="text-sm text-slate-500">
          GIS Developer / Spatial Analyst · Hamilton, New Zealand
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <p className="text-sm leading-6 text-slate-700">
          Hi everyone, I am Felix Zhang (Chinese name: Gongfan Zhang), who is a GIS-focused IT graduate based in New Zealand, specialising in
          geospatial automation and spatial analysis using ArcGIS Pro and
          Python.
        </p>

        <p className="text-sm leading-6 text-slate-700">
          I’m highly self-driven and strong at self-learning. I adapt quickly to
          new tools and technologies, and I like to validate results carefully
          with clear outputs (maps, statistics, and technical documentation).
        </p>

        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>ArcGIS Pro + ArcPy automation (repeatable pipelines)</li>
          <li>
            Raster / vector analysis (hydrology, terrain, service coverage)
          </li>
          <li>
            Accessibility analysis (buffer vs network/service area methods)
          </li>
          <li>Clean mapping, reporting, and portfolio-ready communication</li>
        </ul>

        <p className="text-sm leading-6 text-slate-700">
          Target roles: <span className="font-medium">GIS Developer</span>,{" "}
          <span className="font-medium">Spatial Analyst</span>, and{" "}
          <span className="font-medium">GIS Analyst</span>.
        </p>
      </div>
    </div>
  );
}
