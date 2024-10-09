import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";
import {dependencies} from "./package.json"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./remote-app": "./src/bootstrap",
      },
      shared:{
        react:{
          singleton:true,
          requiredVersion:dependencies.react
        },
        d3:dependencies.lodash
      }
      
    }),
  ],
  build:{
    target:"esnext"
  }
});
