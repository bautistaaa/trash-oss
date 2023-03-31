import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import packageJson from "./package.json" assert { type: "json" };

export default {
  input: "src/index.ts",
  output: [
    {
      exports: "named",
      file: packageJson.main,
      format: "cjs",
    },
  ],
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({
      tsconfig: "./tsconfig.json",
    }),
  ],
};
