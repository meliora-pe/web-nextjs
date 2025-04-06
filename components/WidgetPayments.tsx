import React from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImageTag } from './AboveTheFold';

interface widgetPaymentProps {
    title: string;
    list: ImageTag[];
}

const WidgetPayments = ({ props }: { props: widgetPaymentProps }) => {
    return (
        <section className="overflow-x-hidden bg-white py-14 dark:bg-gray-dark">
            <div className="container">
                <div className="items-center lg:flex">
                    <h2 className="flex-none border-gray/20 text-center text-xl font-black uppercase text-black dark:text-white lg:ltr:mr-12 lg:ltr:border-r-[3px] lg:ltr:pr-12 lg:ltr:text-left lg:rtl:ml-12 lg:rtl:border-l-[3px] lg:rtl:pl-12 lg:rtl:text-right">
                        {props.title}
                    </h2>
                    <Swiper
                        className="mt-8 flex-1 lg:mt-0 xl:w-[1200px] xl:flex-none"
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={8}
                        speed={2500}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.7,
                            },
                            600: {
                                slidesPerView: 2,
                            },
                            1000: {
                                slidesPerView: 3,
                            },
                            1142: {
                                slidesPerView: 5,
                            },
                        }}
                        modules={[Autoplay]}
                        dir={false ? 'rtl' : 'ltr'}
                        key={false ? 'true' : 'false'}
                    >
                        {props.list.map((payment) => {
                            return (
                                <SwiperSlide key={payment.alt}>
                                    <div>
                                        <img src={`/assets/images/${payment.src}`} alt={payment.alt} title={payment.title} />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        <SwiperSlide>
                            <div>
                                <img src="/assets/images/plin.png" alt="logotipo de medio de pago" title="plin" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src="/assets/images/yape.png" alt="logotipo de medio de pago" title="yape" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src="/assets/images/izipay.png" alt="logotipo de medio de pago" title="izipay" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src="/assets/images/visa.png" alt="logotipo de medio de pago" title="visa" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src="/assets/images/mastercard.png" alt="logotipo de medio de pago" title="mastercard" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div>
                                <img src="/assets/images/american-express.png" alt="logotipo de medio de pago" title="american-express" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WidgetPayments;
