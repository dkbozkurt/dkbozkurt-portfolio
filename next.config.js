/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
    experimental: {
        serverActions: true,
    }
};
module.exports = nextConfig
