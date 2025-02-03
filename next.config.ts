/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;






// /**@type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//       domains: ["cdn.sanity.io"]
//   }
// };

// export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       // {
//       //   protocol: 'https',
//       //   hostname: 'example.com',
//       //   pathname: '/**',
//       // },
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io',
//         pathname: '/**',
//       },
//     ],
//   },
// };