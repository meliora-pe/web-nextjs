import TitlePage from '../components/TitlePage';
import WidgetTopBackground from '../components/WidgetTopBackground';
import { cookies } from '../data/content';

const { title, sections } = cookies;

export const metadata = {
    robots: {
        index: false,
        follow: true,
    },
};

const Cookies = () => {
    return (
        <div>
            <TitlePage title={title} />

            <WidgetTopBackground props={sections.topArea} />

            <div className="py-14 md:py-[100px]">
                <div className="container">
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Política de Cookies</h4>
                        <p className="pb-5 text-lg font-medium">
                            En Meliora.pe, utilizamos cookies para mejorar tu experiencia de navegación y analizar el uso de nuestro sitio web. Al continuar
                            navegando, aceptas el uso de cookies según los términos descritos en esta política.
                        </p>
                        <p className="pb-5 text-lg font-medium">
                            Las cookies son pequeños archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Estas cookies permiten
                            al sitio web reconocer tu dispositivo y guardar ciertas informaciones relacionadas con tu interacción en la web.
                        </p>
                        <p className="text-lg font-medium">
                            Utilizamos cookies propias y de terceros, incluyendo cookies de Google Analytics, para recopilar información de manera anónima sobre
                            cómo interactúas con nuestro sitio. Esto incluye datos como las páginas que visitas, el tiempo que permaneces en ellas, y cómo
                            llegaste a nuestro sitio.
                        </p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">Consentimiento</h4>
                        <p className="pb-5 text-lg font-medium">Aceptación de nuestra política de cookies y recopilación de datos</p>
                        <p className="text-lg font-medium">Recopilamos información como:</p>
                        <ul className="text-lg font-medium">
                            <li>Tu dirección IP (anonimizada para garantizar tu privacidad).</li>
                            <li>El tipo de navegador que utilizas.</li>
                            <li>La fecha y hora de tus visitas.</li>
                            <li>La duración de tus sesiones.</li>
                            <li>Las páginas que visitas.</li>
                        </ul>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">¿Para qué utilizamos esta información?</h4>
                        <p className="pb-5 text-lg font-medium">Para comprender mejor las preferencias de nuestros usuarios.</p>
                        <p className="pb-5 text-lg font-medium">Para mejorar el diseño y contenido del sitio web.</p>
                        <p className="pb-5 text-lg font-medium">Para optimizar campañas de marketing basadas en el comportamiento de los usuarios.</p>
                    </div>
                    <div className="pb-12">
                        <h4 className="pb-5 text-xl font-bold text-black dark:text-white sm:text-2xl">¿Cómo gestionar las cookies?</h4>
                        <p className="pb-5 text-lg font-medium">
                            Puedes administrar o desactivar las cookies desde la configuración de tu navegador. Ten en cuenta que al desactivar las cookies,
                            algunas funcionalidades de nuestro sitio web podrían verse afectadas. Además, si deseas optar por no ser rastreado por Google
                            Analytics, puedes instalar el complemento de inhabilitación para navegadores proporcionado por Google en la página de Google.
                        </p>
                    </div>
                    <div className="pb-12">
                        <p className="pb-5 text-lg font-medium">
                            Para más detalles sobre cómo Google Analytics gestiona tus datos, consulta su política de privacidad:
                            https://policies.google.com/privacy.
                        </p>
                    </div>
                    <div className="pb-12">
                        <p className="pb-5 text-lg font-medium">Fecha de última actualización: 1 de diciembre de 2024.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cookies;
