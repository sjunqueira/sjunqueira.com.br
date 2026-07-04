import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io', 
      },
      {
        protocol: 'https',
        hostname: 'www.gstatic.com'
      },
      { 
        protocol: "https", 
        hostname: "ghchart.rshah.org" 
      },
    ],
  },
};

export default withNextIntl(nextConfig);