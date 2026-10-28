import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Stars } from './Stars';

const ClientSlider = ({
    type = 'common',
    feedbacks = [
        {
            id: 1,
            name: 'Gabriela Ll.',
            role: '',
            time: 'Hace 1 semana',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/1-GL.png',
            message: `“Excelente atención! Me retiraron la muela del juicio. Hicieron de todo para que me sienta cómoda, tranquila y sin dolor. Recomendado 100%”`,
        },
        {
            id: 2,
            name: 'Yuri V.',
            role: '',
            time: 'Hace 6 días',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/2-YV.png',
            message: `"Desde la primera vez que llegué a su consultorio tuve una experiencia satisfactoria, desde 2014. Gracias por su paciencia al explicarme, animarme a cuidar mis dientes, también por recordarme el tiempo debido para el control."`,
        },
        {
            id: 3,
            name: 'Alberto C.',
            role: '',
            time: 'Hace 9 días ',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a/ACg8ocLICV-uZhERLhvrUeOigQqZFIkCcc5SnMt86ULZevJuwO100w=w72-h72-p-rp-mo-br100',
            message: `“Excelente atención profesional! He tenido buena experiencia con los tratamientos y procedimientos, así como con la explicación. Lo recomiendo.”`,
        },
        {
            id: 4,
            name: 'Aaron A.',
            role: '',
            time: 'Hace 1 mes',
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/4-AA.png',
            message: `“Una consulta agradable, una increíble atención y rápida solución a mi problema, recomendadísimo."`,
        },
        {
            id: 5,
            name: 'Valentina R.',
            role: '',
            time: `Hace 2 semanas`,
            place: '/assets/images/whatsapp-business.png',
            thumbnail: '/assets/images/5-VR.png',
            message: `“Quedé encantada con su trabajo. Yo tenía bastante miedo de ir al dentista y me lo quitaron por completo, así que siempre los recomiendo con toda confianza 🫶🏻"`,
        },
        {
            id: 6,
            name: 'Lizeth R.',
            role: '',
            time: `Hace 3 semanas`,
            place: '/assets/images/google-maps.png',
            thumbnail: '/assets/images/6-LR.png',
            message: `"Desde mi primera visita, he recibido una atención de primera calidad, profesionales especializados en distintas áreas y un servicio de alta calidad. En especial el trato amable y paciencia para explicar cada procedimiento. Definitivamente, lo recomiendo ¡Una excelente experiencia!"`,
        },
    ],
}) => {
    return (
        <div className="relative mx-auto w-full max-w-[555px]">
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
                            <div className="rounded-[16px] bg-white shadow-xl dark:bg-gray-black dark:shadow-none">
                                <div className="flex justify-between p-4">
                                    <div className="flex items-center gap-1.5">
                                        <div>
                                            <img src={feedback.thumbnail} alt="client's picture thumbnail" className="flex h-14 w-auto rounded-full" />
                                        </div>
                                        <div>
                                            <h5 className="mb-2 text-base font-bold text-black dark:text-white md:text-xl">{feedback.name}</h5>
                                            <Stars points={5} />
                                        </div>
                                    </div>
                                    <img src={feedback.place} className="inline-flex h-8 w-auto pt-4" alt="google maps logo" />
                                </div>
                                <div className="border border-black/10 dark:border-white/10"></div>
                                <div className="relative p-7">
                                    <h3 className="text-lg font-bold italic text-black dark:text-white">{feedback.time}</h3>
                                    <p className="mt-4 font-medium leading-7 text-[#797979]">{feedback.message}</p>
                                    <img
                                        src="/assets/images/swipe-icon.svg"
                                        alt="swipe-icon"
                                        title="swipe-icon"
                                        className="absolute bottom-0 right-0 h-12 w-12 animate-ping"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default ClientSlider;
