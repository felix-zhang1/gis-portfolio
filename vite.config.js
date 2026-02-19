import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  // the deployment site (full site: https://felix-zhang1.github.io/gis-portfolio/)
  base: "/gis-portfolio/" 
});
