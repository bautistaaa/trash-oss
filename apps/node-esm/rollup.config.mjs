import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      exports: "named",
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    resolve(), // resolve ESM modules
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
