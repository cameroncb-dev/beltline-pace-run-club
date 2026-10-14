import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Static export so the site can be hosted as files. Clean URLs need a
  // folder index per route, and the default image optimizer needs a server.
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Partial prerendering cannot run in export mode.
  cacheComponents: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
