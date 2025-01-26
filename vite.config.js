import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // GitHub Pages için ana dizin, özel domain kullanıldığında da bu / olmalı
  plugins: [react()],
});
