import 'swiper/css';
import 'swiper/css/navigation';

import { useSelector } from 'react-redux';
import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IRootState } from '../store';
import { Stars } from './Stars';

const Testimonial = ({
    showTitle = true,
    feedbacks = [
        {
            id: 1,
            name: 'Gabriela Llaja',
            role: '',
            time: '2',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/patient-1.webp',
            message: `“Excelente atención! Me retiraron la muela del juicio y el procedimiento fue correcto. Hicieron todo para que me sienta cómoda, tranquila y sin dolor. Recomendado 100%”`,
        },
        {
            id: 2,
            name: 'Yuri Villaruel',
            role: '',
            time: '2',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/patient-2.webp',
            message: `"Desde la primera vez que llegué a su consultorio tuve una experiencia satisfactoria. Gracias Dra. Yessica por su paciencia al explicarme, animarme a cuidar mis dientes y por su buen trabajo."`,
        },
        {
            id: 3,
            name: 'Alberto Cosme',
            role: '',
            time: '3',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/patient-3.webp',
            message: `“Excelente atención profesional! Buena experiencia con los tratamientos y la explicación. Lo recomiendo.”`,
        },
        {
            id: 4,
            name: 'Valentina Román',
            role: '',
            time: '2',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/patient-4.webp',
            message: `“Realmente 10/10. Me explicó todo con detalle, me mostró fotos de mis dientes y siempre se tomó el tiempo de responder mis dudas. La comunicación fue excelente y me hizo sentir muy cómoda durante todo el proceso. Estoy muy agradecida y lo recomiendo totalmente.”`,
        },
        {
            id: 5,
            name: 'Yuvis Alvarado',
            role: '',
            time: '7',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/patient-5.webp',
            message: `"Muy profesional, un trabajo impecable y altamente recomendable."`,
        },
    ],
    className = '',
}) => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <section className={`relative bg-black py-14 dark:bg-gray-dark/50 dark:bg-none lg:py-20 ${className}`}>
            <div className="absolute top-0 ltr:right-0 rtl:left-0 rtl:-rotate-180">
                <svg width="455" height="445" viewBox="0 0 455 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.03">
                        <ellipse
                            opacity="0.1"
                            cx="752"
                            cy="370.646"
                            rx="750"
                            ry="749.646"
                            stroke="white"
                            strokeWidth="3"
                            strokeMiterlimit="4.62023"
                            strokeLinecap="round"
                            strokeDasharray="35 50 15 15"
                        />
                        <path
                            opacity="0.1"
                            d="M1443.13 370.646C1443.13 752.153 1133.7 1061.43 752 1061.43C370.296 1061.43 60.8655 752.153 60.8655 370.646C60.8655 -10.8606 370.296 -320.134 752 -320.134C1133.7 -320.134 1443.13 -10.8606 1443.13 370.646Z"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <ellipse
                            opacity="0.2"
                            cx="752"
                            cy="370.646"
                            rx="634.561"
                            ry="634.207"
                            stroke="white"
                            strokeWidth="3"
                            strokeMiterlimit="4.62023"
                            strokeLinecap="round"
                            strokeDasharray="35 50 15 15"
                        />
                        <path
                            opacity="0.3"
                            d="M1328.4 370.646C1328.4 688.789 1070.34 946.696 752 946.696C433.66 946.696 175.596 688.789 175.596 370.646C175.596 52.5037 433.66 -205.403 752 -205.403C1070.34 -205.403 1328.4 52.5037 1328.4 370.646Z"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <ellipse
                            opacity="0.4"
                            cx="752"
                            cy="370.646"
                            rx="519.83"
                            ry="519.476"
                            stroke="white"
                            strokeWidth="3"
                            strokeMiterlimit="4.62023"
                            strokeLinecap="round"
                            strokeDasharray="35 50 15 15"
                        />
                        <path
                            opacity="0.5"
                            d="M1211.55 370.646C1211.55 624.251 1005.8 829.84 752 829.84C498.197 829.84 292.452 624.251 292.452 370.646C292.452 117.041 498.197 -88.5479 752 -88.5479C1005.8 -88.5479 1211.55 117.041 1211.55 370.646Z"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <path
                            opacity="0.6"
                            d="M1155.6 370.646C1155.6 593.351 974.903 773.891 752 773.891C529.097 773.891 348.401 593.351 348.401 370.646C348.401 147.942 529.097 -32.5986 752 -32.5986C974.903 -32.5986 1155.6 147.942 1155.6 370.646Z"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <ellipse
                            opacity="0.7"
                            cx="752"
                            cy="370.646"
                            rx="350.567"
                            ry="350.212"
                            stroke="white"
                            strokeWidth="3"
                            strokeMiterlimit="4.62023"
                            strokeLinecap="round"
                            strokeDasharray="35 50 15 15"
                        />
                        <path
                            opacity="0.8"
                            d="M1040.16 370.647C1040.16 529.596 911.148 658.453 752 658.453C592.852 658.453 463.84 529.596 463.84 370.647C463.84 211.698 592.852 82.8408 752 82.8408C911.148 82.8408 1040.16 211.698 1040.16 370.647Z"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <ellipse
                            opacity="0.9"
                            cx="752"
                            cy="370.646"
                            rx="223.088"
                            ry="222.734"
                            stroke="white"
                            strokeWidth="3"
                            strokeMiterlimit="4.62023"
                            strokeLinecap="round"
                            strokeDasharray="35 50 15 15"
                        />
                        <path
                            d="M909.848 370.646C909.848 457.624 839.18 528.14 752 528.14C664.82 528.14 594.152 457.624 594.152 370.646C594.152 283.667 664.82 213.151 752 213.151C839.18 213.151 909.848 283.667 909.848 370.646Z"
                            stroke="white"
                            strokeWidth="3"
                        />
                        <ellipse
                            cx="752"
                            cy="370.646"
                            rx="106.941"
                            ry="106.586"
                            stroke="white"
                            strokeWidth="3"
                            strokeMiterlimit="4.62023"
                            strokeLinecap="round"
                            strokeDasharray="35 50 15 15"
                        />
                    </g>
                </svg>
            </div>
            <div className="container">
                <div className={`heading text-center ${showTitle ? '' : 'hidden'}`} data-aos="fade-left" data-aos-duration="1000">
                    <h6>Testimonios de</h6>
                    <h4 className="font-playfair text-3xl !text-white">Reconocimiento y gratitud</h4>
                </div>
                <div className={`mx-auto lg:w-11/12`} data-aos="fade-right" data-aos-duration="1000">
                    <div className="relative sm:py-12 md:py-0">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            slidesPerView="auto"
                            spaceBetween={30}
                            loop={true}
                            speed={2200}
                            autoplay={{ delay: 7000, disableOnInteraction: false }}
                            navigation={{
                                nextEl: '.testimonial-button-next',
                                prevEl: '.testimonial-button-prev',
                            }}
                            dir={isRtl ? 'rtl' : 'ltr'}
                            key={isRtl ? 'true' : 'false'}
                        >
                            {feedbacks.map((feedback: any) => {
                                return (
                                    <SwiperSlide key={feedback.id}>
                                        <div className="items-center gap-4 sm:grid sm:grid-cols-3">
                                            <div className="col-span-2">
                                                <div className="relative rounded-3xl bg-white/[0.3] p-6">
                                                    <img
                                                        src="/assets/images/blue-quote.png"
                                                        alt="blue-quote"
                                                        className="absolute top-0 sm:-top-6 ltr:right-0 ltr:sm:-right-6 rtl:left-0 rtl:sm:-left-6"
                                                    />
                                                    <div className="pb-8">
                                                        <Stars points={5} />
                                                    </div>
                                                    <p className="relative font-medium italic text-white">
                                                        {feedback.message}
                                                        <span className="absolute -left-2 -top-2">
                                                            <svg width="100" height="73" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <g opacity="0.05">
                                                                    <path
                                                                        d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                                        fill="#93A2B2"
                                                                    />
                                                                    <path
                                                                        d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.72351 47.6072 7.62939e-06 35.6393 7.62939e-06 23.669C7.62939e-06 16.7544 2.12797 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                                        fill="#93A2B2"
                                                                    />
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </p>
                                                    <div className="mt-12">
                                                        <h5 className="font-extrabold text-primary">{feedback.name}</h5>
                                                        <h6 className="text-sm font-bold italic">
                                                            {'Hace '}
                                                            {feedback.time}
                                                            {' meses'}
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-auto mt-4 h-20 w-20 max-w-[255px] overflow-hidden rounded-full bg-white dark:bg-gray-dark sm:mt-0 sm:h-auto sm:w-auto sm:rounded-[150px] ltr:ml-auto ltr:sm:mr-0 rtl:mr-auto rtl:sm:ml-0">
                                                <img src={feedback.thumbnail} alt="testimonial" className="h-full w-full object-cover object-top" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <div className={`bottom-0 mt-5 flex items-center justify-center gap-4 sm:absolute sm:mt-0 sm:justify-end ltr:right-1/3 rtl:left-1/3`}>
                            <img src="/assets/images/swipe-icon.svg" alt="swipe-icon" title="swipe-icon" className="h-12 w-12 animate-ping" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
