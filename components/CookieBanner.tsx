'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';

export default function CookieBanner() {
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect(() => {
        const storedCookieConsent = getLocalStorage('cookie_consent', null);

        setCookieConsent(storedCookieConsent);
    }, [setCookieConsent]);

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied';

        // window.gtag('consent', 'update', {
        //     analytics_storage: newValue,
        //     ad_storage: newValue,
        //     ad_personalization: newValue,
        //     ad_user_data: newValue,
        // });

        setLocalStorage('cookie_consent', cookieConsent);

        document.body.style.overflow = cookieConsent === null ? 'hidden' : 'auto';
    }, [cookieConsent]);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50
                        mx-auto my-10 flex max-w-max
                        flex-col items-center justify-between rounded-lg bg-gray px-3 py-3 shadow-md sm:flex-row
                        md:max-w-screen-sm md:px-4
                        ${cookieConsent != null ? 'hidden' : 'flex'}`}
        >
            <div className="text-center text-white">
                <Link href="/cookies">
                    <p>
                        Usamos <span className="font-bold text-black">cookies</span> en este sitio web.
                    </p>
                </Link>
            </div>

            <div className="flex gap-2">
                <button className="border-gray-900 rounded-lg px-5 py-2 text-black hover:bg-white hover:font-bold" onClick={() => setCookieConsent(false)}>
                    Rechazar
                </button>
                <button className="rounded-lg px-5 py-2 text-black hover:bg-white hover:font-bold" onClick={() => setCookieConsent(true)}>
                    Permitir Cookies
                </button>
            </div>
        </div>
    );
}
