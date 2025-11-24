import { defineConfig } from "astro/config";
import { fileURLToPath } from "node:url";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
        "@components": fileURLToPath(new URL("./src/components", import.meta.url)),
        "@data": fileURLToPath(new URL("./src/data", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url))
      }
    }
  }
});
