const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000", // پورتی که لاراول روی اون اجرا میشه
      },
    ],
  },
  eslint: {
    // حتی اگه خطای eslint باشه، بیلد fail نمیشه
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
