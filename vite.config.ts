import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig(() => {
  const rootPath = path.resolve(process.cwd());
  const srcPath = `${rootPath}/src`;
  return {
    plugins: [react()],
    resolve: {
      alias: {
        "~*": rootPath,
        "@": srcPath,
        comp: `${srcPath}/components`,
      },
    },
  };
});
