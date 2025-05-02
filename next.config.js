/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: false,
        formats: ['image/webp'],
    },
};

module.exports = nextConfig;
