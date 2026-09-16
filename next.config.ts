import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Pin the project root so builds work no matter where the project folder
  // lives (prevents Next from inferring a parent dir as the workspace root
  // when other lockfiles exist above it, which would misplace the
  // standalone server.js). Builds always run from the project root,
  // so process.cwd() is the project directory.
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
