import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import commonjs from "@rollup/plugin-commonjs";

const config = [
  {
    input: "src/index.ts",
    external: [
      "lodash",
      "date-fns",
      "dayjs",
      "dayjs-recur",
      "dayjs/plugin/utc.js",
      "dayjs/plugin/isoWeek.js",
      "dayjs/plugin/duration.js",
      "dayjs/plugin/advancedFormat.js",
      "dayjs/plugin/customParseFormat.js",
    ],
    output: [
      {
        file: "dist/index.es.js",
        format: "es",
        sourcemap: true,
        globals: {
          lodash: "lodash",
          "date-fns": "dateFns",
          dayjs: "dayjs",
          "dayjs-recur": "dayjsRecur",
        },
      },
      {
        file: "dist/index.cjs.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
        globals: {
          lodash: "lodash",
          "date-fns": "dateFns",
          dayjs: "dayjs",
          "dayjs-recur": "dayjsRecur",
        },
      },
    ],
    plugins: [typescript(), commonjs()],
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
export default config;
