import OfficeSwiper from '../components/OfficeSwiper';
import Link from 'next/link';
import ContactForm from '../components/ContactForm';
import TitlePage from '../components/TitlePage';
import WidgetTopBackground from '../components/WidgetTopBackground';
import WidgetContact from '../components/WidgetContact';
import WidgetMap from '../components/WidgetMap';
import { contactUs } from '../data/content';
import { facebookSvg, instagramSvg } from '../data/svg';

const { title, sections } = contactUs;

const Contactus = () => {
    return (
        <div>
            <TitlePage title={title} />

            <WidgetTopBackground props={sections.topArea} />

            <section className="bg-white/10 py-16 dark:bg-gray-dark">
                <div className="container">
                    <div className="heading text-center">
                        <h4 className="font-playfair text-3xl sm:!leading-[50px]">Formulario de contacto</h4>
                    </div>
                    <div className="relative lg:flex">
                        <ContactForm />
                    </div>
                </div>
            </section>

            <OfficeSwiper />

            <section className="bg-[#efefef] dark:bg-[#101010] py-10 lg:py-[50px]">
                <div className="container">
                    <div className="heading text-center">
                        <h4 className="font-playfair text-3xl sm:!leading-[50px]">Datos de Contacto</h4>
                    </div>
                    <div className="mb-10 grid gap-[30px] grid-cols-1 lg:grid-cols-3">
                        <WidgetContact props={sections.contact.phone} />
                        <WidgetContact props={sections.contact.email} />
                        <div className="rounded-[32px] bg-white px-4 py-6 hover:bg-secondary/20 dark:bg-gray-dark md:w-full md:p-7" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-4 flex items-center justify-center gap-2 text-secondary">
                                <div>
                                    <img src="/assets/images/like.png" alt="logotipo red social" className="h-7 w-auto" />
                                </div>
                                <span className="text-[22px] font-bold">Síguenos</span>
                            </div>
                            <ul className="mt-1 flex items-center justify-center gap-5" data-aos="fade-up" data-aos-duration="500">
                                <li className="h-[30px] w-[30px]">
                                    <Link href="https://www.facebook.com/profile.php?id=61560595868897" className="group">
                                        {facebookSvg}
                                    </Link>
                                </li>
                                <li className="h-[30px] w-[30px]">
                                    <Link href="https://www.instagram.com/meliora.pe/" className="group">
                                        {instagramSvg}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <WidgetMap src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4179093162934!2d-76.99228778891906!3d-12.151926143818944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90829b6e561%3A0xd2160ffba0651ce0!2sConsultorio%20odontol%C3%B3gico%20Asiri!5e0!3m2!1ses-419!2spe!4v1731362600461!5m2!1ses-419!2spe" />
                </div>
            </section>

        </div>
    );
};

export default Contactus;
