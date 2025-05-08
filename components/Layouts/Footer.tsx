import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="mt-auto bg-black text-center sm:text-left">
            <div className="container">
                <div className="grid gap-x-4 gap-y-10 py-14 sm:grid-cols-3 lg:grid-cols-5 lg:py-[100px]">
                    <div className="relative">
                        <img src="/assets/images/Isotipo.png" alt="logo-full-dark" className="mx-auto -mt-3 mb-12 h-14 w-auto sm:mx-0" />
                        <ul className="mt-6 flex justify-center gap-8 sm:justify-start">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=61560595868897" target="_blank" rel="noreferrer">
                                    <svg
                                        width="10"
                                        height="20"
                                        viewBox="0 0 10 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition hover:scale-110 hover:text-secondary"
                                    >
                                        <path
                                            d="M8.0733 3.29509H9.88498V0.139742C9.57242 0.0967442 8.49748 0 7.2456 0C4.6335 0 2.84415 1.643 2.84415 4.66274V7.44186H-0.0383301V10.9693H2.84415V19.845H6.37821V10.9701H9.1441L9.58317 7.44269H6.37738V5.01251C6.37821 3.99297 6.65273 3.29509 8.0733 3.29509Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/meliora.pe/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:scale-110 hover:text-secondary"
                                >
                                    <svg
                                        width="23"
                                        height="22"
                                        viewBox="0 0 23 22"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transition hover:scale-110 hover:text-secondary"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M7.75995 0H16.0099C19.8063 0 22.8849 3.07862 22.8849 6.875V15.125C22.8849 18.9214 19.8063 22 16.0099 22H7.75995C3.96357 22 0.884949 18.9214 0.884949 15.125V6.875C0.884949 3.07862 3.96357 0 7.75995 0ZM16.0099 19.9375C18.6637 19.9375 20.8224 17.7787 20.8224 15.125V6.875C20.8224 4.22125 18.6637 2.0625 16.0099 2.0625H7.75995C5.1062 2.0625 2.94745 4.22125 2.94745 6.875V15.125C2.94745 17.7787 5.1062 19.9375 7.75995 19.9375H16.0099Z"
                                            fill="currentColor"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M6.38495 11C6.38495 7.96263 8.84757 5.5 11.8849 5.5C14.9223 5.5 17.3849 7.96263 17.3849 11C17.3849 14.0374 14.9223 16.5 11.8849 16.5C8.84757 16.5 6.38495 14.0374 6.38495 11ZM8.44745 11C8.44745 12.8948 9.9902 14.4375 11.8849 14.4375C13.7797 14.4375 15.3224 12.8948 15.3224 11C15.3224 9.10388 13.7797 7.5625 11.8849 7.5625C9.9902 7.5625 8.44745 9.10388 8.44745 11Z"
                                            fill="currentColor"
                                        />
                                        <circle cx="17.7975" cy="5.08737" r="0.732875" fill="currentColor" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-bold text-white">Enlaces</li>
                            <li>
                                <Link href="/about-us" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Quiénes somos
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Servicios
                                </Link>
                            </li>
                            <li>
                                <Link href="/appointment#horarios" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Horarios
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Contacto
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-bold text-white">Citas</li>
                            <li>
                                <Link href="/appointment" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Calendario de citas
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-bold text-white">Legales</li>
                            <li>
                                <Link href="/privacy-policy" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Política de privacidad
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-conditions" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Términos y condiciones
                                </Link>
                            </li>
                            {/* <li>
                                <Link href="/complaints" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Libro de Reclamaciones
                                    <Image
                                        src="/assets/images/complaints.png"
                                        alt="libro de reclamaciones"
                                        width={56}
                                        height={22}
                                        className="ml-1 inline-block md:mt-3"
                                    />
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-3 font-bold">
                            <li className="mb-3 text-lg font-bold text-white">Contacto</li>
                            <li>
                                <Link href="/contact-us#formulario" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Formulario de contacto
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://maps.google.com/maps/dir//Meliora+Studio+Dental+R2X6%2B73G+Lima+15054/@-12.1519314,-76.9897075,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b90829b6e561:0xd2160ffba0651ce0"
                                    className="inline-block transition hover:scale-110 hover:text-secondary"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Cómo llegar
                                </a>
                            </li>
                            <li>
                                <a href="tel:+51969174019" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Llámanos
                                </a>
                            </li>
                            <li>
                                <a href="mailto:hola@meliora.pe" className="inline-block transition hover:scale-110 hover:text-secondary">
                                    Envía un correo
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white py-5 dark:border-t-2 dark:border-white/5 dark:bg-gray-dark dark:bg-none">
                <div className="container">
                    <div className="items-center justify-between text-center font-bold dark:text-white md:flex">
                        <div>
                            Copyright© {new Date().getFullYear() + ' '}
                            <span className="text-secondary transition">Meliora Studio Dental</span>
                        </div>
                        <div>
                            ¿Tienes dudas?{' '}
                            <Link href="/contact-us" className="text-secondary transition hover:text-black dark:hover:text-primary">
                                Contáctanos
                            </Link>
                        </div>
                        {/* <div hidden={true}>
                            💡 Made by <Link href="https://clarity.pe">Clarity Creative Studio</Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
