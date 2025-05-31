import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/bluegator-site/",
  server: {
    port: 5173,
    open: true, // 👈 this tells Vite to open the browser automatically
  },
});
