import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* Fonts  */}
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;700;800&display=swap" rel="stylesheet" />
                {/* Playfair Display */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Montserrat Classic */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                ></link>
                {/* Raleway */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
                {/* <FacebookPixelEvents /> */}
            </Head>
            <body>
                <Main />
                <NextScript />
                {/* <Script id="hubspot">
                    {`
                    <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/48411767.js">
                    </script>
                    `}
                </Script> */}
                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/48411767.js"></script>
                <script type="application/ld+json">
                    {/* {         
                    "@context": "https://schema.org/",         
                    "@type": "WebPage",         
                    "@id": "#WebPage",         
                    "url": "https://meliora.pe/",          
                    "name": "Meliora Studio Dental"
                }  */}
                </script>
            </body>
        </Html>
    );
}
