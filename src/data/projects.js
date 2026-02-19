export const projects = [
  // project_1: slope analysis
  {
    slug: "slope-analysis-hamilton",
    title: "Parcel-level Slope Analysis (Hamilton)",
    repoUrl:
      "https://github.com/felix-zhang1/GIS_project-slope_analysis_on_development_in_hamilton",
    summary:
      "Automated slope analysis pipeline to research how slope influence development at parcel scale.",
    tags: ["ArcPy", "Automation", "DEM", "Planning"],
    highlights: [
      "Automated ArcPy pipeline for parcel-level slope metrics",
      "Literature-informed slope classes and steep-slope threshold (≥18°)",
      "City / zone / parcel summaries with maps and plots",
      "Re-runnable workflow with clear outputs for planning discussion",
    ],

    tools: ["ArcGIS Pro", "Python", "ArcPy", "Pandas", "Matplotlib"],
    featured: true,
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/slope_analysis/1_map_city_level.jpg`,
        caption: "city-level slope distribution map.",
      },
      {
        src: `${import.meta.env.BASE_URL}images/slope_analysis/2_map_zone_level_in_res.jpg`,
        caption: "zone-level steep slope distribution map in residential zone",
      },
      {
        src: `${import.meta.env.BASE_URL}images/slope_analysis/3_map_parcel_level_all parcels_10plus_steep_slope.jpg`,
        caption: "parcel-level 10plus steep slope proportion map",
      },
    ],
    sections: {
      problem: [
        {
          type: "text",
          value:
            "Current models assume the terrain is flat within each parcel.\n That create a gap between plan-enabled capacity and genuine capacity",
        },
      ],

      data: [
        {
          type: "list",
          items: [
            "1 m LiDAR-derived DEM",
            "NZ Primary Land Parcels",
            "Hamilton City boundary",
            "Residential / Non-Residential zoning",
            "Planning constraint layers",
          ],
        },
      ],

      method: [
        {
          type: "text",
          value: "An automated ArcPy pipeline was developed to:",
        },
        {
          type: "list",
          items: [
            "Derive slope (degrees) from 1 m DEM",
            "Reclassify slope into literature-informed classes",
            "Calculate slope-class areas per parcel (Tabulate Area)",
            "Define steep slope as ≥18°",
            "Compute steep-slope proportion per parcel",
            "Generate maps and summaries using pandas/matplotlib",
          ],
        },
      ],

      results: [
        // Slope classification (literature-derived)
        { type: "text", value: "Slope Classification (Literature-derived):" },
        {
          type: "list",
          items: [
            "S1 (0-6°): Highly suitable",
            "S2 (>6-12°): Suitable",
            "S3 (>12-18°): Moderately suitable",
            "S4 (>18-25°): Low suitability",
            "N1 (>25-35°): Generally unsuitable",
            "N2 (>35°): Unsuitable / high-hazard",
          ],
        },

        // City-level
        { type: "text", value: "City-level:" },
        {
          type: "list",
          items: [
            "0-6°: 80.0%",
            "<18° total: 95.9%",
            "≥35°: 0.5%",
            "Slope is not a dominant constraint at city scale.",
          ],
        },

        // Zone-level
        { type: "text", value: "Zone-level:" },
        {
          type: "list",
          items: [
            "Residential (≥18°): ~4.6%",
            "Non-residential (≥18°): ~2.2%",
            "Residential land shows higher steep-slope exposure.",
          ],
        },

        // Parcel-level
        { type: "text", value: "Parcel-level:" },
        {
          type: "list",
          items: [
            "77.7% of parcels contain <5% steep slope",
            "~86% contain <10% steep slope",
            "Parcels with ≥10% steep slope form clear spatial clusters.",
            "Slope constraints are site-specific and parcel-dependent.",
          ],
        },
      ],

      limitations: [
        {
          type: "list",
          items: [
            "Slope only (no soil/flood/infrastructure/access constraints).",
            "Thresholds (≥18°, 5% intervals) are analytical assumptions.",
          ],
        },
      ],
    },
  },

  // project_2: flood prediction
  {
    slug: "flood-prediction-hamilton",
    title: "Hamilton City Flood Inundation Prediction",
    repoUrl:
      "https://github.com/felix-zhang1/GIS_Project-flood_prediction_in_hamilton",
    summary:
      "Automated flood inundation workflow to estimate water depth and extent under extreme rainfall scenarios.",

    tags: ["ArcPy", "Automation", "Hydrology", "Raster", "Flood"],
    highlights: [
      "Hydrology workflow with weighted flow accumulation",
      "Flood depth estimation across 10/20/50-year rainfall scenarios",
      "Smoothing + region extraction to delineate inundation polygons",
      "Shelter candidate identification using non-flooded facilities",
    ],

    tools: ["ArcGIS Pro", "Python", "ArcPy"],
    featured: true,
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/flood_analysis/1_map_10y_inu_area.jpg`,
        caption: "Flood inundation map (10-year rainfall, 1-hour duration).",
      },
      {
        src: `${import.meta.env.BASE_URL}images/flood_analysis/2_map_20y_inu_area.jpg`,
        caption: "Flood inundation map (20-year rainfall, 1-hour duration).",
      },
      {
        src: `${import.meta.env.BASE_URL}images/flood_analysis/3_map_50y_inu_area.jpg`,
        caption: "Flood inundation map (50-year rainfall, 1-hour duration).",
      },
      {
        src: `${import.meta.env.BASE_URL}images/flood_analysis/4_chart_area_depth_comparison.png`,
        caption:
          "Comparison of total inundation area and average flood depth under different smoothing methods.",
      },
    ],
    sections: {
      problem: [
        {
          type: "text",
          value:
            "As extreme weather events become more frequent, Hamilton faces higher rainfall-related flood risk.\nThis project asks: when extreme rainfall occurs, where will flooding happen, and where can people go?",
        },
      ],

      data: [
        {
          type: "list",
          items: [
            "Hamilton City boundary",
            "DEM (1 m LiDAR, resampled to 10 m)",
            "Soil and landcover layers",
            "Rainfall scenarios (NIWA HIRDS): 10-, 20-, 50-year return periods (1-hour duration)",
            "Facilities (schools/hospitals) for candidate shelters",
          ],
        },
        {
          type: "text",
          value:
            "For full details of methodology, parameters, and outputs, see Report.pdf in GitHub.",
        },
      ],

      method: [
        {
          type: "text",
          value:
            "The workflow integrates ArcGIS Pro hydrological tools with Python scripting, and follows these steps:",
        },
        {
          type: "list",
          items: [
            "Data preparation: clip boundary; resample DEM (1 m → 10 m); prepare soil/landcover layers",
            "Weighted flow simulation: create composite weight raster from soil + landcover (Manning’s n references); Fill → Flow Direction → Weighted Flow Accumulation",
            "Water depth estimation: Water depth = Rainfall × Flow Accumulation; filter extreme values using the 90th percentile threshold",
            "Smoothing and region extraction: Focal Statistics (MEAN or MEDIAN, radius = 3 or 5); remove depth < 0.1 m; Region Group + Raster to Polygon to extract inundation regions > 1000 m²",
            "Contour and shelter site identification: generate 0.5 m interval contours; use Erase to identify non-flooded schools/hospitals as candidate shelters",
          ],
        },
      ],

      results: [
        { type: "text", value: "Result metrics extracted:" },
        {
          type: "list",
          items: [
            "Total inundation area",
            "Number of flood regions",
            "Average flood depth",
            "Maximum flood depth",
          ],
        },

        { type: "text", value: "Key findings:" },
        {
          type: "list",
          items: [
            "MEAN smoothing generates larger and deeper flood areas than MEDIAN.",
            "A radius of 5 (vs. 3) improves spatial continuity.",
            "Flood characteristics increase with rainfall intensity (10-year → 20-year → 50-year).",
            "Under extreme rainfall, results are highly sensitive to statistical methods used.",
          ],
        },
      ],

      limitations: [
        {
          type: "list",
          items: [
            "Underground drainage infrastructure was not modelled.",
            "No accessibility analysis was included in shelter site selection.",
            "Weight values were not tested via sensitivity analysis.",
          ],
        },
      ],
    },
  },

  // project_3: facility accessibility
  {
    slug: "facility-accessibility-hamilton",
    title: "Hamilton Public Facilities Accessibility Analysis",
    repoUrl:
      "https://github.com/felix-zhang1/GIS_Project-facility_accessibility_analysis_in_hamilton",
    summary:
      "Accessibility analysis comparing buffer and network methods to identify underserved residential areas.",

    tags: [
      "Accessibility",
      "Network Analysis",
      "Service Area",
      "Urban Planning",
      "Equity",
    ],
    highlights: [
      "Comparison of buffer vs network-based service area access",
      "500 m threshold applied consistently across facility types",
      "Underserved residential areas identified via accessibility classes",
      "Maps + metrics for equity-oriented planning interpretation",
    ],

    tools: ["ArcGIS Pro", "Python", "Network Analyst"],
    featured: false,
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/accessibility_analysis/1_chart_buffer_vs_network_area.png`,
        caption:
          "Comparison of accessible area between the Buffer and Network methods.",
      },
      {
        src: `${import.meta.env.BASE_URL}images/accessibility_analysis/2_map_buffer_method.jpg`,
        caption:
          "Spatial distribution of accessibility results using the Buffer Method.",
      },
      {
        src: `${import.meta.env.BASE_URL}images/accessibility_analysis/3_map_network_method.jpg`,
        caption:
          "Spatial distribution of accessibility results using the Network Method.",
      },
    ],
    sections: {
      problem: [
        {
          type: "text",
          value:
            "Equitable access to healthcare, education, and green space is essential for quality of life, especially for seniors and vulnerable populations.\nThis project asks: which residential areas in Hamilton City are currently underserved by public facilities?",
        },
      ],

      data: [
        {
          type: "text",
          value:
            "Selected facilities: schools, hospitals (including GP clinics), and parks.",
        },
        {
          type: "list",
          items: [
            "Hamilton City boundary (Stats NZ)",
            "Schools (LINZ Data Service)",
            "Hospitals / GP clinics (compiled from Healthpoint)",
            "Residential areas (LINZ Data Service)",
            "Parks / reserves (Waikato Open Data Hub)",
          ],
        },
        {
          type: "text",
          value:
            "Accessibility threshold: 500 m. Residential areas were clipped to the Hamilton boundary for analysis consistency.",
        },
      ],

      method: [
        { type: "text", value: "Two GIS-based methods were compared:" },
        {
          type: "list",
          items: [
            "Method 1 — Buffer + Union + Select: estimates potential coverage using Euclidean distance (500 m).",
            "Method 2 — Network Analyst (Service Area): estimates walkable access using the road network (500 m service area).",
          ],
        },
        { type: "text", value: "Core workflow:" },
        {
          type: "list",
          items: [
            "Generate 500 m accessibility zones for each facility type (schools, medical services, parks).",
            "Clip zones and residential areas to Hamilton City boundary.",
            "Classify residential areas into low / moderate / high accessibility based on facility coverage (including comprehensive access to all 3 types).",
            "Compare accessibility outcomes between buffer-based and network-based results.",
            "Produce maps and summary statistics for interpretation.",
          ],
        },
      ],

      results: [
        { type: "text", value: "Key findings:" },
        {
          type: "list",
          items: [
            "Low-accessibility areas dominate much of the city, especially when real travel paths are considered.",
            "Comprehensive accessibility (access to all 3 facility types) is limited: ~1.85 million m² (Network Method) vs ~4.65 million m² (Buffer Method).",
            "The Network Method provides a more realistic and conservative view than the Buffer-based method.",
          ],
        },
      ],

      limitations: [
        {
          type: "list",
          items: [
            "Population demand and traffic conditions were not considered.",
            "Facility classification was general (e.g., no distinction between large and small parks).",
            "Edge/boundary effects may influence results near city limits.",
          ],
        },
      ],
    },
  },

  // project_4: bus service
  {
    slug: "bus-service-analysis-hamilton",
    title: "Hamilton City Bus Service Coverage Analysis",
    repoUrl:
      "https://github.com/felix-zhang1/GIS_Project-bus_service_analysis_in_hamilton",
    summary:
      "Spatial analysis of bus stop coverage to identify service gaps across Hamilton City.",

    tags: ["Transport", "Public Transit", "Coverage", "Accessibility", "GIS"],
    highlights: [
      "Coverage gap mapping using 300/400/500 m bus stop buffers",
      "Uncovered areas extracted for city and key zones",
      "Exclusion refinement (water/protected areas) and road-access filtering",
      "Scenario comparison table to support planning prioritisation",
    ],

    tools: ["ArcGIS Pro", "Python", "ArcPy"],
    featured: false,
    images: [
      {
        src: `${import.meta.env.BASE_URL}images/bus_analysis/1_map_300buffer.jpg`,
        caption: "Areas without bus service (300 m buffer scenario).",
      },
      {
        src: `${import.meta.env.BASE_URL}images/bus_analysis/2_map_400buffer.jpg`,
        caption: "Areas without bus service (400 m buffer scenario).",
      },
      {
        src: `${import.meta.env.BASE_URL}images/bus_analysis/3_map_500buffer.jpg`,
        caption: "Areas without bus service (500 m buffer scenario).",
      },
      {
        src: `${import.meta.env.BASE_URL}images/bus_analysis/4_chart_uncovered_area_table.png`,
        caption:
          "Uncovered area comparison across buffer scenarios (total city vs key zones).",
      },
    ],
    sections: {
      problem: [
        {
          type: "text",
          value:
            "Bus services are essential for daily commuting, especially for people who rely on public transport (e.g., international students).\nThis project asks: which areas in Hamilton City lack bus stop coverage, and which key zones (residential, schools, hospitals, commercial areas) should be prioritised?",
        },
      ],

      data: [
        {
          type: "text",
          value:
            "Datasets were sourced from official providers (Waikato Open Data Hub, Stats NZ, LINZ). Full dataset links are documented in the Appendix of Report.pdf.",
        },
        {
          type: "list",
          items: [
            "Hamilton City boundary (Stats NZ)",
            "Bus stops and bus routes (Waikato Open Data Hub)",
            "Residential zones, schools, hospitals, commercial areas (LINZ Data Service)",
            "Road network (LINZ Data Service)",
            "Rivers, lakes, reserves / protected zones (LINZ + Waikato Open Data Hub)",
          ],
        },
      ],

      method: [
        {
          type: "text",
          value:
            "Spatial analysis logic (repeated for 300 m, 400 m, and 500 m):",
        },
        {
          type: "list",
          items: [
            "Create bus stop service buffers (300 m / 400 m / 500 m).",
            "Identify uncovered areas by subtracting buffer zones from (1) city boundary and (2) key zones (residential, schools, hospitals, etc.).",
            "Refine uncovered zones by removing water bodies and protected / excluded areas.",
            "Run an accessibility check using the road network to filter out areas without road access.",
            "Extract summary metrics and produce maps for each buffer scenario.",
          ],
        },
      ],

      results: [
        { type: "text", value: "Summary metrics (uncovered area):" },
        {
          type: "list",
          items: [
            "300 m: total uncovered 38,171,365 m²; uncovered in key zones 9,824,573 m²",
            "400 m: total uncovered 29,523,099 m²; uncovered in key zones 4,478,612 m²",
            "500 m: total uncovered 24,446,065 m²; uncovered in key zones 2,390,834 m²",
          ],
        },
        { type: "text", value: "Key takeaways:" },
        {
          type: "list",
          items: [
            "As buffer size increases, uncovered areas shrink.",
            "Uncovered key zones (e.g., residential or schools) should be prioritised for future service planning.",
            "Larger buffers can overstate coverage and may hide practical gaps in high-priority areas.",
          ],
        },
      ],

      limitations: [
        {
          type: "list",
          items: [
            "Source datasets may differ in resolution and update time, affecting accuracy.",
            "No population distribution, real travel behaviour, or physical barriers (e.g., rivers, elevation) were modelled.",
            "Buffers approximate walking access and do not reflect real network conditions.",
          ],
        },
      ],
    },
  },
];
