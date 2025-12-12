import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  turbopack: {}, // ← required when using a webpack config in Next 16
  webpack: (config) => {
    return config; // forces Webpack instead of Turbopack
  },
};

export default nextConfig;
