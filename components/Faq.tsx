import { useState } from 'react';
import AnimateHeight from 'react-animate-height';

const Faq = ({
    showTitle = true,
    type = 'faq',
    queries = [
        {
            id: 1,
            question: '¿Sus tratamientos son dolorosos o invasivos?',
            answer: 'En Meliora Studio Dental, nos preocupamos por tu comodidad en cada paso del tratamiento. Nuestro equipo está constantemente actualizado en técnicas menos invasivas y avanzadas que minimizan cualquier molestia. Desde la primera consulta, te explicaremos el proceso y resolveremos todas tus dudas para que te sientas tranquilo y seguro. Nuestra prioridad es ofrecerte una experiencia agradable, con procedimientos delicados que cuidan tu salud y bienestar.',
        },
        {
            id: 2,
            question: 'Tengo miedo al dentista, ¿cómo me ayudarán a sentirme más cómodo?',
            answer: 'Entendemos que muchos pacientes sienten ansiedad al visitar al dentista. En Meliora, nos destacamos por ofrecer un trato amigable, cálido y empático desde tu primer contacto con nosotros. Todo nuestro equipo se enfoca en que te sientas cómodo y escuchado, explicándote cada paso del proceso para que tengas toda la información y confianza que necesitas. Además, aplicamos técnicas que reducen el dolor y el estrés, para que tu experiencia sea lo más relajada posible.',
        },
        {
            id: 3,
            question: '¿Qué garantías tengo de que recibiré un buen resultado con mi tratamiento?',
            answer: 'Llevamos más de 11 años brindando un servicio de alta calidad que nuestros pacientes confían. Contamos con un equipo multidisciplinario de especialistas altamente capacitados, que personalizan cada tratamiento según tus necesidades. Además, utilizamos materiales de primera calidad y técnicas actualizadas para asegurarnos de que los resultados no solo sean estéticos, sino duraderos. Tu satisfacción es nuestra prioridad, y estamos comprometidos a que te sientas seguro con el resultado final.',
        },
        // {
        //     id: 4,
        //     question: '¿Qué tipo de contenido puedo esperar en sus publicaciones de redes sociales?',
        //     answer: 'En Meliora Studio Dental, nos preocupamos por mantenerte informado sobre temas de salud bucal. En nuestras redes sociales compartimos consejos útiles, novedades sobre tratamientos, cuidados después de cada procedimiento y cómo mantener tu sonrisa sana a largo plazo.',
        // },
    ],
}) => {                             
    const [active, setActive] = useState<any>(null);
    return (
        <section className="py-12 lg:py-[40px] bg-meliora dark:bg-none">
            <div className="container">
                <div className="heading text-center" data-aos="fade-left" data-aos-duration="1000">
                    <h4>
                        Preguntas{''}<span className='!text-secondary'>&nbsp;Frecuentes</span>
                    </h4>
                    <p className="mt-5 text-lg font-bold">¿Tienes dudas? Te ayudamos</p>
                </div>
                <div className="mx-auto lg:w-[730px]">
                    {queries.map((faq: any, i: number) => {
                        return (
                            <div key={faq.id} className="mt-6 border-0 border-b-2 border-gray/20 bg-transparent" data-aos="fade-right" data-aos-duration="1000">
                                <button
                                    type="button"
                                    className="relative !flex w-full items-center justify-between gap-2 py-2.5 text-lg font-bold text-black ltr:text-left rtl:text-right dark:text-white"
                                    onClick={() => setActive(active === i ? null : i)}
                                >
                                    <div>{faq.question}</div>
                                    <div
                                        className={`grid h-6 w-6 flex-shrink-0 place-content-center rounded-full border-2 border-gray text-gray transition ${
                                            active === i ? '!border-black !text-black dark:!border-white dark:!text-white' : ''
                                        }`}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                className={active === i ? 'hidden' : ''}
                                                d="M6.09961 0.500977C6.65189 0.500977 7.09961 0.948692 7.09961 1.50098L7.09961 10.501C7.09961 11.0533 6.65189 11.501 6.09961 11.501H5.89961C5.34732 11.501 4.89961 11.0533 4.89961 10.501L4.89961 1.50098C4.89961 0.948692 5.34732 0.500977 5.89961 0.500977H6.09961Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M0.5 5.90039C0.5 5.34811 0.947715 4.90039 1.5 4.90039H10.5C11.0523 4.90039 11.5 5.34811 11.5 5.90039V6.10039C11.5 6.65268 11.0523 7.10039 10.5 7.10039H1.5C0.947715 7.10039 0.5 6.65268 0.5 6.10039V5.90039Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </div>
                                </button>
                                <AnimateHeight duration={600} height={active === i ? 'auto' : 0}>
                                    <div className="lg:w-4/5">
                                        <p className="px-0 pb-5 pt-0 text-md font-bold leading-[18px] text-gray">{faq.answer}</p>
                                    </div>
                                </AnimateHeight>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Faq;
