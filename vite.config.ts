import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";
import packageJson from "./package.json";

const APP_NAME = "mfe-host";
// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  const port = Number(env.VITE_PORT) || 3001;
  return {
    base: env.VITE_BASE_URL,
    server: {
      port,
    },
    build: {
      minify: false,
      target: "esnext",
      emptyOutDir: true,
      outDir: "dist",
    },
    plugins: [
      react(),
      tailwindcss(),

      federation({
        name: APP_NAME,
        remotes: {
          MFE_1: {
            name: "MFE_1",
            entry: "",
            type: "module",
            shareScope: "default",
          },
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: packageJson.dependencies.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: packageJson.dependencies["react-dom"],
          },
          "react-router": {
            singleton: true,
            requiredVersion: packageJson.dependencies["react-router"],
          },
        },
        runtimePlugins: ["./src/utils/mfe-plugin.ts"],
      }),
    ],
  };
});
