import 'swiper/css';
import 'swiper/css/navigation';

import Aos from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';

// import { Autoplay, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import ClientSlider from '../../components/ClientSlider2';
import { PhotoSlider } from '../../components/PhotoSlider';
// import { Stars } from '../../components/Stars';
import adContent from '../../data/landings/ad';

const { AboveTheFold, dolorYSolucion, benefits, beforeAfter, meliora, testimonials, offer, ctaFinal, terms } = adContent;

const Ad = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <>
            {/* logotipo Meliora */}
            <Link href="/">
                <img src="/assets/images/logo.png" alt="meliora studio dental" className="absolute z-30 m-4 h-11 w-auto md:h-14" />
            </Link>

            {/* Above the fold */}
            <section className="relative">
                <div className="-top-11 h-[700px] lg:h-[840px]">
                    <img
                        src={`/assets/images/${AboveTheFold.image.src}`}
                        className="flex h-full w-full object-cover"
                        alt={AboveTheFold.image.alt}
                        title={AboveTheFold.image.title}
                    />
                </div>
                <div
                    className="z-1 absolute inset-0 opacity-50"
                    style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
                ></div>
                <div className="z-1 absolute inset-x-0 top-[30%] text-white md:top-1/2 lg:top-1/4">
                    <div className="container flex flex-col-reverse items-center gap-x-32 lg:flex-row lg:items-start">
                        <div className="max-w-[624px] text-center">
                            <h2 className="mb-4 font-montserrat text-xl font-semibold  md:text-2xl">{AboveTheFold.header}</h2>
                            <h1 className="font-playfair text-4xl font-semibold md:text-5xl xl:text-[60px] xl:leading-[72px]">{AboveTheFold.title}</h1>
                            <p className="mt-8 hidden font-montserrat text-lg lg:flex">{AboveTheFold.subtitle}</p>
                            <Link
                                href="https://wa.link/f7jrvw"
                                className="btn mx-auto mt-10 flex max-w-64 items-center justify-center bg-white px-5 py-[12px] text-black hover:bg-black hover:text-white"
                            >
                                <Image src="/assets/images/whatsapp.png" alt="whatsapp" width={20} height={20} className="h-8 w-8" />
                                <p className="pl-2 font-raleway font-semibold">{AboveTheFold.cta.text}</p>
                            </Link>
                        </div>
                        <div className="text-right">
                            <div className="h-auto w-full">
                                {/* <img
                                    src="/assets/images/landings/10 blanqueamiento dental.png"
                                    alt=""
                                    className="m-6 h-48 w-48 lg:m-0 lg:h-80 lg:w-80 lg:object-contain"
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* dolor y solucion */}
            <section className="bg-meliora-2 relative overflow-hidden pb-8">
                <div className="container">
                    <div className="relative mx-auto max-w-6xl px-4 py-8 sm:py-12">
                        <div className="grid items-center gap-5 lg:grid-cols-2">
                            {/* LEFT: photo stack */}
                            <div className="order-1 lg:order-none">
                                <div className="relative mx-auto h-[320px] w-full max-w-[520px] sm:h-[420px]">
                                    {/* card 1 */}
                                    <div className="absolute top-9 w-[56%] rotate-[-3deg]">
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray">
                                            <Image
                                                src="/assets/images/landings/ad/blanqueamiento-0.png"
                                                alt="Inseguridad al sonreír"
                                                width={900}
                                                height={700}
                                                className="h-auto w-full object-cover"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    {/* card 2 */}
                                    <div className="absolute right-0 top-16 w-[62%] rotate-[2deg]">
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray">
                                            <Image
                                                src="/assets/images/landings/ad/blanqueamiento-4.jpg"
                                                alt="Taparse la sonrisa por manchas"
                                                width={900}
                                                height={700}
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* card 3 */}
                                    <div className="absolute bottom-4 left-9 w-[42%] rotate-[-2deg]">
                                        <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray">
                                            <Image
                                                src="/assets/images/landings/ad/blanqueamiento-5.png"
                                                alt="Sonrisa más blanca y natural"
                                                width={1000}
                                                height={800}
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* card 4 */}
                                    <div className="absolute bottom-5 right-10 w-[44%] rotate-[4deg]">
                                        <div className="relative overflow-hidden rounded-2xl shadow-md ring-1 ring-gray">
                                            <Image
                                                src="/assets/images/landings/ad/blanqueamiento-3.png"
                                                alt="Manchas por café o té"
                                                width={700}
                                                height={500}
                                                className="h-auto w-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT: copy */}
                            <div className="order-2 lg:order-none">
                                <div className="heading mb-0">
                                    <h3 className="pb-3 text-center font-montserrat text-[18px] font-bold !text-black lg:text-left">
                                        {dolorYSolucion.subtitle}
                                    </h3>
                                    <h4 className="mb-3 text-center font-montserrat !text-secondary lg:text-left">{dolorYSolucion.title}</h4>
                                </div>

                                <h6 className="mt-[18px] text-left font-raleway !font-semibold !text-gray">
                                    {dolorYSolucion.paragraph}
                                    <br />
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="relative mt-6 flex flex-col items-center gap-10 overflow-hidden rounded-xl bg-black bg-[url(/assets/images/app-bg.png)] bg-cover bg-no-repeat p-8 dark:bg-white/5 lg:flex-row lg:p-12">
                        <div className="heading z-1 relative mb-0 text-center lg:w-1/2 lg:text-left">
                            <h6>{dolorYSolucion.subtitle2}</h6>
                            <h4 className="mb-3 text-2xl !text-white">{dolorYSolucion.title2}</h4>

                            <div className="heading relative mb-0 text-left text-gray">
                                <p className="mt-2 text-base">{dolorYSolucion.paragraph2}</p>

                                <ul className="text-zinc-700 mt-4 space-y-2 text-left text-base">
                                    {dolorYSolucion.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <img src="/assets/images/estrella.png" alt="viñeta" className="h-5 w-auto" />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <Link
                                href="https://wa.link/f7jrvw"
                                className="btn mx-auto mt-10 flex max-w-64 items-center justify-center bg-white px-5 py-[12px] hover:bg-secondary hover:text-black"
                            >
                                <Image src="/assets/images/whatsapp.png" alt="whatsapp" width={20} height={20} className="h-8 w-8" />
                                <p className="pl-2 font-raleway font-semibold text-black">{AboveTheFold.cta.text}</p>
                            </Link>
                        </div>
                        <div className="mt-3 flex-1 overflow-hidden rounded-[25px] sm:mt-0" data-aos="fade" data-aos-duration="500">
                            <img src="/assets/images/landings/ad/blanqueamiento-2.jpg" alt="blanqueamiento dental" />
                        </div>
                    </div>
                </div>
            </section>

            {/* beneficios */}
            <section className="relative bg-white py-10 sm:px-5 lg:py-20">
                <div className="container px-8">
                    <div className="flex flex-col items-center gap-2 lg:flex-row">
                        <div className="mb-3 flex-1" data-aos="fade-left" data-aos-duration="1000">
                            <div className="heading mb-8 text-center md:text-left">
                                <h6 className="font-montserrat !font-semibold !text-black">{benefits.subtitle}</h6>
                                <h4 className="font-playfair !text-secondary">{benefits.title}</h4>
                                <h6 className="mt-[18px] text-left font-raleway !font-semibold !text-gray">
                                    {benefits.paragraph1}
                                    <br />
                                </h6>
                            </div>
                            <div className="flex text-left sm:gap-8 md:gap-12">
                                <ul className="mb-5 space-y-2 sm:mb-0">
                                    {benefits.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <img src="/assets/images/estrella.png" alt="viñeta" className="mt-1 h-5 w-auto" />
                                            <span className="text-left text-base font-semibold text-gray">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="" data-aos="fade" data-aos-duration="1000">
                            <PhotoSlider before={beforeAfter.before} after={beforeAfter.after} />
                            <p className="mt-2 text-center text-xs text-gray">* Caso real, paciente eligió blanqueamiento en consultorio</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* proceso */}
            <section className="relative bg-black py-14 lg:py-20">
                <div className="container">
                    <div className="grid-cols-4 lg:grid">
                        <div className="col-span-2 flex flex-col justify-center lg:pr-16" data-aos="fade-right" data-aos-duration="1000">
                            <div className="heading mb-0 text-center lg:text-left">
                                <h2 className="pb-3 font-montserrat text-[18px] font-bold !text-secondary">{meliora.subtitle}</h2>
                                <h4 className="mb-3 font-playfair !text-primary">{meliora.title}</h4>
                            </div>
                            <div className="my-4 text-left font-raleway text-lg font-semibold text-gray sm:grid-cols-2 md:my-6">
                                <ol className="space-y-6" data-aos="fade-left" data-aos-duration="1000">
                                    <li className="flex flex-row">
                                        <Image
                                            src="/assets/images/landings/ad/1.png"
                                            alt="Paso 1"
                                            width={32}
                                            height={32}
                                            className="mr-4 inline-block h-10 w-10"
                                        />
                                        <div>
                                            <p className="text-xl font-extrabold">{meliora.step1}</p>
                                            {meliora.paragraph1}
                                        </div>
                                    </li>
                                    <div
                                        className="relative my-4 flex justify-center gap-5 lg:mb-0 lg:mt-0 lg:block"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <div className="flex flex-col gap-4 md:flex-row lg:hidden">
                                            <img className="h-60 w-auto" src={`/assets/images/landings/ad/blanqueamiento-paso-1.png`} alt="" title="" />
                                        </div>
                                    </div>
                                    <li className="flex flex-row">
                                        <Image
                                            src="/assets/images/landings/ad/2.png"
                                            alt="Paso 1"
                                            width={32}
                                            height={32}
                                            className="mr-4 inline-block h-10 w-10"
                                        />
                                        <div>
                                            <p className="text-xl font-extrabold">{meliora.step2}</p>
                                            {meliora.paragraph2}
                                        </div>
                                    </li>
                                    <div
                                        className="relative mb-8 mt-8 flex justify-center gap-5 lg:mb-0 lg:mt-0 lg:block"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <div className="flex flex-col gap-4 md:flex-row lg:hidden">
                                            <img className="h-60 w-auto" src={`/assets/images/landings/ad/blanqueamiento-paso-2.png`} alt="" title="" />
                                        </div>
                                    </div>
                                    <li className="flex flex-row">
                                        <Image
                                            src="/assets/images/landings/ad/3.png"
                                            alt="Paso 1"
                                            width={32}
                                            height={32}
                                            className="mr-4 inline-block h-10 w-10"
                                        />
                                        <div>
                                            <p className="text-xl font-extrabold">{meliora.step3}</p>
                                            {meliora.paragraph3}
                                        </div>
                                    </li>
                                    <div
                                        className="relative mb-8 mt-8 flex justify-center gap-5 lg:mb-0 lg:mt-0 lg:block"
                                        data-aos="fade-left"
                                        data-aos-duration="1000"
                                    >
                                        <div className="flex flex-col gap-4 md:flex-row lg:hidden">
                                            <img className="h-60 w-auto" src={`/assets/images/landings/ad/blanqueamiento-paso-3.png`} alt="" title="" />
                                        </div>
                                    </div>
                                </ol>
                                <br />
                                <p className="text-center">{meliora.cta}</p>
                            </div>
                            <Link
                                href="https://wa.link/f7jrvw"
                                className="btn hover:bgvia-secondary mx-auto mt-10 flex max-w-64 items-center justify-center bg-white px-5 py-[12px] text-black"
                            >
                                <Image src="/assets/images/whatsapp.png" alt="whatsapp" width={20} height={20} className="h-8 w-8" />
                                <p className="pl-2 font-raleway font-semibold text-black">{AboveTheFold.cta.text}</p>
                            </Link>
                        </div>
                        {/* pasos tratamiento */}
                        <div
                            className="relative col-span-2 mx-auto hidden min-h-full w-full justify-center gap-5 overflow-x-auto lg:block lg:flex lg:h-[420px]"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                        >
                            {/* FOTO 1 */}
                            <div className="relative h-[280px] w-[220px] flex-shrink-0 lg:absolute lg:right-3 lg:top-2 lg:rotate-[5deg]">
                                <div className="h-full w-full overflow-hidden rounded-2xl shadow-xl">
                                    <img src="/assets/images/landings/ad/blanqueamiento-paso-1.png" alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            {/* FOTO 2 */}
                            <div className="relative h-[280px] w-[220px] flex-shrink-0 lg:absolute lg:left-1/2 lg:top-36 lg:-translate-x-1/2 lg:rotate-[-3deg]">
                                <div className="h-full w-full overflow-hidden rounded-2xl shadow-xl">
                                    <img src="/assets/images/landings/ad/blanqueamiento-paso-2.png" alt="" className="h-full w-full object-cover" />
                                </div>
                            </div>
                            {/* FOTO 3 */}
                            <div className="relative h-[280px] w-[220px] flex-shrink-0 lg:absolute lg:bottom-2 lg:left-3 lg:rotate-[4deg]">
                                <div className="h-full w-full overflow-hidden rounded-2xl shadow-xl">
                                    <img src="/assets/images/landings/ad/blanqueamiento-paso-3.png" alt="" className="h-full w-full object-cover" />
                                </div>
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

                            <ClientSlider />
                        </div>
                    </div>
                </div>
            </section>

            {/* ofertas y facilidades */}
            <section className="bg-meliora-1 py-14 sm:px-5 lg:py-20">
                <div className="container flex flex-col gap-10 lg:flex-row">
                    <div className="mx-auto lg:mx-0" data-aos="fade-right" data-aos-duration="1000">
                        <img src="/assets/images/paciente-mujer-sonrie-dentista-2.webp" alt="" className="h-auto w-[360px] rounded-3xl" />
                    </div>
                    <div className="text-center md:text-left" data-aos="fade-left" data-aos-duration="1000">
                        <div className="heading mb-4">
                            <h6 className="font-montserrat !font-semibold !text-secondary">{offer.subtitle}</h6>
                            <h4 className="font-playfair !text-primary">{offer.title}</h4>
                            <h6 className="mt-[10px] text-left font-raleway !font-semibold !text-gray">{offer.paragraph}</h6>
                        </div>
                        <div className="flex sm:gap-8 md:gap-12">
                            <ul className="mb-3 space-y-2 sm:mb-0">
                                {offer.bullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <img src="/assets/images/estrella.png" alt="viñeta" className="mt-1 h-5 w-auto" />
                                        <span className="text-left text-base font-semibold text-gray">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* contacto y ubicación */}
            {/* <section className="bg-meliora py-14 sm:px-5 lg:py-20">
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
                            <WidgetContact props={sections.contact.location} />
                            <div className="mb-6"></div>
                            <WidgetContact props={sections.contact.phone} />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* cta final */}
            <section className="bg-meliora py-14 sm:px-5 lg:py-20">
                <div className="container">
                    <div className="heading mb-2 text-center" data-aos="fade-right" data-aos-duration="1000">
                        <h6 className="hidden font-montserrat !font-semibold !text-black lg:block">{ctaFinal.title}</h6>
                        <h6 className="-mb-3 font-montserrat !font-semibold !text-black lg:mb-0 lg:hidden">
                            {ctaFinal.title.split('.')[0]}
                            <br />
                            {ctaFinal.title.split('.')[1]}
                        </h6>
                        {/* <h6 className="font-montserrat !font-semibold !text-black lg:hidden"></h6> */}
                        <h4 className="font-playfair !text-secondary">{ctaFinal.subtitle}</h4>
                    </div>
                    <div className="flex flex-col gap-x-8 md:flex-row">
                        <Link
                            href="https://wa.link/f7jrvw"
                            className="btn mx-auto mt-10 flex max-w-64 items-center justify-center bg-white px-5 py-[12px] text-black hover:bg-black hover:text-white"
                        >
                            <Image src="/assets/images/whatsapp.png" alt="whatsapp" width={20} height={20} className="h-8 w-8" />
                            <p className="pl-2 font-raleway font-semibold">{AboveTheFold.cta.text}</p>
                        </Link>
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
                            {terms.map((bullet, i) => (
                                <li key={i} className="flex items-start gap-2">
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
