/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.fresha.com' },
      { protocol: 'https', hostname: 'cdn-partners-api.fresha.com' }
    ]
  }
};

export default nextConfig;
