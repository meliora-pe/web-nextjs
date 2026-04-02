// components/GoogleAnalytics.tsx
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import { useEffect } from 'react';

import { pageview } from '../lib/gtagHelper';

export default function GoogleAnalytics({ googleAnalyticsId }: { googleAnalyticsId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const url = pathname + searchParams.toString();

        pageview(googleAnalyticsId, url);
    }, [pathname, searchParams, googleAnalyticsId]);

    return (
        <>
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`} />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('consent', 'default', {
                    'analytics_storage': 'granted'
                });
                
                gtag('config', '${googleAnalyticsId}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
    );
}
