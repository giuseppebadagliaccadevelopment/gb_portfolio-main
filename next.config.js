/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.sanity.io",
      },
    ],
  },
  // async headers() {
  //   return [
  //     {
  //       source: "/images/:path*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "public, max-age=604800, immutable",
  //         },
  //       ],
  //     },
  //   ];
  // },
};
module.exports = nextConfig;
