import path from "node:path";
import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import type { InlineConfig } from "vitest";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  test: {
    globals: true,
  },
} as UserConfig & {
  test: InlineConfig;
});
