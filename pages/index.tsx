import AboveTheFold from '../components/AboveTheFold';
import BeforeAfterPic from '../components/BeforeAfterPic';
import ClientSlider from '../components/ClientSlider';
import Services from '../components/Services';
import TitlePage from '../components/TitlePage';
import WidgetCtaBanner from '../components/WidgetCtaBanner';
import WidgetMap from '../components/WidgetMap';
import WidgetContact from '../components/WidgetContact';
import WgtTwoParagraphsBullets from '../components/WidgetTwoParagraphsBullets';
import WidgetTwoImages from '../components/WidgetTwoImages';
import WidgetTwoParagraphsButton from '../components/WidgetTwoParagraphsButton';
import { home } from '../data/content';

const Index = () => {
    const { title, sections } = home;
    return (
        <div>
            <TitlePage title={title} />

            <AboveTheFold props={sections.aboveTheFold} />

            <div className="overflow-x-hidden">
                <section className="bg-meliora-2 py-14 lg:py-20">
                    <div className="container">
                        <div className="grid-cols-3 lg:grid">
                            <div className="col-span-2 flex flex-col justify-center lg:ltr:pr-20 lg:rtl:pl-20" data-aos="fade-right" data-aos-duration="1000">
                                <WidgetTwoParagraphsButton props={sections.meliora.definition} />
                            </div>
                            <div className="relative mb-8 mt-8 flex justify-center gap-5 lg:mb-0 lg:mt-0 lg:block">
                                <WidgetTwoImages props={sections.meliora.images} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-black py-14 dark:bg-gray-black sm:px-5 lg:py-20">
                    <div className="container px-8">
                        <div className="flex flex-col items-center gap-16 lg:flex-row">
                            <div className="mt-6 flex-1 overflow-hidden rounded-[25px] sm:mt-0" data-aos="fade-right" data-aos-duration="1000">
                                <img src={`/assets/images/${sections.whyUs.image.src}`} alt={sections.whyUs.image.alt} title={sections.whyUs.image.title} />
                            </div>
                            <div className="flex-1 text-center ltr:md:text-left rtl:md:text-right" data-aos="fade-left" data-aos-duration="1000">
                                <WgtTwoParagraphsBullets props={sections.whyUs} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-meliora-2">
                    <div className="container">
                        <div className="py-14 lg:py-20">
                            <div className="flex flex-col items-center justify-between gap-[63px] lg:flex-row">
                                <div data-aos="fade-right" data-aos-duration="1000">
                                    <h4 className="text-center font-playfair text-3xl font-black text-black dark:text-white md:text-[40px] md:leading-[50px] ltr:lg:text-left rtl:text-right">
                                        {sections.testimonials.title[0]}&nbsp;
                                        <span className="font-montserrat font-semibold !text-secondary">{sections.testimonials.title[1]}&nbsp;</span>
                                        {sections.testimonials.title[2]}
                                    </h4>
                                    <h5 className="mt-2.5 text-center font-raleway text-lg font-medium ltr:lg:text-left rtl:lg:text-right">
                                        {sections.testimonials.subtitle}
                                    </h5>
                                </div>

                                <ClientSlider />
                            </div>
                        </div>
                    </div>
                </section>

                <Services props={sections.services} />

                <section className="bg-meliora-2 py-14 dark:bg-none lg:py-20">
                    <div className="container">
                        <div className="heading flex flex-col-reverse text-center">
                            <h4 className="font-playfair text-3xl">{sections.beforeAfter.title}</h4>
                            <h5 className="font-montserrat text-lg font-semibold">{sections.beforeAfter.subtitle}</h5>
                        </div>
                        <BeforeAfterPic props={sections.beforeAfter.case} />
                    </div>
                </section>

                <WidgetCtaBanner
                    cta={{ href: '/appointment', text: 'Agenda una cita' }}
                    title={'Empieza a mejorar hoy, recupera tu sonrisa y tu salud bucal'}
                />

                <section className="bg-meliora-2 pt-14 dark:bg-none">
                    <div className="container">
                        <div className="heading flex flex-col-reverse text-center" data-aos="fade-up" data-aos-duration="1000">
                            <h4 className="font-playfair text-3xl">{sections.contact.title}</h4>
                            <h5 className="font-montserrat text-lg text-secondary">{sections.contact.subtitle}</h5>
                        </div>
                        <div className="my-10">
                            <WidgetContact props={sections.contact.location} />
                        </div>
                        <div className="mb-10 grid gap-[30px] md:grid-cols-2">
                            <WidgetContact props={sections.contact.email} />
                            <WidgetContact props={sections.contact.phone} />
                        </div>
                    </div>
                    <WidgetMap src={sections.contact.mapSrc} />
                </section>
            </div>
        </div>
    );
};

export default Index;
