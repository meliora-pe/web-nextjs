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
            name: 'Gabriela Llaja',
            role: '',
            time: 'Hace 10 meses',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjUjnAt-MeCEXxuGpuxIbXRkR8-m3deb-_WkS1oZ-WgGkt6Hi7so=w72-h72-p-rp-mo-ba2-br100',
            message: `“Excelente atención! Me retiraron la muela del juicio. Hicieron de todo para que me sienta cómoda, tranquila y sin dolor. Recomendado 100%”`,
        },
        {
            id: 2,
            name: 'Yuri Villaruel',
            role: '',
            time: 'Hace 6 meses',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjWqASMvguBRmPCcpAIjGtDlbTbYzfPITkECFPlyqGBtYOjYdJn4=w72-h72-p-rp-mo-br100',
            message: `"Desde la primera vez que llegué a su consultorio tuve una experiencia satisfactoria, desde 2014. Gracias por su paciencia al explicarme, animarme a cuidar mis dientes, también por recordarme el tiempo debido para el control."`,
        },
        {
            id: 3,
            name: 'Alberto Cosme',
            role: '',
            time: 'Hace un año',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a/ACg8ocLICV-uZhERLhvrUeOigQqZFIkCcc5SnMt86ULZevJuwO100w=w72-h72-p-rp-mo-br100',
            message: `“Excelente atención profesional! He tenido buena experiencia con los tratamientos y procedimientos, así como con la explicación. Lo recomiendo.”`,
        },
        {
            id: 4,
            name: 'Aaron Acosta',
            role: '',
            time: 'Hace 1 año',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjVNFW1UGm2EEQVQmAIJ6uk_JEKc1wI3Kx-7W8O3USK3sRBXgAnE=w72-h72-p-rp-mo-br100',
            message: `“Una consulta agradable, una increíble atención y rápida solución a mi problema, recomendadísimo."`,
        },
        {
            id: 5,
            name: 'Valentina Román',
            role: '',
            time: `Hace ${new Date().getMonth() - 3} meses`,
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjVykvO6mlMsidUTvEaI4jrsFUfFwg6ead_k4o-vFK9DYh7O_OlK=w72-h72-p-rp-mo-br100',
            message: `"Realmente 10/10. Me explicó todo con detalle, me mostró fotos de mis dientes y siempre se tomó el tiempo de responder mis dudas. La comunicación excelente y me hizo sentir muy cómoda en todo el proceso. Se nota que realmente le importa sus pacientes. Estoy muy agradecida y lo recomiendo totalmente🫶🏻"`,
        },
        {
            id: 6,
            name: 'Lizeth Rivera',
            role: '',
            time: `Hace ${new Date().getMonth() - 2} meses`,
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjWeaqoh5Dhgngk9zR5gSW3oYNUtnErYOGgJmSn68eHyxRlm26U=w72-h72-p-rp-mo-br100',
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
                                        {/* <div className="flex h-14 w-14 items-end justify-center overflow-hidden rounded-full border border-[rgba(125,132,150,0.2)] bg-gradient-to-t from-[rgba(125,132,150,0.1)] to-[125,132,150]"> */}
                                        <div>
                                            <img src={feedback.thumbnail} alt="client's picture thumbnail" className="flex h-14 w-auto rounded-full" />
                                        </div>
                                        {/* </div> */}
                                        <div>
                                            <h5 className="mb-2 text-base font-bold text-black dark:text-white md:text-lg">{feedback.name}</h5>
                                            <Stars points={5} />
                                        </div>
                                    </div>
                                    <img src="/assets/images/swipe-icon.svg" alt="swipe-icon" title="swipe-icon" className="h-12 w-12 animate-ping" />
                                    <img src={feedback.place} className="inline-flex h-10 w-auto pt-3" alt="google maps logo" />
                                </div>
                                <div className="border border-black/10 dark:border-white/10"></div>
                                <div className="p-7">
                                    <h3 className="text-lg font-bold italic text-black dark:text-white">{feedback.time}</h3>
                                    <p className="mt-4 font-medium leading-7 text-[#797979]">{feedback.message}</p>
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
