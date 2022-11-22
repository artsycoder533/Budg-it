/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["lh3.googleusercontent.com"],
  },
  assetPrefix: "/",
  // assetPrefix: "/Budg-it"
};

export default nextConfig;
