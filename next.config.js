/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
    distDir: 'dist',
    images: {
        // `unoptimized: true` made every <Image> serve the original PNG.
        // The app icons are up to 530 KB each and are rendered at 128x128 CSS
        // px, so the page shipped ~12 MB of images. Vercel resizes and
        // re-encodes them instead, which cuts that to a few hundred KB.
        formats: ['image/avif', 'image/webp'],
        // Keep the generated variants to the sizes we actually render, so we
        // don't burn image-optimization transformations on unused widths.
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 828, 1080, 1200, 1920],
        // Optimized images are content-hashed, so they can be cached hard.
        minimumCacheTTL: 31536000,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    async headers() {
        return [
            {
                // Playable builds are 3-5 MB each. Without this Vercel serves
                // files from /public with `max-age=0, must-revalidate`, so
                // re-opening a playable re-downloads the whole bundle.
                source: '/playableAds/:path*',
                headers: [
                    {
                        key: 'Cache-Control',
                        // A build only ever changes when its filename does,
                        // so a day of hard caching plus a month of
                        // stale-while-revalidate keeps re-opens instant
                        // without pinning a stale bundle forever.
                        value: 'public, max-age=86400, stale-while-revalidate=2592000',
                    },
                ],
            },
            {
                source: '/:path(.*).pdf',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: 'public, max-age=86400, stale-while-revalidate=604800',
                    },
                ],
            },
        ];
    },
};
module.exports = nextConfig
