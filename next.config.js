/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/hulu_next",
  assetPrefix: "/hulu_next",
};

module.exports = nextConfig;

module.exports = {
  images: {
    domains: ["links.papareact.com", "image.tmdb.org", "dummyimage.com"],
    unoptimized: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
