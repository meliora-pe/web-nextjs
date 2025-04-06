// components/cookiebanner.tsx

'use client';

import { getLocalStorage, setLocalStorage } from '../lib/storageHelper';
import { useState, useEffect } from 'react';
import Link from 'next/link'

export default function CookieBanner(){
    const [cookieConsent, setCookieConsent] = useState(false);

    useEffect (() => {
        const storedCookieConsent = getLocalStorage("cookie_consent", null)

        setCookieConsent(storedCookieConsent)
    }, [setCookieConsent]);

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        document.body.style.overflow = cookieConsent === null ? 'hidden' : 'auto';

    }, [cookieConsent]);

    return (
        <div className={`bg-gray my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0
                        z-50 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row
                        rounded-lg shadow-md
                        ${cookieConsent != null ? "hidden" : "flex"}` }
        >
            <div className='text-center text-white'>
                <Link href="/cookies"><p>Usamos <span className='font-bold text-black'>cookies</span> en este sitio web.</p></Link>
            </div>

            
            <div className='flex gap-2'>
                <button 
                    className='px-5 py-2 text-black rounded-lg border-gray-900 hover:bg-white hover:font-bold'
                    onClick={() => setCookieConsent(false)}
                    >
                        Rechazar
                </button>
                <button 
                    className='hover:bg-white hover:font-bold text-black px-5 py-2 rounded-lg'
                    onClick={() => setCookieConsent(true)}
                    >
                        Permitir Cookies
                </button>
            </div>   
        </div>
    )}