/** @type {import('lint-staged').Config} */
import path from "path";

const config = {
  "*.{js,jsx,ts,tsx}": [
    (fn) =>
      `next lint --fix --file ${fn
        .map((f) => path.relative(process.cwd(), f))
        .join(" --file ")}`,
  ],
  "**/*": ["prettier --write --ignore-unknown"],
};

export default config;
