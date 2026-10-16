import 'swiper/css';
import 'swiper/css/navigation';

import Link from 'next/link';

// import { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import BeforeAfterPic from '../components/BeforeAfterPic';
// import Faq from '../components/Faq';
import TitlePage from '../components/TitlePage';
import WidgetCtaBanner from '../components/WidgetCtaBanner';
import WidgetListServices from '../components/WidgetListServices';
import WidgetTopBackground from '../components/WidgetTopBackground';
import { services } from '../data/content';

const { title, sections } = services;

const Services = () => {
    return (
        <div>
            <TitlePage title={title} />

            <WidgetTopBackground props={sections.topArea} />

            <section className="bg-white py-12 dark:bg-gray-dark lg:py-24">
                <div className="container relative">
                    <div className="flex flex-col items-center md:flex-row md:gap-8">
                        <div className="mx-auto w-full max-w-[732px]" data-aos="fade-right" data-aos-duration="1500">
                            <img
                                src="/assets/images/mujer-sonriente.webp"
                                className="rounded-[25px] rtl:rotate-y-180"
                                alt="ilustracion de fondo"
                                title="woman-in-dentist-1"
                            />
                        </div>
                        <div className="mt-5 md:mt-0 ltr:text-left rtl:text-right" data-aos="fade-left" data-aos-duration="1500">
                            <div className="heading mb-0 text-center ltr:sm:text-left rtl:text-right">
                                <h5 className="text-lg !text-secondary">Tratamientos personalizados, enfoque conservador</h5>
                                <h4 className="font-playfair text-3xl">Cuidamos tu sonrisa, preservamos lo mejor de ti</h4>
                            </div>
                            <p className="mt-5 text-lg font-semibold">
                                En Meliora Studio Dental, creemos que lo más importante es conservar la salud y la estructura natural de tus dientes. Con
                                técnicas modernas y menos invasivas, priorizamos tratamientos que te brindan comodidad, seguridad y resultados que transforman
                                tu sonrisa sin comprometer lo que la hace única.
                            </p>
                            <p className="mt-5 text-lg font-semibold">
                                Nuestra trayectoria de más de una década nos ha consolidado como referentes en odontología integral y estética. Con un equipo
                                multidisciplinario y un trato cálido, te ofrecemos soluciones efectivas que cuidan cada detalle de tu salud bucal.
                            </p>
                            <div className="flex justify-center sm:flex-none md:justify-start">
                                <button id="btn-reserve" type="button" className="btn mx-auto mt-10 px-9 py-5 font-raleway font-medium text-black sm:mx-0">
                                    <Link href="/appointment">Agenda tu cita</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WidgetListServices props={sections.services} />

            <section className="bg-meliora-2 py-12 dark:bg-none lg:py-[80px]">
                <div className="container">
                    <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
                        <div className="flex-none md:w-2/3">
                            <h4 className="mb-2 text-2xl font-black uppercase leading-tight text-black dark:text-white md:text-3xl lg:text-[40px]">
                                Resultados <span className="text-secondary">reales</span>
                            </h4>
                            <p className="text-lg">
                                Con más de 10 años de experiencia, numerosos testimonios de pacientes felices y más de 5000 sonrisas deslumbrantes.
                            </p>
                        </div>
                        <button
                            id="btn-reserve"
                            type="button"
                            className="mx-auto inline-flex shrink whitespace-nowrap rounded-lg bg-primary px-8 py-5 font-raleway text-sm font-semibold uppercase text-black hover:bg-secondary hover:text-white sm:mx-0"
                        >
                            <Link href="/appointment" className="">
                                Reserva una cita
                            </Link>
                        </button>
                    </div>
                    <BeforeAfterPic props={sections.beforeAfter} />
                </div>
            </section>

            <WidgetCtaBanner title={sections.ctaBanner.title} cta={sections.ctaBanner.cta} />
        </div>
    );
};

export default Services;
