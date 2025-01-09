/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['localhost', 'api.lorem.space'],
        domains: ['ik.imagekit.io'],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "api.lorem.space",
          },
        ],
      },
};

export default nextConfig;
