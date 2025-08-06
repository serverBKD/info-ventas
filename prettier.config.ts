import type { Options } from "prettier";

const config: Options = {
  semi: false, // 👈 Desactiva los punto y coma
  singleQuote: true,
  trailingComma: "es5",
  printWidth: 100,
  tabWidth: 2,
  objectWrap: "collapse",
  experimentalOperatorPosition: "start",
};

export default config;
