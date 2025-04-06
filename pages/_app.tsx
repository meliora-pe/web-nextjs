import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Suspense } from 'react';
import DefaultLayout from '../components/Layouts/DefaultLayout';

import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Script from 'next/script';
import FacebookPixelEvents from '../components/pixel-events';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
    if ([`/landings/ad`].includes(appProps.router.pathname))
        return (
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
                        <script>
                            {/* (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N64NKH46'); */}
                        </script>
                        <FacebookPixelEvents />
                    </Head>
                    <GoogleAnalytics GA_MEASUREMENT_ID="G-NW244HB3C2" />
                    {/* eslint-disable-next-line @next/next/inline-script-id */}
                    <Script>
                        {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TX97M7VJ');
                    `}
                    </Script>
                    {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-NW244HB3C2"></script> */}
                    <>
                        <Component {...pageProps} />
                    </>
                </Suspense>
            </Provider>
        );

    return (
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
                    <script>
                        {/* (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N64NKH46'); */}
                    </script>
                    {/* <FacebookPixelEvents /> */}
                </Head>
                <GoogleAnalytics GA_MEASUREMENT_ID="G-NW244HB3C2" />
                {/* eslint-disable-next-line @next/next/inline-script-id */}
                <Script>
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-TX97M7VJ');
                    `}
                </Script>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-NW244HB3C2"></script>
                <DefaultLayout>
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-N64NKH46"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                    <Component {...pageProps} />
                </DefaultLayout>
            </Suspense>
        </Provider>
    );
}
