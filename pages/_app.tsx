import '../styles/tailwind.css';

import Head from 'next/head';
// import { Router } from 'next/router';
// import Script from 'next/script';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { GoogleTagManager } from '@next/third-parties/google';

import GoogleAnalytics from '../components/GoogleAnalytics';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import FacebookPixelEvents from '../components/pixel-events';
import store from '../store/index';

import type { AppProps } from 'next/app';
export default function App({ Component, pageProps, ...appProps }: AppProps) {
    // useEffect(() => {
    //     posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    //         api_host: '/ingest',
    //         ui_host: 'https://us.posthog.com',
    //         loaded: (ph) => {
    //             if (process.env.NODE_ENV === 'development') ph.debug();
    //         },
    //         debug: process.env.NODE_ENV === 'development',
    //     });

    //     const handleRouteChange = () => posthog.capture('$pageview');
    //     Router.events.on('routeChangeComplete', handleRouteChange);
    //     return () => {
    //         Router.events.off('routeChangeComplete', handleRouteChange);
    //     };
    // }, []);

    if ([`/landings/ad`].includes(appProps.router.pathname))
        return (
            <PostHogProvider client={posthog}>
                <Provider store={store}>
                    <Suspense>
                        <Head>
                            <title>Mejora tu sonrisa, mejora tu salud | Meliora Studio Dental | Dentista en Surco, Lima</title>
                            <meta charSet="UTF-8" />
                            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                            <meta httpEquiv="Content-Language" content="es" />
                            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                            <meta
                                name="description"
                                content="Mejoramos tu salud dental, para que recuperes tu confianza, con calidez, empatía y tratamientos de calidad. Dentista en Surco, Lima."
                            />
                            <meta name="robots" content="index,follow" />
                            <meta name="author" content="Yessica Cahuantico" />
                            <meta name="geo.region" content="PE-LIM" />
                            <meta name="geo.placename" content="Surco" />
                            <meta name="geo.position" content="-12.151891;-76.989851" />
                            <meta name="ICBM" content="-12.151891, -76.989851" />
                            <meta property="og:title" content="Meliora Studio Dental - Mejora tu sonrisa, mejora tu salud" />
                            <meta property="og:type" content="website" />
                            <meta property="og:url" content="https://meliora.pe" />
                            <meta property="og:image" content="https://meliora.pe/assets/images/meliora-studio-dental.png" />
                            <meta
                                property="og:description"
                                content="Mejoramos tu salud dental, para que recuperes tu confianza, con calidez, empatía y tratamientos de calidad. Dentista en Surco, Lima."
                            />
                            <meta property="og:locale" content="es_PE" />
                            <meta property="og:locale:alternate" content="es_ES" />
                            <meta property="og:site_name" content="Meliora Studio Dental" />
                            <link rel="canonical" href="https://meliora.pe/" />
                            <link href="/assets/images/favicon.png" rel="icon" media="(prefers-color-scheme: light)" />
                            <link href="/assets/images/favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)" />
                            <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
                            <FacebookPixelEvents />
                        </Head>
                        <GoogleAnalytics googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID || ''} />
                        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
                        <Component {...pageProps} />
                    </Suspense>
                </Provider>
            </PostHogProvider>
        );

    return (
        <PostHogProvider client={posthog}>
            <Provider store={store}>
                <Suspense>
                    <Head>
                        <title>Mejora tu sonrisa, mejora tu salud | Meliora Studio Dental | Dentista en Surco, Lima</title>
                        <meta charSet="UTF-8" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <meta httpEquiv="Content-Language" content="es" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <meta
                            name="description"
                            content="Mejoramos tu salud dental, para que recuperes tu confianza, con calidez, empatía y tratamientos de calidad. Dentista en Surco, Lima."
                        />
                        <meta name="robots" content="index,follow" />
                        <meta name="author" content="Yessica Cahuantico" />
                        <meta name="geo.region" content="PE-LIM" />
                        <meta name="geo.placename" content="Surco" />
                        <meta name="geo.position" content="-12.151891;-76.989851" />
                        <meta name="ICBM" content="-12.151891, -76.989851" />
                        <meta property="og:title" content="Meliora Studio Dental - Mejora tu sonrisa, mejora tu salud" />
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content="https://meliora.pe" />
                        <meta property="og:image" content="https://meliora.pe/assets/images/meliora-studio-dental.png" />
                        <meta
                            property="og:description"
                            content="Mejoramos tu salud dental, para que recuperes tu confianza, con calidez, empatía y tratamientos de calidad. Dentista en Surco, Lima."
                        />
                        <meta property="og:locale" content="es_PE" />
                        <meta property="og:locale:alternate" content="es_ES" />
                        <meta property="og:site_name" content="Meliora Studio Dental" />
                        <link rel="canonical" href="https://meliora.pe/" />
                        <link href="/assets/images/favicon.png" rel="icon" media="(prefers-color-scheme: light)" />
                        <link href="/assets/images/favicon-dark.png" rel="icon" media="(prefers-color-scheme: dark)" />
                        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
                    </Head>
                    <GoogleAnalytics googleAnalyticsId={process.env.NEXT_PUBLIC_GA_ID || ''} />
                    <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ''} />
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                </Suspense>
            </Provider>
        </PostHogProvider>
    );
}
