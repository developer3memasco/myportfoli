import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig: NextConfig = {
<<<<<<< HEAD
=======
  output: "export",
  basePath: isGithubActions ? "/myportfoli" : "",
  images: {
    unoptimized: true,
  },
>>>>>>> origin/main
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
