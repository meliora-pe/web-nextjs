import Link from 'next/link';

import CounterComponent from '../components/CounterComponent';
import Testimonial from '../components/Testimonial';
import TitlePage from '../components/TitlePage';
import WidgetCtaBanner from '../components/WidgetCtaBanner';
import WidgetTopBackground from '../components/WidgetTopBackground';
import WidgetTwoImages from '../components/WidgetTwoImages';
import WgtTwoParagraphsBullets from '../components/WidgetTwoParagraphsBullets';
import { aboutUs } from '../data/content';

const { title, sections } = aboutUs;

const Aboutus = () => {
    return (
        <div>
            <TitlePage title={title} />

            <WidgetTopBackground props={sections.topArea} />

            <section className="bg-white py-14 dark:bg-gray-dark dark:bg-none sm:px-5 lg:py-20">
                <div className="container px-8">
                    <div className="flex flex-col items-center gap-16 lg:flex-row">
                        <div className="flex-1 text-center ltr:md:text-left rtl:md:text-right" data-aos="fade-left" data-aos-duration="1000">
                            <WgtTwoParagraphsBullets props={sections.howWeWork} />
                        </div>
                        <div className="mt-6 flex-1 overflow-hidden rounded-[25px] sm:mt-0" data-aos="fade-right" data-aos-duration="1000">
                            <img src="/assets/images/odontologia-conservadora.webp" alt="odontologia-restauradora" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-meliora-2 py-14 dark:bg-gray-black dark:bg-none lg:py-20">
                <CounterComponent subtitle="Más de una década contigo" title="Nuestra experiencia en cifras" />
            </section>

            <section className="bg-white py-14 dark:bg-gray-dark md:py-20">
                <div className="container">
                    <div className="grid-cols-3 lg:grid">
                        <div className="col-span-2 lg:ltr:pr-20 lg:rtl:pl-20" data-aos="fade-right" data-aos-duration="1000">
                            <div className="heading mb-0 flex flex-col-reverse text-center ltr:lg:text-left rtl:lg:text-right">
                                <h4 className="font-playfair text-3xl">Prestigio y trayectoria</h4>
                                <h5 className="font-montserrat text-lg">Nuestra fortaleza</h5>
                            </div>
                            <div className="my-10 grid gap-10 text-lg font-semibold sm:grid-cols-2 md:my-14 ltr:text-left rtl:text-right">
                                <div className="flex gap-6">
                                    <div className="h-14 w-14 flex-none">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.06]">
                                            <img src="/assets/images/dentista.png" alt="dentista" className="drop-shadow-[0_2px_6px_rgba(71,189,255,0.32)]" />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="mb-5 text-[22px] font-bold text-primary">Doctores</h4>
                                        <p>Especialistas y actualizados</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-14 w-14 flex-none">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/[0.06]">
                                            <img
                                                src="/assets/images/instrumentos.png"
                                                alt="icono instrumental dental"
                                                className="drop-shadow-[0_5px_14px_rgba(180,118,229,0.29)]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="mb-5 text-[22px] font-bold text-secondary">Tratamientos</h5>
                                        <p>Integrales</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-14 w-14 flex-none">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/[0.06]">
                                            <img
                                                src="/assets/images/excelencia.png"
                                                alt="icono de excelencia"
                                                className="drop-shadow-[0_2px_6px_rgba(71,189,255,0.32)]"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="mb-5 text-[22px] font-bold text-primary">Excelencia</h5>
                                        <p>Calidez y buen trato</p>
                                    </div>
                                </div>
                                <div className="flex gap-6">
                                    <div className="h-14 w-14 flex-none">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/[0.06]">
                                            <img
                                                src="/assets/images/diploma.png"
                                                className="drop-shadow-[0_5px_14px_rgba(180,118,229,0.29)]"
                                                alt="icono de experiencia"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="mb-5 text-[22px] font-bold text-secondary">Experiencia</h5>
                                        <p>Profesionalismo y seguridad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative mb-8 flex justify-center gap-5 lg:mb-0 lg:block">
                            <WidgetTwoImages props={sections.ourStrongness} />
                        </div>
                        <div className="mb-8 text-center ltr:lg:text-left rtl:lg:text-right">
                            <Link
                                href="/appointment"
                                className="btn bg-secondary font-raleway font-semibold capitalize text-white hover:bg-primary sm:px-14 sm:py-5"
                            >
                                AGENDA UNA CONSULTA
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial />

            <WidgetCtaBanner title="¿Quieres una sonrisa saludable?" cta={{ text: 'Reserva una cita hoy', href: '/appointment' }} />
        </div>
    );
};

export default Aboutus;
