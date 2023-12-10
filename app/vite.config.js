import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const pwaConfig = {
  devOptions: {
    enabled: true,
  },
  injectRegister: "auto",
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
    globIgnores: ["**/node_modules/**/*", "sw.js", "workbox-*.js"],
  },
  registerType: "prompt",
  includeAssests: [
    "favicon.png",
    "logo.png",
    "logo180.png",
    "logo192.png",
    "logo512.png",
  ],
  manifest: {
    name: "HIGH END INTERNATIONAL ACADEMY",
    short_name: "HEIA SMS",
    description: "school Managent Software of HEIA.",
    theme_color: "#134074",
    background_color: "#f0e7db",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
    icons: [
      {
        src: "/logo192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo180.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  },
  build: {
    outDir: "/dist",
    minify: true,
  },
};

export default defineConfig({
  plugins: [react(), VitePWA(pwaConfig)],
});
