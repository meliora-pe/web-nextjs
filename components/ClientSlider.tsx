import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Stars } from './Stars';

const ClientSlider = ({
    type = 'common',
    feedbacks = [
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
    ],
}) => {
    return (
        <div
            className="relative mx-auto w-full max-w-[555px] rounded-[16px] bg-white shadow-xl dark:bg-gray-black dark:shadow-none"
            data-aos="fade-left"
            data-aos-duration="1000"
        >
            <>
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
                                            <img src={feedback.thumbnail} alt="client's picture thumbnail" className="h-full w-full object-cover" />
                                        </div>
                                        <div>
                                            <h5 className="mb-2 text-lg font-bold text-black dark:text-white">{feedback.name}</h5>
                                            <Stars points={5} />
                                        </div>
                                    </div>
                                    <img src="/assets/images/swipe-icon.svg" alt="swipe-icon" title="swipe-icon" className="h-12 w-12 animate-ping" />
                                </div>
                                <div className="border border-black/10 dark:border-white/10"></div>
                                <div className="p-7">
                                    <h3 className="text-lg font-bold italic text-black dark:text-white">{feedback.time}</h3>
                                    <p className="mt-4 font-medium leading-7 text-[#797979]">{feedback.message}</p>
                                    <div className="text-right">
                                        <img src={feedback.place} className="inline-flex h-8 w-auto pt-2" alt="google maps logo" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </>
        </div>
    );
};

export default ClientSlider;
