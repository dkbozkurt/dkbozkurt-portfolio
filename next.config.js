/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    distDir: 'dist',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    experimental: {
        serverActions: true,
    }
};
module.exports = nextConfig
