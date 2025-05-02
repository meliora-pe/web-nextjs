import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import TitlePage from '../components/TitlePage';
import WidgetTopBackground from '../components/WidgetTopBackground';
import { privacyPolicy } from '../data/content';
import Head from 'next/head';

const { title, sections } = privacyPolicy;

export const metadata = {
    robots: {
        index: false,
        follow: true,
    },
};

const Privacypolicy = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="robots" content="noindex,follow" />
            </Head>

            <WidgetTopBackground props={sections.topArea} />

            <div className="py-14 dark:bg-gray-dark md:py-[100px]">
                <div className="container">
                    <div className="pb-12">
                        <p className="pb-5 text-lg font-medium">
                            En Meliora Studio Dental, accesible desde www.meliora.pe, una de nuestras principales prioridades es la privacidad de nuestros
                            visitantes. Este documento de Política de Privacidad contiene los tipos de información que se recopilan y registran en Meliora
                            Studio Dental y cómo la utilizamos.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Si tienes preguntas adicionales o necesitas más información sobre nuestra Política de Privacidad, no dudes en ponerte en contacto
                            con nosotros a través del correo electrónico hola@meliora.pe
                        </p>
                        <p className="text-lg font-medium">
                            Esta política de privacidad se aplica únicamente a nuestras actividades en línea y es válida para los visitantes de nuestro sitio
                            web con respecto a la información que comparten y/o recopilan en www.meliora.pe. Esta política no es aplicable a ninguna información
                            recopilada fuera de línea o a través de canales distintos a este sitio web.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Consentimiento</h4>
                        <p className="pb-5 text-lg font-medium">
                            Al utilizar nuestro sitio web, aceptas nuestra Política de Privacidad y estás de acuerdo con sus términos.
                        </p>
                        <p className="text-lg font-medium">
                            La mayoría de los sitios web interactivos utilizan cookies para recuperar los datos del usuario en cada visita. Nuestro sitio
                            utiliza cookies para habilitar ciertas funciones y hacer más fácil la experiencia de los visitantes. Algunos de nuestros socios
                            afiliados/anunciantes también pueden usar cookies.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Información que recopilamos</h4>
                        <p className="pb-5 text-lg font-medium">
                            La información personal que se te solicita proporcionar y las razones por las que se solicita, se te aclararán en el momento en que
                            te pidamos que proporciones dicha información.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Si nos contactas directamente, podemos recibir información adicional sobre ti, como tu nombre, dirección de correo electrónico,
                            número de teléfono, el contenido del mensaje y/o los archivos adjuntos que nos envíes, y cualquier otra información que elijas
                            proporcionar.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Cuando te registras para una cuenta, es posible que solicitemos información de contacto, incluyendo elementos como nombre, nombre de
                            la empresa, dirección, dirección de correo electrónico y número de teléfono.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Cómo utilizamos su información</h4>
                        <p className="pb-5 text-lg font-medium">Utilizamos la información que recopilamos de diversas maneras, entre ellas:</p>
                        <ul className="text-lg font-medium">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Proporcionar, operar y mantener nuestro sitio web
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Mejorar, personalizar y expandir nuestro sitio web
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Comprender y analizar cómo utiliza nuestro sitio web
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Desarrollar nuevos productos, servicios, características y funcionalidades
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Comunicarnos con usted, ya sea directamente o a través de uno de nuestros socios, incluso para el servicio de atención al
                                cliente, para brindarle actualizaciones
                            </li>
                        </ul>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Enlaces a otros sitios/aplicaciones</h4>
                        <p className="text-lg font-medium">
                            Nuestro sitio web tiene enlaces a otros sitios web/sitios web que pueden recopilar información personal identificable sobre usted.
                            Meliora Studio Dental no es responsable de las prácticas de privacidad ni del contenido de esos sitios web/sitios web vinculados.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Precauciones de Seguridad</h4>
                        <p className="text-lg font-medium">
                            Nuestro sitio web cuenta con estrictas medidas de seguridad para proteger la pérdida, el mal uso y la alteración de la información
                            bajo nuestro control. Siempre que cambie o acceda a la información de su cuenta, le ofrecemos el uso de un servidor seguro. Una vez
                            que su información está en nuestro poder, cumplimos con estrictas pautas de seguridad, protegiéndola contra el acceso no autorizado.
                        </p>
                    </div>
                    <div>
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Opción/exclusión voluntaria</h4>
                        <p className="text-lg font-medium">
                            Ofrecemos a todos los usuarios la oportunidad de optar por no recibir comunicaciones no esenciales (promocionales, relacionadas con
                            marketing) de parte nuestra en nombre de nuestros socios, y de parte nuestra en general, después de configurar una cuenta. Si desea
                            eliminar su información de contacto de todas nuestras listas y boletines informativos, visite la página de cancelación de
                            suscripción.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacypolicy;
