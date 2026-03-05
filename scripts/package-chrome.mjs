import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const root = process.cwd();
const outputDir = join(root, "dist", "chrome");
mkdirSync(outputDir, { recursive: true });

const manifestPath = join(root, "extension", "manifest.json");
JSON.parse(readFileSync(manifestPath, "utf8"));

const zipPath = join(outputDir, "extension.zip");
execSync(`powershell -NoProfile -Command "Compress-Archive -Path extension\\* -DestinationPath '${zipPath}' -Force"`, {
  stdio: "inherit",
});

writeFileSync(join(outputDir, "README.txt"), "Chrome package created by scripts/package-chrome.mjs\n", "utf8");
