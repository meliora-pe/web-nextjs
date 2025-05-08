import '../styles/tailwind.css';
import type { AppProps } from 'next/app';
import { Suspense, useEffect } from 'react';
import { Router } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import DefaultLayout from '../components/Layouts/DefaultLayout';

import { Provider } from 'react-redux';
import store from '../store/index';
import Head from 'next/head';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Script from 'next/script';
import FacebookPixelEvents from '../components/pixel-events';

export default function App({ Component, pageProps, ...appProps }: AppProps) {
    useEffect(() => {
        posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
            api_host: '/ingest',
            ui_host: 'https://us.posthog.com',
            loaded: (ph) => {
                if (process.env.NODE_ENV === 'development') ph.debug();
            },
            debug: process.env.NODE_ENV === 'development',
        });

        const handleRouteChange = () => posthog.capture('$pageview');
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, []);

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
                        <Script id="google-tag-manager">
                            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-N64NKH46');`}
                        </Script>
                        <GoogleAnalytics GA_MEASUREMENT_ID="G-NW244HB3C2" />
                        <Script id="google-tag-manager">
                            {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TX97M7VJ');
                            `}
                        </Script>
                        <>
                            <Component {...pageProps} />
                        </>
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
                        {/* <FacebookPixelEvents /> */}
                    </Head>
                    <Script id="google-tag-manager">
                        {/* (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-N64NKH46'); */}
                    </Script>
                    <GoogleAnalytics GA_MEASUREMENT_ID="G-NW244HB3C2" />
                    {/* eslint-disable-next-line @next/next/inline-script-id */}
                    <Script id="google-tag-manager">
                        {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-TX97M7VJ');
                        `}
                    </Script>
                    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NW244HB3C2"></Script>
                    <Script>
                        {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
                            posthog.init('phc_heMtkxEWSNlKiUTC90MetsnmSCqhjFakUN2VZJxdt1P', {
                            api_host: 'https://us.i.posthog.com',
                            person_profiles: 'identified_only', // or 'always' to create profiles for anonymous users as well
                        })`}
                    </Script>
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
        </PostHogProvider>
    );
}
