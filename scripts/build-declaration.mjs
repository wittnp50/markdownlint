// @ts-check

import fs from "node:fs/promises";

const typesDTS = `
export {};

declare module "markdownlint" {

${await fs.readFile("./lib/exports.d.mts", "utf8")}
}

declare module "markdownlint/async" {

${await fs.readFile("./lib/exports-async.d.mts", "utf8")}
}

declare module "markdownlint/promise" {

${await fs.readFile("./lib/exports-promise.d.mts", "utf8")}
}

declare module "markdownlint/sync" {

${await fs.readFile("./lib/exports-sync.d.mts", "utf8")}
}
`;

await fs.writeFile("./lib/types.d.mts", typesDTS, "utf8");
