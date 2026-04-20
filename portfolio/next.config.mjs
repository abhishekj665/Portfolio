/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Avoid flaky filesystem cache chunks on Windows dev sessions.
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
