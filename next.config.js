/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        formats: ['image/webp'],
    },
    async rewrites() {
        return [
            {
                source: '/ingest/static/:path*',
                destination: 'https://us-assets.i.posthog.com/static/:path*',
            },
            {
                source: '/ingest/:path*',
                destination: 'https://us.i.posthog.com/:path*',
            },
            {
                source: '/ingest/decide',
                destination: 'https://us.i.posthog.com/decide',
            },
        ];
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: `
                            default-src 'self' https://www.google.com/ https://api.hubapi.com/;
                            connect-src 'self' https://www.google-analytics.com/ https://api.hubapi.com/ https://forms.hscollectedforms.net/;
                            img-src 'self' data: https://www.googletagmanager.com/ https://google.com https://track.hubspot.com/ https://lh3.googleusercontent.com/ https://forms.hsforms.com/ https://www.facebook.com https://fonts.gstatic.com/;
                            script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.hs-scripts.com/ https://js.hsadspixel.net/ https://js.hs-analytics.net/ https://js.hs-banner.com/ https://js.hs-scripts.com/ https://js.hs-scripts.com/ https://js.hsadspixel.net/ https://js.hscollectedforms.net/ https://www.googletagmanager.com/ https://connect.facebook.net/;
                            style-src 'self' 'unsafe-inline' https://fonts.googleapis.com/ https://www.googletagmanager.com/;
                            font-src 'self' data: https://fonts.gstatic.com/;
                            object-src 'none';
                            base-uri 'self';
                            form-action 'self';
                            frame-src https://www.google.com/;
                            frame-ancestors 'none';
                            upgrade-insecure-requests;
                        `.replace(/\n/g, ''),
                    },
                ],
            },
            {
                key: 'Strict-Transport-Security',
                value: 'max-age=63072000; includeSubDomains; preload',
            },
        ];
    },
};

module.exports = nextConfig;
