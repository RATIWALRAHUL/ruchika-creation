import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Source files in /public never change under the same name: cache optimized variants 31 days (default 4h) to cut re-optimization/cache writes.
    minimumCacheTTL: 2678400,
    // Fewer widths => fewer cached variants per image. Max 1920 (no 2048/3840 variants of 1-2MB sources).
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
    qualities: [75],
  },
};

export default nextConfig;
