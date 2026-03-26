import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["three"],
  // Turbopack ne résout pas les binaires optionnels de lightningcss (Tailwind v4) ;
  // forcer l’externalisation pour que Node charge lightningcss-darwin-arm64 depuis node_modules.
  serverExternalPackages: [
    "lightningcss",
    "lightningcss-darwin-arm64",
    "lightningcss-darwin-x64",
    "@tailwindcss/node",
    "@tailwindcss/postcss",
    "@tailwindcss/oxide",
  ],
};

export default nextConfig;
