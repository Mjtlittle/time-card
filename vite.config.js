import { svelte } from "@sveltejs/vite-plugin-svelte";
import unpluginIcons from "unplugin-icons/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    unpluginIcons({
      compiler: "svelte",
    }),
  ],
  base: "/time-card/",
});
