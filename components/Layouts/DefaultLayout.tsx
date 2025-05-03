import { PropsWithChildren, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from '../../App';
import Footer from './Footer';
import Header from './Header';
import CookieBanner from '../../components/CookieBanner';
import Image from 'next/image';
import Link from 'next/link';

const DefaultLayout = ({ children }: PropsWithChildren) => {
    const [showLoader, setShowLoader] = useState(true);
    const [showTopButton, setShowTopButton] = useState(false);

    const goToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    const onScrollHandler = () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            setShowTopButton(true);
        } else {
            setShowTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', onScrollHandler);

        const screenLoader = document.getElementsByClassName('screen_loader');
        if (screenLoader?.length) {
            // screenLoader[0].classList.add("animate__fadeOut");
            setTimeout(() => {
                setShowLoader(false);
            }, 200);
        }

        return () => {
            window.removeEventListener('onscroll', onScrollHandler);
        };
    });

    useEffect(() => {
        AOS.init({
            once: true,
        });
    }, []);

    return (
        <App>
            <div>
                {showLoader && (
                    <div className="screen_loader fixed inset-0 grid place-content-center bg-white dark:bg-gray-dark dark:bg-none">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="200px"
                            height="200px"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="xMidYMid"
                        >
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#A4B28D" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="0s"
                                ></animate>
                            </circle>
                            <circle cx="50" cy="50" r="0" fill="none" stroke="#B37C9B" strokeWidth="4">
                                <animate
                                    attributeName="r"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="0;16"
                                    keyTimes="0;1"
                                    keySplines="0 0.2 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                                <animate
                                    attributeName="opacity"
                                    repeatCount="indefinite"
                                    dur="1s"
                                    values="1;0"
                                    keyTimes="0;1"
                                    keySplines="0.2 0 0.8 1"
                                    calcMode="spline"
                                    begin="-0.5s"
                                ></animate>
                            </circle>
                        </svg>
                    </div>
                )}

                <div className="flex min-h-screen flex-col text-base font-normal text-gray antialiased dark:bg-gray-dark">
                    <Header className={showTopButton ? 'sticky-header' : ''} />

                    <div className="-mt-[82px] flex-grow overflow-x-hidden lg:-mt-[106px]">
                        {children}
                        <CookieBanner />
                    </div>
                    <Footer />
                </div>

                {showTopButton && (
                    <button type="button" className="fixed bottom-5 z-10 animate-bounce ltr:right-5 rtl:left-5" onClick={goToTop}>
                        <div className="group flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-primary text-white transition duration-500 hover:bg-secondary dark:hover:bg-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6 transition group-hover:text-black"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                            </svg>
                        </div>
                    </button>
                )}
                <button type="button" className="fixed bottom-5 left-5 z-10">
                    <div className="bottom-5 z-10 mb-2 block bg-white p-1">
                        <span className="text-xs">
                            ¿Tienes dudas?
                            <br /> <strong>¡Escríbenos!</strong>
                        </span>
                    </div>
                    <Link href="https://api.whatsapp.com/send?phone=51969174019&text=Hola%2C%20quisiera%20mas%20informacion%20%F0%9F%98%8A" target="_blank">
                        <div className="duration-50 group flex h-14 w-14 items-center  justify-center transition">
                            <Image src="/assets/images/whatsapp.png" alt="whatsapp" width={60} height={60} />
                        </div>
                    </Link>
                </button>
            </div>
        </App>
    );
};

export default DefaultLayout;
