import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/donar",
        destination: "https://donar.fundaciongranitodearena.org",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
