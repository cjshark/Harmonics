import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/Harmonics/",
  plugins: [tailwindcss(), react()],
  build: {
    chunkSizeWarningLimit: 1000, // optional, increase limit if needed
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "framer-motion";
            if (id.includes("react-icons")) return "react-icons";
            if (id.includes("react-router-dom")) return "react-router";
            if (id.includes("react")) return "react";
            return "vendor"; // catch-all for other deps
          }
        },
      },
    },
  },
});
