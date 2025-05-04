import TitlePage from '../components/TitlePage';
import WidgetTopBackground from '../components/WidgetTopBackground';
import WidgetContact from '../components/WidgetContact';
import WidgetCtaBanner from '../components/WidgetCtaBanner';
import { appointment } from '../data/content';
import AnimateHeight from 'react-animate-height';
import { useState } from 'react';
import WidgetTwoParagraphsButton from '../components/WidgetTwoParagraphsButton';
import confetti from 'canvas-confetti';
import GoogleAnalytics from '../components/GoogleAnalyticsFile';
import { trackGAEvent } from '../lib/google-analytics';

const { title, sections } = appointment;

const Appointment = () => {
    const [active, setActive] = useState<any>(null);

    let duration = 4 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    const handleConfetti = () => {
        let interval: any = setInterval(function () {
            let timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            let particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                })
            );
            confetti(
                Object.assign({}, defaults, {
                    particleCount,
                    origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                })
            );
        }, 250);
    };

    return (
        <div>
            <GoogleAnalytics />
            <TitlePage title={title} />

            <WidgetTopBackground props={sections.topArea} />

            <section className="lg:py-22 bg-white py-14 dark:bg-gray-dark sm:px-5">
                <div className="container px-8">
                    <div className="flex flex-col items-center gap-16 lg:flex-row">
                        <div className="mt-6 flex-1 overflow-hidden rounded-[25px] sm:mt-0" data-aos="fade-right" data-aos-duration="1000">
                            <img
                                src={`/assets/images/${sections.reserveNow.image.src}`}
                                alt={sections.reserveNow.image.alt}
                                title={sections.reserveNow.image.title}
                            />
                        </div>
                        <div className="flex-1 text-center ltr:md:text-left rtl:md:text-right" data-aos="fade-left" data-aos-duration="1000">
                            <WidgetTwoParagraphsButton props={sections.reserveNow} />
                        </div>
                    </div>
                </div>
                <div className="container my-4 text-center">
                    <button
                        id="btn-calendar"
                        type="button"
                        className="btn relative bg-secondary font-raleway font-semibold  text-white hover:bg-primary sm:px-14 sm:py-5"
                        onClick={() => {
                            setActive(active === 0 ? null : 0);
                            if (active === null) handleConfetti();
                            //trackGAEvent("key-event", "click", "open-calendar")
                        }}
                    >
                        Abrir calendario
                    </button>
                    <AnimateHeight duration={600} height={active === 0 ? 'auto' : 0}>
                        <div className="container my-8 !h-[1850px] bg-white">
                            <div className="googleCalendar !h-[1850px]">
                                <iframe
                                    title="Google Calendar"
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1-3btr7vk7iGNeSVq4CcD4EcFRz5aBGdSGkWDulPy0fPf2SZPjwFkBHkHTvVWmHHd2dshnKGaD?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;wkst=1&amp;bgcolor=%23ffffff&amp;color=%23FFF&amp;ctz=America%2FLima"
                                    style={{ borderWidth: 0 }}
                                    width="100%"
                                    height="100%"
                                ></iframe>
                            </div>
                        </div>
                    </AnimateHeight>
                </div>
            </section>

            {/* <section className="bg-white dark:bg-gray-dark pb-4">
                
            </section> */}

            <section className="bg-[#efefef] pt-10 dark:bg-gray-dark lg:pt-24">
                <div className="container">
                    <div className="heading text-center">
                        <h5 className="text-lg !text-primary">Flexibilidad</h5>
                        <h4 className="font-playfair text-3xl">Valoramos tu tiempo</h4>
                    </div>
                    <div className="flex flex-col items-center sm:text-lg lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="group w-full rounded-[32px] border-2 border-transparent bg-white px-6 py-8 shadow duration-200 hover:bg-secondary/20 dark:bg-gray-black md:px-11">
                            <p className="text-center text-base font-black text-secondary">Horarios de atención</p>
                            <div className="mt-8 flex justify-between gap-2 font-bold">
                                <span className="flex-shrink-0 text-black dark:text-white">Lunes - Viernes</span>
                                <span className="w-[170px]">9:00 am - 6:00 pm</span>
                            </div>
                            <div className="my-5 h-[2px] bg-gradient-to-r from-gray/10 via-gray/25 to-gray/10"></div>
                            <div className="flex justify-between gap-2 font-bold">
                                <span className="flex-shrink-0 text-black dark:text-white">Sábados</span>
                                <span className="w-[170px]">9:00 am - 1:00 pm</span>
                            </div>
                            <div className="my-5 h-[2px] bg-gradient-to-r from-gray/10 via-gray/25 to-gray/10"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#efefef] py-12 dark:bg-gray-dark">
                <div className="container">
                    <div className="mb-10 grid gap-[30px] md:grid-cols-2">
                        <WidgetContact props={sections.contact.phone} />
                        <WidgetContact props={sections.contact.email} />
                    </div>
                    <div className="mb-10">
                        <WidgetContact props={sections.contact.location} />
                    </div>
                </div>
            </section>

            {/* <section className="relative overflow-hidden bg-[#807ca3] py-12 lg:py-20">
                    <img src="assets/images/newsletter.svg" alt="" className="absolute right-0 bottom-0 hidden xl:inline-block" />
                    <img src="assets/images/email.svg" alt="" className="absolute left-40 bottom-0 hidden md:left-1/2 xl:inline-block" />
                    <div className="container">
                        <div className="flex flex-col justify-between gap-5 md:flex-row">
                            <div className="relative text-center md:w-1/2 ltr:md:text-left rtl:md:text-right xl:pr-12">
                                <img src="assets/images/icon-1.svg" alt="" className="absolute -left-12 -top-12" />
                                <h2 className="relative mb-3 text-xl font-playfair font-black text-white md:text-4xl xl:text-5xl">
                                    Boletín de novedades
                                    <img src="assets/images/modern-saas/icon-2.svg" alt="" className="absolute right-8 -bottom-5" />
                                </h2>
                                <p className="text-xl font-montserrat font-semibold text-gray-dark/50">Noticias, actualizaciones y más </p>
                                <form className="relative mt-10">
                                    <div className="absolute top-1/2 -translate-y-1/2 ltr:pl-4 rtl:pr-4">
                                        <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 10.4091C24 14.8446 24 17.0623 22.6527 18.4403C21.3054 19.8182 19.1369 19.8182 14.8 19.8182H10.2C5.86308 19.8182 3.69462 19.8182 2.34731 18.4403C1 17.0623 1 14.8446 1 10.4091C1 5.9736 1 3.75586 2.34731 2.37793C3.69462 1 5.86308 1 10.2 1H14.8C19.1369 1 21.3054 1 22.6527 2.37793C23.4038 3.14616 23.7362 4.17543 23.8833 5.70455" stroke="#08111F" stroke-width="2" stroke-linecap="square"></path>
                                            <path d="M19.3999 5.70508L16.9172 7.82104C14.8051 9.62115 13.749 10.5212 12.4999 10.5212C11.7532 10.5212 11.0755 10.1996 10.1999 9.55627M5.59991 5.70508L6.63491 6.58718L7.66991 7.46928" stroke="#08111F" stroke-width="2" stroke-linecap="square"></path>
                                        </svg>
                                    </div>
                                    <input type="email" placeholder="Correo electrónico" className="w-full rounded-xl py-4 font-semibold outline-0 ltr:pl-14 ltr:pr-32 rtl:pr-14 rtl:pl-32 lg:py-6 lg:text-lg" />
                                    <button type="button" className="absolute top-1/2 -translate-y-1/2 font-raleway rounded-md bg-secondary px-3 py-1.5 font-semibold text-white transition hover:bg-primary ltr:right-4 rtl:left-4 lg:py-2 lg:text-lg">
                                        SUSCRIBIRSE
                                    </button>
                                </form>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" className="aos-init aos-animate">
                                <img src="assets/images/target.svg" alt="" className="mx-auto w-60 rtl:rotate-y-180 lg:w-80" />
                            </div>
                        </div>
                    </div>
                </section> */}

            <WidgetCtaBanner title={sections.ctaBanner.title} cta={sections.ctaBanner.cta} />
        </div>
    );
};

export default Appointment;
