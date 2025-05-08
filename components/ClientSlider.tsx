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
            time: 'Hace 10 meses',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjUjnAt-MeCEXxuGpuxIbXRkR8-m3deb-_WkS1oZ-WgGkt6Hi7so=w72-h72-p-rp-mo-ba2-br100',
            message: `“Excelente atención! Me retiraron la muela del juicio inferior y el procedimiento fue correcto. Hicieron todo para que me sienta cómoda, tranquila y sin dolor. La primera noche de la operación no sentí dolor alguno. Recomendado 100%”`,
        },
        {
            id: 2,
            name: 'Yuri Villaruel',
            role: '',
            time: 'Hace 6 meses',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjWqASMvguBRmPCcpAIjGtDlbTbYzfPITkECFPlyqGBtYOjYdJn4=w72-h72-p-rp-mo-br100',
            message: `"Desde la primera vez que llegué a su consultorio tuve una experiencia satisfactoria, si no mal recuerdo desde 2014. Gracias Dra. Yessica por su paciencia al explicarme, animarme a cuidar mis dientes y por su buen trabajo que se ve reflejado por muchos años. También por recordarme el tiempo debido para el control."`,
        },
        {
            id: 3,
            name: 'Alberto Cosme',
            role: '',
            time: 'Hace un año',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a/ACg8ocLICV-uZhERLhvrUeOigQqZFIkCcc5SnMt86ULZevJuwO100w=w72-h72-p-rp-mo-br100',
            message: `“Excelente atención profesional! He tenido buena experiencia con los tratamientos y procedimientos que me realizaron, así como con la explicación que es completa y ayuda al paciente a poder comprender en qué estado se encuentra su salud dental. Lo recomiendo.”`,
        },
        {
            id: 4,
            name: 'Aaron Acosta',
            role: '',
            time: 'Hace 1 año',
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjVNFW1UGm2EEQVQmAIJ6uk_JEKc1wI3Kx-7W8O3USK3sRBXgAnE=w72-h72-p-rp-mo-br100',
            message: `“Una consulta agradable, una increíble atención al cliente y rápida solución a mi problema, recomendadísimo."`,
        },
        {
            id: 5,
            name: 'Valentina Román',
            role: '',
            time: `Hace ${new Date().getMonth() - 3} meses`,
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjVykvO6mlMsidUTvEaI4jrsFUfFwg6ead_k4o-vFK9DYh7O_OlK=w72-h72-p-rp-mo-br100',
            message: `"Realmente 10/10. Me explicó todo con detalle, me mostró fotos de mis dientes y siempre se tomó el tiempo de responder mis dudas. La comunicación fue excelente y me hizo sentir muy cómoda durante todo el proceso. Se nota que realmente le importa su trabajo y sus pacientes. Estoy muy agradecida con la Dra. Yessica y la recomiendo totalmente🫶🏻"`,
        },
        {
            id: 6,
            name: 'Lizeth Rivera',
            role: '',
            time: `Hace ${new Date().getMonth() - 2} meses`,
            place: '/assets/images/google-maps.png',
            thumbnail: 'https://lh3.googleusercontent.com/a-/ALV-UjWeaqoh5Dhgngk9zR5gSW3oYNUtnErYOGgJmSn68eHyxRlm26U=w72-h72-p-rp-mo-br100',
            message: `"Desde mi primera visita a Meliora Studio Dental, he recibido una atención de primera calidad. Cuenta con un equipo de profesionales especializados en distintas áreas de la odontología, lo que garantiza un servicio completo y de alta calidad. En especial, quiero destacar a la doctora Yessica, una profesional excepcional, con trato amable y paciencia para explicar cada procedimiento. Su precisión y dedicación en cada tratamiento demuestran su compromiso con la salud y bienestar de sus pacientes. Definitivamente, recomiendo Meliora Studio Dental a quienes buscan atención odontológica de calidad, con un ambiente cálido y profesional. ¡Una excelente experiencia!"`,
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
