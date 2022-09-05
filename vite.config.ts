import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import loadVersion from "vite-plugin-package-version";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

export default defineConfig({
  build: {
    outDir: "build",
  },
  plugins: [
    tsconfigPaths(),
    react(),
    loadVersion(),
    svgr({
      exportAsDefault: true,
    }),
    checker({
      typescript: true,
      eslint: {
        lintCommand: "eslint src/",
        dev: {
          logLevel: ["warning"],
        },
      },
      enableBuild: false,
    }),
  ],
});
