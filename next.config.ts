import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/favicon.ico",
        destination:
          "https://storage.googleapis.com/cr-resource/image/5a2e841ee3f3d6089198a6e917892c57/koreascofficial/koreascofficial-favicon.ico",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
