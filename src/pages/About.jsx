export default function About() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Felix Zhang</h1>

        <p className="text-sm text-slate-500">
          Data Engineer · Geospatial Data Specialist · Auckland, New Zealand
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <p className="text-sm leading-6 text-slate-700">
          Hi, I am Felix Zhang, also known by my legal name, Gongfan Zhang. I am
          an IT graduate based in New Zealand, focused on data engineering,
          workflow automation, and geospatial data.
        </p>

        <p className="text-sm leading-6 text-slate-700">
          I build reliable and repeatable data workflows using Python, SQL,
          Azure, Snowflake, dbt, and PostgreSQL/PostGIS. My geospatial
          background enables me to work with both business and spatial datasets
          and transform them into validated, analytics-ready data products.
        </p>

        <p className="text-sm leading-6 text-slate-700">
          I am highly self-driven and committed to continuous learning. I
          actively seek guidance from data professionals through LinkedIn,
          Summer of Tech, and industry events, then apply what I learn through
          practical projects and professional certifications.
        </p>

        <ul className="list-disc pl-5 text-sm text-slate-700 space-y-1">
          <li>
            Python and SQL for data ingestion, transformation, and automation
          </li>

          <li>ETL/ELT pipelines using Azure, Snowflake, and dbt</li>

          <li>
            PostgreSQL/PostGIS for spatial data validation, transformation, and
            analysis
          </li>

          <li>
            Data modelling, data quality testing, documentation, and lineage
          </li>

          <li>Power BI reporting and analytics-ready data delivery</li>
        </ul>

        <p className="text-sm leading-6 text-slate-700">
          Target roles: <span className="font-medium">Data Engineer</span>,{" "}
          <span className="font-medium">Junior Data Engineer</span>, and{" "}
          <span className="font-medium">
            Data Engineer with Geospatial Specialisation
          </span>
          .
        </p>
      </div>
    </div>
  );
}
