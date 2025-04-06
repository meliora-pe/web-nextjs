import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import TitlePage from '../components/TitlePage';
import WidgetTopBackground from '../components/WidgetTopBackground';
import { termsConditions } from '../data/content';

const { title, sections } = termsConditions;

const Termsandcondition = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    return (
        <div>
            <TitlePage title={title} />

            <WidgetTopBackground props={sections.topArea} />

            <div className="py-14 md:py-[100px] dark:bg-gray-dark">
                <div className="container">
                    <div className="pb-12">
                        <p className="pb-5 text-lg font-medium">
                            Este documento es un registro electrónico en términos de la Ley de Tecnología de la Información de 2000 y las normas que la rigen,
                            según corresponda, y las disposiciones modificadas relativas a los registros electrónicos en varios estatutos, según las
                            modificaciones de la Ley de Tecnología de la Información de 2000. Este registro electrónico es generado por un sistema informático y
                            no requiere ninguna firma física o digital.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Este documento se publica de conformidad con las disposiciones de la Regla 3 (1) de las Normas de Tecnología de la Información
                            (Directrices para intermediarios), de 2011, que exigen la publicación de las normas y reglamentos, la política de privacidad y los
                            Términos de uso para el acceso o uso de los sitios web Meliora.pe
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Este sitio web, incluidos todos los materiales presentes (excluidos los materiales de terceros aplicables), es propiedad de Meliora
                            Studio Dental y está protegido por derechos de autor y leyes de derechos de autor y disposiciones de tratados de todo el mundo. Por
                            la presente, usted acepta cumplir con todas las leyes de derechos de autor de todo el mundo en su uso de este sitio web y evitar
                            cualquier copia no autorizada de los materiales.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Al acceder a este sitio web, asumimos que acepta estos términos y condiciones. No continúe utilizando Meliora.pe si no acepta todos
                            los términos y condiciones establecidos en esta página.
                        </p>
                        <p className="text-lg font-medium">
                            La siguiente terminología se aplica a estos Términos y condiciones, Declaración de privacidad y Aviso de exención de responsabilidad
                            y todos los Acuerdos: “Cliente”, “Usted” y “Su” se refieren a usted, la persona que inicia sesión en este sitio web y cumple con los
                            términos y condiciones de la Compañía. “La Compañía”, “Nosotros”, “Nosotros”, “Nuestro” y “Nos”, se refieren a nuestra Compañía.
                            “Parte”, “Partes” o “Nosotros”, se refieren tanto al Cliente como a nosotros mismos.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Cookies</h4>
                        <p className="pb-5 text-lg font-medium">
                            Utilizamos cookies. Al acceder a Nombre del sitio web, usted acepta utilizar cookies de acuerdo con la Política de privacidad de
                            Nombre de la empresa.
                        </p>
                        <p className="text-lg font-medium">
                            La mayoría de los sitios web interactivos utilizan cookies para permitirnos recuperar los detalles del usuario para cada visita.
                            Nuestro sitio web utiliza cookies para habilitar la funcionalidad de ciertas áreas y facilitar la visita a nuestro sitio web.
                            Algunos de nuestros socios afiliados/publicitarios también pueden utilizar cookies.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Licencia</h4>
                        <p className="pb-5 text-lg font-medium">
                            A menos que se indique lo contrario, Nombre de la empresa y/o sus licenciantes poseen los derechos de propiedad intelectual de todo
                            el material de Nombre del sitio web. Todos los derechos de propiedad intelectual están reservados. Puede acceder a este material
                            desde Nombre del sitio web para su uso personal sujeto a las restricciones establecidas en estos términos y condiciones.
                        </p>
                        <h6 className="pb-2 font-semibold text-black">Usted no debe:</h6>
                        <ul className="pb-5 text-lg font-medium">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Republicar material de Meliora.pe
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Vender, alquilar o sublicenciar material de Meliora.pe
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Reproducir, duplicar o copiar material de Meliora.pe
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Redistribuir contenido de Meliora.pe
                            </li>
                        </ul>
                        <p className="pb-5 text-lg font-medium">Este Acuerdo comenzará a regir a partir de la fecha del presente.</p>
                        <p className="pb-5 text-lg font-medium">
                            Algunas partes de este sitio web ofrecen a los usuarios la oportunidad de publicar e intercambiar opiniones e información en ciertas
                            áreas del sitio web. Nombre de la empresa no filtra, edita, publica ni revisa los comentarios antes de su aparición en el sitio web.
                            Los comentarios no reflejan las opiniones y puntos de vista de Nombre de la empresa, sus agentes y/o afiliados. Los comentarios
                            reflejan las opiniones y puntos de vista de la persona que publica sus opiniones y puntos de vista.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Meliora Studio Dental se reserva el derecho de supervisar todos los comentarios y eliminar cualquier comentario que pueda
                            considerarse inapropiado, ofensivo o que infrinja estos Términos y condiciones.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Meliora Studio Dental se reserva el derecho de supervisar todos los comentarios y eliminar cualquier comentario que pueda
                            considerarse inapropiado, ofensivo o que infrinja estos Términos y condiciones.
                        </p>
                        <h6 className="pb-2 font-semibold text-black">Usted garantiza y declara que:</h6>
                        <ul className="pb-5 text-lg font-medium ltr:pl-1 rtl:pr-1">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Tiene derecho a publicar los comentarios en nuestro sitio web y tiene todas las licencias y los consentimientos necesarios para
                                hacerlo
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Los comentarios no invaden ningún derecho de propiedad intelectual, incluidos, entre otros, los derechos de autor, patentes o
                                marcas comerciales de ningún tercero
                            </li>
                        </ul>
                        <ul className="pb-5 text-lg font-medium ltr:pl-1 rtl:pr-1">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Los comentarios no contienen ningún material difamatorio, calumnioso, ofensivo, indecente o ilegal que sea una invasión de la
                                privacidad.
                            </li>
                        </ul>
                        <p className="text-lg font-medium">
                            Por la presente, usted otorga a Meliora Studio Dental una licencia no exclusiva para usar, reproducir, editar y autorizar a otros a
                            usar, reproducir y editar cualquiera de sus comentarios en todas y cada una de las formas, formatos o medios.
                        </p>
                    </div>
                    <div>
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Hipervínculos a nuestro contenido</h4>
                        <p className="pb-5 text-lg font-medium">
                            Las siguientes organizaciones pueden vincularse a nuestro sitio web sin aprobación previa por escrito:
                        </p>
                        <ul className="pb-5 text-lg font-medium">
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Agencias gubernamentales
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Motores de búsqueda
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Organizaciones de noticias
                            </li>
                            <li className="relative before:absolute before:top-3 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gray ltr:pl-4 ltr:before:left-0 rtl:pr-4 rtl:before:right-0">
                                Los distribuidores de directorios en línea pueden vincularse a nuestro sitio web de la misma manera que hacen hipervínculos a
                                los sitios web de otras empresas listadas; y empresas acreditadas en todo el sistema, excepto organizaciones sin fines de lucro,
                                centros comerciales de beneficencia y grupos de recaudación de fondos de beneficencia
                                <p className="text-lg font-medium">que no pueden incluir hipervínculos a nuestro sitio web.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Termsandcondition;
