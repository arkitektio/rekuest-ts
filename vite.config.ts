import { build, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],

  server: {
    port: 3000,
    strictPort: true,
  },
  build: {
    lib: {
      entry: "src/rekuest/index.tsx",
      name: "rekuest",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "@apollo/client",
        "subscriptions-transport-ws ",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
