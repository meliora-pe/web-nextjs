import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from 'aos';
import 'swiper/css';
import 'swiper/css/navigation';
import WidgetContact from '../../components/WidgetContact';
import WidgetMap from '../../components/WidgetMap';
import { PhotoSlider } from '../../components/PhotoSlider';
import { Stars } from '../../components/Stars';
import { emailSvg, locationSvg, phoneSvg } from '../../data/svg';

const foldProp = {
    header: 'Este San Valentín, regálate una sonrisa que enamore',
    title: 'Blanqueamiento dental personalizado',
    subtitle: 'Descuento exclusivo de 20% y consulta gratis al iniciar cualquier tratamiento. ¡Reserva tu cita ahora y aprovecha el descuento!',
    image: {
        src: '/landings/blanqueamiento-dental.jpg',
        alt: 'blanqueamiento-dental',
        title: 'blanqueamiento-dental',
    },
    cta: {
        text: 'Reservar cita',
        href: 'https://meliora.pe/appointment/',
    },
};

const benefits = {
    title: '¿Por qué elegir nuestro tratamiento?',
    subtitle: 'Beneficios clave',
    paragraph1: 'Descubre los beneficios de un tratamiento que no solo mejora tu estética, sino también tu confianza y autoestima.',
    bullets: [
        'Resultados visibles desde la primera sesión',
        'Procedimientos adaptados a tu estilo de vida: en consultorio o en casa',
        'Métodos seguros no invasivos y cómodos',
    ],
    image: {
        src: 'porque-nos-eligen.webp',
        alt: 'porque-nos-eligen',
        title: 'porque-nos-eligen',
    },
};

const beforeAfter = {
    title: 'Blanqueamiento dental',
    text: 'Realzamos el color de tus dientes con técnicas seguras y personalizadas. Recupera la confianza en tu sonrisa con un tratamiento efectivo, mínimamente invasivo y diseñado para resaltar tu belleza natural.',
    before: {
        src: '/assets/images/before.webp',
        alt: 'before',
        title: 'before',
    },
    after: {
        src: '/assets/images/after.webp',
        alt: 'after',
        title: 'after',
    },
    cta: { text: 'VER MÁS', href: '/services' },
};

const meliora = {
    title: 'Un proceso simple y efectivo en 3 pasos',
    subtitle: '¿Cómo funciona?',
    paragraph1: 'Evaluamos tu caso y definimos el mejor tipo de blanqueamiento para ti.',
    paragraph2: 'Elige entre blanqueamiento en consultorio para resultados inmediatos o en casa para mayor comodidad.',
    paragraph3: 'Logra una sonrisa más blanca y radiante que transformará tu confianza.',
    definition: {
        button: {
            href: '/about-us',
            text: 'Reserva tu consulta gratis',
        },
    },
    images: {
        image1: {
            src: 'radiografia.webp',
            alt: 'radiografia',
            title: 'radiografia',
        },
        image2: {
            src: 'mujer-sonriente.webp',
            alt: 'mujer-sonriente',
            title: 'mujer-sonriente',
        },
    },
};

const testimonials = {
    title: ['Testimonios y opiniones', 'reales'],
    subtitle: 'Ellos ya transformaron sus sonrisas, ¡tú también puedes hacerlo!',
};

const feedbacks = [
    {
        id: 1,
        name: 'Gabriela Llaja',
        role: '',
        time: 'Hace 4 meses',
        place: '/assets/images/google-maps.png',
        thumbnail: '/assets/images/patient-1.webp',
        message: `“Excelente atención! Me retiraron la muela del juicio inferior y el procedimiento fue correcto. Hicieron todo para que me sienta cómoda, tranquila y sin dolor. La primera noche de la operación no sentí dolor alguno. Recomendado 100%”`,
    },
    {
        id: 2,
        name: 'Yuri Villaruel',
        role: '',
        time: 'Hace 1 mes',
        place: '/assets/images/google-maps.png',
        thumbnail: '/assets/images/patient-2.webp',
        message: `"Desde la primera vez que llegué a su consultorio tuve una experiencia satisfactoria, si no mal recuerdo desde 2014. Gracias Dra. Yessica por su paciencia al explicarme, animarme a cuidar mis dientes y por su buen trabajo que se ve reflejado por muchos años. También por recordarme el tiempo debido para el control."`,
    },
    {
        id: 3,
        name: 'Alberto Cosme',
        role: '',
        time: 'Hace 1 año',
        place: '/assets/images/google-maps.png',
        thumbnail: '/assets/images/patient-3.webp',
        message: `“Excelente atención profesional! He tenido buena experiencia con los tratamientos y procedimientos que me realizaron, así como con la explicación que es completa y ayuda al paciente a poder comprender en qué estado se encuentra su salud dental. Lo recomiendo.”`,
    },
    {
        id: 4,
        name: 'Adriana Arias',
        role: '',
        time: 'Hace 8 meses',
        place: '/assets/images/google-maps.png',
        thumbnail: '/assets/images/patient-4.webp',
        message: `“Excelente atención y servicio profesional. Superaron mis expectativas.”`,
    },
    {
        id: 5,
        name: 'Yuvis Alvarado',
        role: '',
        time: 'Hace 1 año',
        place: '/assets/images/google-maps.png',
        thumbnail: '/assets/images/patient-5.webp',
        message: `"Ella es una persona muy profesional y hace un trabajo impecable y altamente recomendable."`,
    },
];

const sections = {
    topArea: {
        bgImage: 'url(/assets/images/fondo.png)',
        title: 'Contacto',
        subtitle: '¿Tienes preguntas? Te ayudamos',
        illustration: {
            src: '/assets/images/somebody.svg',
            alt: 'somebody',
            title: 'somebody',
        },
    },
    contact: {
        phone: {
            href: 'tel:+51969174019',
            svg: phoneSvg,
            color: 'text-secondary',
            title: 'Llámanos',
            subtitle: '969 174 019',
        },
        email: {
            href: 'mailto:hola@meliora.pe',
            svg: emailSvg,
            color: 'text-primary',
            title: 'Envía un correo',
            subtitle: 'hola@meliora.pe',
        },
        location: {
            href: 'https://maps.google.com/maps/dir//Meliora+Studio+Dental+R2X6%2B73G+Lima+15054/@-12.1519314,-76.9897075,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b90829b6e561:0xd2160ffba0651ce0',
            targetRel: true,
            svg: locationSvg,
            color: 'text-secondary',
            title: 'Dirección',
            subtitle: 'Av. Los Próceres Mz. B Lt. 16 - Urb. Sánchez Cerro - Surco',
        },
    },
};

const Ad = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    const [openModal, setModal] = useState(false);
    const handleModal = () => {
        setModal(!openModal);
    };

    useEffect(() => {
        const body = document.getElementsByTagName('body')[0];
        console.log(body);
        if (!body) return;
        else {
            body.classList.toggle('overflow-hidden');
            console.log('si');
        }
    }, [openModal]);

    return (
        <>
            <Link href="/">
                <img src="/assets/images/logo.png" alt="meliora studio dental" className="absolute z-30 m-4 h-11 w-auto md:h-14" />
            </Link>

            {/* Above the fold */}
            <section className="relative">
                <div className="-top-11 h-[700px] lg:h-[840px]">
                    <img
                        src={`/assets/images/${foldProp.image.src}`}
                        className="flex h-full w-full object-cover"
                        alt={foldProp.image.alt}
                        title={foldProp.image.title}
                    />
                </div>
                <div
                    className="z-1 absolute inset-0 opacity-50"
                    style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
                ></div>
                <div className="z-1 absolute inset-x-0 top-[19%] text-white md:top-1/3">
                    <div className="container flex flex-col items-center gap-x-32 lg:flex-row lg:items-start">
                        <div className="max-w-[624px] text-center lg:text-left">
                            <h1 className="mb-3 font-playfair text-xl font-semibold text-[#eb8dc2] md:text-2xl">{foldProp.header}</h1>
                            <h2 className="font-playfair text-4xl font-semibold text-primary md:text-5xl xl:text-[60px] xl:leading-[72px]">{foldProp.title}</h2>
                            <p className="mt-8 hidden font-montserrat text-lg lg:flex">{foldProp.subtitle}</p>
                            <button type="button" className="btn mt-10 bg-white px-8 py-[19px] text-black hover:bg-secondary hover:text-white">
                                <button onClick={handleModal} className="font-raleway font-semibold uppercase">
                                    {foldProp.cta.text}
                                </button>
                            </button>
                        </div>
                        <div className="text-right">
                            <div className="h-auto w-full">
                                <img
                                    src="/assets/images/20-blanqueamiento-dental.png"
                                    alt=""
                                    className="m-6 h-48 w-48 lg:m-0 lg:h-80 lg:w-80 lg:object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal */}
            {openModal && (
                <div
                    onClick={() => setModal(false)}
                    className={`fixed inset-0 flex items-center justify-center transition-colors ${openModal ? 'visible bg-black/20' : 'invisible'} z-999`}
                >
                    {/* modal */}

                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`rounded-xl bg-white p-6 shadow transition-all ${openModal ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}
                    >
                        <button
                            onClick={() => setModal(false)}
                            className="text-gray-400 hover:bg-gray-50 hover:text-gray-600 absolute right-2 top-2 rounded-lg bg-white p-1"
                        >
                            X
                        </button>

                        <div className="!h-[80vh] w-[80vw] bg-white">
                            <div className="z-999 h-full w-full ">
                                <iframe
                                    title="Google Calendar"
                                    src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ1-3btr7vk7iGNeSVq4CcD4EcFRz5aBGdSGkWDulPy0fPf2SZPjwFkBHkHTvVWmHHd2dshnKGaD?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;wkst=1&amp;bgcolor=%23ffffff&amp;color=%23FFF&amp;ctz=America%2FLima"
                                    style={{ borderWidth: 0 }}
                                    width="100%"
                                    height="100%"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Beneficios */}
            <section className="bg-meliora-1 relative sm:px-5 lg:py-20">
                <div className="container px-8">
                    <div className="flex flex-col items-center gap-16 lg:flex-row">
                        <div className="mt-6" data-aos="fade-right" data-aos-duration="1000">
                            <PhotoSlider before={beforeAfter.before} after={beforeAfter.after} />
                            <p className="mt-2 text-xs text-gray">Caso real, paciente eligió blanqueamiento en consultorio</p>
                            <div className="flex flex-col items-center">
                                <h6 className="mt-5 text-left font-raleway !font-semibold !text-gray">
                                    ¡Agenda hoy! no te pierdas esta promoción
                                    <br />
                                </h6>
                                <button
                                    className="btn mt-6 rounded-md bg-secondary font-raleway font-semibold text-white hover:bg-primary"
                                    onClick={handleModal}
                                >
                                    Reservar cita
                                </button>
                            </div>
                        </div>

                        <div className="mb-10 flex-1 text-center md:text-left" data-aos="fade-left" data-aos-duration="1000">
                            <div className="heading mb-8">
                                <h6 className="font-montserrat !font-semibold !text-secondary">{benefits.subtitle}</h6>
                                <h4 className="font-playfair !text-primary">{benefits.title}</h4>
                                <h6 className="mt-[18px] text-left font-raleway !font-semibold !text-gray">
                                    {benefits.paragraph1}
                                    <br />
                                </h6>
                            </div>
                            <div className="flex sm:gap-8 md:gap-12">
                                <ul className="mb-5 space-y-2 sm:mb-0">
                                    {[
                                        'Descuento especial del 20% en tu tratamiento de blanqueamiento dental.',
                                        'Consulta gratuita al iniciar cualquier tratamiento.',
                                        'Todos los métodos de pago aceptados: tarjetas, transferencias y más.',
                                    ].map((bullet, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <img src="/assets/images/estrella.png" alt="viñeta" className="h-6 w-auto" />
                                            <span className="text-lg font-bold text-gray">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                    src="/assets/images/vector-line.svg"
                    alt="vector-line"
                    className="absolute inset-x-0 -top-9 block h-9 w-full object-cover object-top dark:hidden"
                />
            </section>

            {/* parte lógica */}
            <section className="relative bg-black py-14 lg:py-20">
                <div className="container">
                    <div className="grid-cols-3 lg:grid">
                        <div className="col-span-2 flex flex-col justify-center lg:pr-16" data-aos="fade-right" data-aos-duration="1000">
                            <div className="heading mb-0 text-center lg:text-left">
                                <h2 className="pb-3 font-montserrat text-[18px] font-bold !text-secondary">{meliora.subtitle}</h2>
                                <h4 className="mb-3 font-playfair !text-primary">{meliora.title}</h4>
                            </div>
                            <div className="my-8 text-left font-raleway text-lg font-semibold text-gray sm:grid-cols-2 md:my-6">
                                <ol className="space-y-3">
                                    <li>
                                        <p className="text-xl font-extrabold">1. Diagnóstico personalizado </p>
                                        {meliora.paragraph1}
                                    </li>
                                    <li>
                                        <p className="text-xl font-extrabold">2. Tratamiento adaptado </p>
                                        {meliora.paragraph2}
                                    </li>
                                    <li>
                                        <p className="text-xl font-extrabold">3. Resultados garantizados </p>
                                        {meliora.paragraph3}
                                    </li>
                                </ol>
                                <br />
                                <p>¡Agéndalo ahora y aprovecha el descuento!</p>
                            </div>
                            {meliora.definition.button && (
                                <div className="mt-4 text-center lg:text-left">
                                    <button className="btn btn-success" onClick={handleModal}>
                                        Reservar cita
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="relative mb-8 mt-8 flex justify-center gap-5 lg:mb-0 lg:mt-0 lg:block" data-aos="fade-left" data-aos-duration="1000">
                            <img src="/assets/images/blanqueamiento-3-pasos.png" alt="" className="mt-24 hidden h-auto w-full lg:flex" />
                            <div className="flex flex-col gap-4 md:flex-row lg:hidden">
                                <img className="h-60 w-auto" src={`/assets/images/blanqueamiento-paso-1.png`} alt="" title="" />
                                <img className="h-60 w-auto" src={`/assets/images/blanqueamiento-paso-2.png`} alt="" title="" />
                                <img className="h-60 w-auto" src={`/assets/images/blanqueamiento-paso-3.png`} alt="" title="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* testimonios */}
            <section className="bg-meliora">
                <div className="container">
                    <div className="py-14 lg:py-20">
                        <div className="flex flex-col items-center justify-between gap-[63px] lg:flex-row">
                            <div data-aos="fade-right" data-aos-duration="1000">
                                <h4 className="text-center font-playfair text-3xl font-black text-black dark:text-white md:text-[40px] md:leading-[50px] lg:text-left">
                                    {testimonials.title[0]}&nbsp;
                                    <span className="font-montserrat font-semibold !text-secondary">{testimonials.title[1]}&nbsp;</span>
                                    {testimonials.title[2]}
                                </h4>
                                <h5 className="mt-2.5 text-center font-raleway text-lg font-medium lg:text-left">{testimonials.subtitle}</h5>
                            </div>

                            {/* CLIENT SLIDER */}
                            <div
                                className="relative mx-auto w-full max-w-[555px] rounded-[16px] bg-white shadow-xl dark:bg-gray-black dark:shadow-none"
                                data-aos="fade-left"
                                data-aos-duration="1000"
                            >
                                <Swiper
                                    loop={true}
                                    slidesPerView="auto"
                                    spaceBetween={30}
                                    speed={2200}
                                    autoplay={{
                                        delay: 6000,
                                        disableOnInteraction: false,
                                    }}
                                    navigation={{
                                        prevEl: '.feedback-slider-button-prev',
                                        nextEl: '.feedback-slider-button-next',
                                    }}
                                    modules={[Navigation, Autoplay]}
                                    dir={'ltr'}
                                    key={'false'}
                                >
                                    {feedbacks.map((feedback: any) => {
                                        return (
                                            <SwiperSlide key={feedback.id}>
                                                <div className="flex justify-between gap-7 p-7">
                                                    <div className="flex items-center gap-2.5">
                                                        <div className="flex h-14 w-14 items-end justify-center overflow-hidden rounded-full border border-[rgba(125,132,150,0.2)] bg-gradient-to-t from-[rgba(125,132,150,0.1)] to-[125,132,150]">
                                                            <img
                                                                src={feedback.thumbnail}
                                                                alt="client's picture thumbnail"
                                                                className="h-full w-full object-cover"
                                                            />
                                                        </div>
                                                        <div>
                                                            <h5 className="mb-2 text-lg font-bold text-black dark:text-white">{feedback.name}</h5>
                                                            <Stars points={5} />
                                                        </div>
                                                    </div>
                                                    <div className="pt-5 text-right">
                                                        <p className="text-xs text-gray">Meliora Studio Dental</p>
                                                        <img src={feedback.place} className="inline-flex h-5 w-auto" alt="google maps logo" />
                                                    </div>
                                                </div>
                                                <div className="border border-black/10 dark:border-white/10"></div>
                                                <div className="p-7">
                                                    <h3 className="text-lg font-bold italic text-black dark:text-white">{feedback.time}</h3>
                                                    <p className="mt-4 font-medium leading-7 text-[#797979]">{feedback.message}</p>
                                                </div>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ofertas y facilidades */}
            <section className="bg-meliora-1 py-14 sm:px-5 lg:py-20">
                <div className="container flex flex-col gap-10 lg:flex-row">
                    <div className="mx-auto lg:mx-0" data-aos="fade-right" data-aos-duration="1000">
                        <img src="/assets/images/blanqueamiento-paciente.png" alt="" className="h-auto w-[420px] rounded-3xl" />
                    </div>
                    <div className="" data-aos="fade-left" data-aos-duration="1000">
                        <div className="heading mb-8">
                            <h6 className="font-montserrat !font-semibold !text-secondary">Sólo en el mes de febrero</h6>
                            <h4 className="font-playfair !text-primary">Aprovecha nuestro descuento</h4>
                            <h6 className="mt-[18px] text-left font-raleway !font-semibold !text-gray">
                                Empieza a mejorar, transforma tu sonrisa.
                                <br />
                                Haz tu consulta y será gratuita si inicias cualquier tratamiento.
                            </h6>
                        </div>
                        <div className="flex sm:gap-8 md:gap-12">
                            <ul className="mb-5 space-y-2 sm:mb-0">
                                {[
                                    'Resultados visibles desde la primera sesión con opciones en consultorio, en casa, o mixto, adaptadas a tu ritmo.',
                                    'Blanqueamiento seguro con gel desensibilizante para minimizar molestias y proteger tu esmalte',
                                    'Evaluación previa para asegurar que tus dientes y encías estén sanos y listos para el tratamiento',
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <img src="/assets/images/estrella.png" alt="viñeta" className="h-6 w-auto" />
                                        <span className="text-lg font-extrabold text-gray">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* contacto y ubicación */}
            <section className="bg-meliora py-14 sm:px-5 lg:py-20">
                <div className="container">
                    <div className="heading mb-9" data-aos="fade-right" data-aos-duration="1000">
                        <h6 className="font-montserrat !font-semibold !text-secondary">Contacto y ubicación</h6>
                        <h4 className="font-playfair !text-primary">Estamos cerca de tí</h4>
                    </div>
                    <div className="flex flex-col gap-x-8 md:flex-row">
                        <div className="flex-1 pb-7 sm:gap-8 md:gap-12">
                            <WidgetMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4179093162934!2d-76.99228778891906!3d-12.151926143818944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90829b6e561%3A0xd2160ffba0651ce0!2sConsultorio%20odontol%C3%B3gico%20Asiri!5e0!3m2!1ses-419!2spe!4v1731362600461!5m2!1ses-419!2spe" />
                        </div>
                        <div className="flex-1 pb-7 sm:gap-8 md:gap-12">
                            <WidgetContact props={sections.contact.phone} />
                            <div className="mb-6"></div>
                            <WidgetContact props={sections.contact.location} />
                        </div>
                    </div>
                </div>
            </section>

            {/* términos y condiciones */}
            <section className="bg-meliora-1 py-8 sm:px-5 lg:py-12" data-aos="fade-up" data-aos-duration="1000">
                <div className="container">
                    <div className="heading mb-8">
                        <p className="font-montserrat !font-semibold !text-secondary">(*) Aplican Términos y condiciones</p>
                    </div>
                    <div className="flex sm:gap-8 md:gap-12">
                        <ul className="mb-5 space-y-2 sm:mb-0">
                            {[
                                'Elegir un blanqueamiento dental es una decisión que debe basarse en resultados comprobados y en la seguridad del procedimiento. En Meliora Studio Dental, ofrecemos dos opciones: blanqueamiento en consultorio, con resultados visibles desde la primera sesión y un proceso de una semana a semana y media; o blanqueamiento en casa, que permite mayor flexibilidad y alcanza su efecto máximo en aproximadamente tres semanas. Ambos métodos están diseñados para lograr un aclaramiento uniforme y duradero.',
                                'Es común preguntarse si el blanqueamiento puede causar molestias. Algunos pacientes experimentan sensibilidad dental temporal, pero en nuestro protocolo incluimos gel desensibilizante para minimizar cualquier incomodidad. Además, la técnica utilizada protege el esmalte y evita daños en la estructura dental, garantizando un tratamiento seguro y efectivo.',
                                'Para obtener los mejores resultados, es importante realizar el tratamiento sobre dientes y encías sanos. Por eso, antes de iniciar, realizamos una evaluación gratuita para determinar si eres candidato ideal y cuál opción es mejor para ti. Si buscas una forma segura y efectiva de mejorar tu sonrisa, esta es una excelente oportunidad para hacerlo.',
                            ].map((bullet, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <img src="/assets/images/estrella.png" alt="viñeta" className="h-3 w-auto" />
                                    <span className="text-xs font-bold text-gray">{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Ad;
