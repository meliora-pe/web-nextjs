import { emailSvg, locationSvg, phoneSvg, safetySvg } from './svg';

const home = {
    title: 'Mejora tu sonrisa, mejora tu salud | Meliora Studio Dental',
    sections: {
        aboveTheFold: {
            header: 'Meliora Studio Dental',
            title: 'Mejora tu sonrisa, mejora tu salud',
            subtitle: 'Recupera tu confianza con un equipo especializado que cuida cada detalle de tu salud bucal',
            image: {
                src: 'woman-at-dentist-meliora.webp',
                alt: 'woman-at-dentist',
                title: 'woman-at-dentist',
            },
            cta: {
                text: 'RESERVA UNA CITA',
                href: '/appointment',
                tagCode: 'cta-appointment',
            },
        },
        meliora: {
            definition: {
                title: 'Preservamos tu salud con atención a los detalles y trato amable',
                subtitle: '¡Bienvenido! Somos Meliora Studio Dental',
                paragraph1:
                    'Somos un equipo de profesionales especializados en odontología conservadora, comprometidos en brindarte una atención personalizada y de calidad para que recuperes tu salud bucal.',
                paragraph2:
                    'Nuestro enfoque es preservar la estructura natural de tus dientes con técnicas menos invasivas, priorizando la prevención, restauración y resultados duraderos.',
                button: {
                    href: '/about-us',
                    text: 'Leer más',
                },
            },
            images: {
                image1: {
                    src: 'radiografia.webp',
                    alt: 'radiografia',
                    title: 'radiografia',
                },
                image2: {
                    src: 'mujer-sonriente.webp',
                    alt: 'mujer-sonriente',
                    title: 'mujer-sonriente',
                },
            },
        },
        whyUs: {
            title: '¿Por qué nos eligen?',
            subtitle: 'Cada detalle cuenta',
            paragraph1: 'Entendemos que tu sonrisa es clave para tu confianza. Por eso, ofrecemos un servicio integral y multidisciplinario.',
            paragraph2: '',
            bullets: ['Confianza', 'Honestidad', 'Compromiso', 'Profesionalismo', 'Experiencia', 'Amabilidad', 'Empatía'],
            image: {
                src: 'porque-nos-eligen.webp',
                alt: 'porque-nos-eligen',
                title: 'porque-nos-eligen',
            },
        },
        testimonials: {
            title: [
                '¿Qué dicen acerca de',
                'nosotros?',
                // 'sobre nosotros?'
            ],
            subtitle: 'Con base en las opiniones de perfiles y redes sociales',
        },
        services: {
            title: 'Nuestros Servicios',
            subtitle: 'Estos son algunos de nuestros servicios',
            list: [
                {
                    title: 'Blanqueamiento dental',
                    subtitle: 'Sonrisas radiantes',
                    href: '/services',
                    image: {
                        src: 'blanqueamiento.webp',
                        alt: 'blanqueamiento',
                        title: 'blanqueamiento',
                    },
                },
                {
                    title: 'Extracción de terceras molares',
                    subtitle: 'Procedimiento seguro y eficaz',
                    href: '/services',
                    image: {
                        src: 'extracciones.webp',
                        alt: 'extracción',
                        title: 'extracción',
                    },
                },
                {
                    title: 'Rehabilitación e implantes',
                    subtitle: 'Resultados duraderos',
                    href: '/services',
                    image: {
                        src: 'carillas.webp',
                        alt: 'carillas',
                        title: 'carillas',
                    },
                },
                {
                    title: 'Ortodoncia',
                    subtitle: 'Tu sonrisa nuestra prioridad',
                    href: '/services',
                    image: {
                        src: 'ortodoncia.webp',
                        alt: 'ortodoncia',
                        title: 'ortodoncia',
                    },
                },
            ],
        },
        beforeAfter: {
            title: 'Eficacia y calidad',
            subtitle: 'Resultados reales',
            case: {
                title: 'Blanqueamiento dental',
                text: 'Realzamos el color de tus dientes con técnicas seguras y personalizadas. Recupera la confianza en tu sonrisa con un tratamiento efectivo, mínimamente invasivo y diseñado para resaltar tu belleza natural.',
                before: {
                    src: '/assets/images/before.webp',
                    alt: 'before',
                    title: 'before',
                },
                after: {
                    src: '/assets/images/after.webp',
                    alt: 'after',
                    title: 'after',
                },
                cta: { text: 'VER MÁS', href: '/services' },
            },
        },
        contact: {
            title: 'Contáctanos',
            subtitle: '¿Te quedan dudas? ¡Estamos aquí para ayudarte!',
            phone: {
                href: 'tel:+51969174019',
                svg: phoneSvg,
                color: 'text-secondary',
                title: 'Llámanos',
            },
            email: {
                href: 'mailto:hola@meliora.pe',
                svg: emailSvg,
                color: 'text-primary',
                title: 'Envía un correo',
            },
            location: {
                href: 'https://maps.google.com/maps/dir//Meliora+Studio+Dental+R2X6%2B73G+Lima+15054/@-12.1519314,-76.9897075,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b90829b6e561:0xd2160ffba0651ce0',
                targetRel: true,
                svg: locationSvg,
                color: 'text-secondary',
                title: 'Dirección',
                subtitle: 'Av. Los Próceres Mz. B Lt. 16 - Urb. Sánchez Cerro - Surco',
            },
            mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4179093162934!2d-76.99228778891906!3d-12.151926143818944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90829b6e561%3A0xd2160ffba0651ce0!2sConsultorio%20odontol%C3%B3gico%20Asiri!5e0!3m2!1ses-419!2spe!4v1731362600461!5m2!1ses-419!2spe',
        },
    },
};

const aboutUs = {
    title: 'Quienes somos | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Quienes somos',
            subtitle: '¡Bienvenido a Meliora Studio Dental!',
            illustration: {
                src: '/assets/images/Isotipo.png',
                title: 'isotipo',
                alt: 'isotipo',
            },
        },
        ourStrongness: {
            image1: {
                src: 'paciente-mujer-sonrie-dentista-2.webp',
                alt: 'paciente-mujer-sonrie-dentista-2',
                title: 'paciente-mujer-sonrie-dentista-2',
            },
            image2: {
                src: 'paciente-mujer-sonrie-dentista-1.webp',
                alt: 'paciente-mujer-sonrie-dentista-1',
                title: 'paciente-mujer-sonrie-dentista-1',
            },
        },
        howWeWork: {
            title: 'Odontología conservadora',
            subtitle: 'Cómo trabajamos',
            paragraph1:
                'Se busca preservar la estructura natural de tus dientes con técnicas menos invasivas, priorizando la prevención, restauración y resultados duraderos.',
            paragraph2: 'Nuestro equipo multidisciplinario está comprometido en proteger tu sonrisa con soluciones personalizadas y eficaces, garantizando:',
            bullets: ['Preservación', 'Estética', 'Durabilidad', 'Naturalidad'],
            image: {
                src: 'odontologia-conservadora.webp',
                alt: 'odontologia-conservadora',
                title: 'odontologia-conservadora',
            },
        },
        payments: {
            title: 'ACEPTAMOS',
            list: [
                { src: 'plin.png', alt: 'plin', title: 'plin' },
                { src: 'izipay.png', alt: 'izipay', title: 'izipay' },
                { src: 'yape.png', alt: 'yape', title: 'yape' },
                { src: 'visa.png', alt: 'visa', title: 'visa' },
                { src: 'mastercard.png', alt: 'mastercard', title: 'mastercard' },
                { src: 'american-express.png', alt: 'american-express', title: 'american-express' },
            ],
        },
    },
};

const services = {
    title: 'Servicios | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Servicios',
            subtitle: 'Trato amable y personalizado',
            illustration: {
                src: '/assets/images/home-banner-icon.svg',
                alt: 'home-banner-icon',
                title: 'home-banner-icon',
            },
        },
        services: {
            title1: 'Nuestros',
            title2: ' Tratamientos',
            subtitle: 'Odontología estética y restauradora',
            list: [
                {
                    title: 'Blanqueamiento dental',
                    subtitle: 'Devuelve el brillo natural a tu sonrisa eliminando manchas y oscurecimientos',
                    image: { src: 'blanqueamiento.webp', alt: 'blanqueamiento', title: 'blanqueamiento' },
                },
                {
                    title: 'Implantes y carillas',
                    subtitle: 'Reemplaza dientes perdidos o mejora su forma recuperando tu confianza',
                    image: { src: 'carillas.webp', alt: 'carillas', title: 'carillas' },
                },
                {
                    title: 'Ortodoncia',
                    subtitle: 'Corrige la alineación dental y mejora tu mordida con un mejor equilibrio funcional',
                    image: { src: 'ortodoncia.webp', alt: 'ortodoncia', title: 'ortodoncia' },
                },
                {
                    title: 'Ortopedia dental',
                    subtitle: 'Corrige la anatomía esquelética maxilar y malposiciones dentales en niños',
                    image: { src: 'ortopedia-dental.webp', alt: 'ortopedia-dental', title: 'ortopedia-dental' },
                },
                {
                    title: 'Profilaxis',
                    subtitle: 'Una limpieza profesional para eliminar placa, sarro y mantenerte saludable',
                    image: { src: 'profilaxis.webp', alt: 'profilaxis', title: 'profilaxis' },
                },
                {
                    title: 'Endodoncia',
                    subtitle: 'Elimina infecciones internas del diente para preservar su estructura natural',
                    image: { src: 'endodoncia.webp', alt: 'endodoncia', title: 'endodoncia' },
                },
                {
                    title: 'Diseño de sonrisa',
                    subtitle: 'Transforma tu sonrisa con un enfoque estético que resalta tu belleza natural',
                    image: { src: 'diseno-sonrisa.webp', alt: 'diseno-sonrisa', title: 'diseno-sonrisa' },
                },
                {
                    title: 'Prótesis dental',
                    subtitle: 'Reemplaza piezas dentales faltantes para que recuperes tu capacidad masticatoria',
                    image: { src: 'protesis.webp', alt: 'protesis', title: 'protesis' },
                },
                {
                    title: 'Extracción tercera molar',
                    subtitle: 'Elimina molestias y previene problemas con un procedimiento seguro',
                    image: { src: 'extracciones.webp', alt: 'extracciones', title: 'extracciones' },
                },
            ],
        },
        beforeAfter: {
            title: 'Blanqueamiento dental',
            text: 'Realzamos el color de tus dientes con técnicas seguras y personalizadas. Recupera la confianza en tu sonrisa con un tratamiento efectivo, mínimamente invasivo y diseñado para resaltar tu belleza natural.',
            before: {
                src: '/assets/images/before.webp',
                alt: 'before',
                title: 'before',
            },
            after: {
                src: '/assets/images/after.webp',
                alt: 'after',
                title: 'after',
            },
        },
        ctaBanner: {
            title: 'Mejora tu confianza con una sonrisa saludable y radiante',
            cta: { href: '/appointment', text: 'Agenda tu primera cita' },
        },
    },
};

const appointment = {
    title: 'Reservas | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Reserva una cita',
            subtitle: 'Desde la comodidad de tu casa',
            illustration: {
                src: '/assets/images/form-dark-img.svg',
                title: 'form-dark-img',
                alt: 'form-dark-img',
            },
        },
        reserveNow: {
            image: {
                src: 'pareja-sonriente.webp',
                alt: 'pareja-sonriente',
                title: 'pareja-sonriente',
            },
            title: 'Transforma tu sonrisa, comienza hoy',
            subtitle: 'Da el primer paso, recupera tu salud y confianza',
            paragraph1:
                'En Meliora, cada tratamiento es una experiencia única diseñada para cuidar tu salud bucal y realzar tu sonrisa. Nuestro enfoque integral y conservador garantiza comodidad y resultados duraderos.',
            paragraph2:
                'No dejes para mañana el cambio que puedes comenzar hoy. Nuestro equipo multidisciplinario está listo para brindarte un trato cálido y profesional en cada paso del camino.',
        },
        contact: {
            phone: {
                href: 'tel:+51969174019',
                svg: phoneSvg,
                color: 'text-secondary',
                title: 'Llámanos',
            },
            email: {
                href: 'mailto:hola@meliora.pe',
                svg: emailSvg,
                color: 'text-primary',
                title: 'Envía un correo',
            },
            location: {
                href: 'https://maps.google.com/maps/dir//Meliora+Studio+Dental+R2X6%2B73G+Lima+15054/@-12.1519314,-76.9897075,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b90829b6e561:0xd2160ffba0651ce0',
                targetRel: true,
                svg: locationSvg,
                color: 'text-secondary',
                title: 'Ubicación',
                subtitle: 'Av. Los Próceres Mz. B Lt. 16 - Urb. Sánchez Cerro - Surco',
            },
        },
        ctaBanner: {
            title: 'Conoce nuestro enfoque de odontología conservadora',
            cta: {
                text: 'Leer más',
                href: '/about-us',
            },
        },
    },
};

const contactUs = {
    title: 'Contáctanos | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Contacto',
            subtitle: '¿Tienes preguntas? Te ayudamos',
            illustration: {
                src: '/assets/images/somebody.svg',
                alt: 'somebody',
                title: 'somebody',
            },
        },
        contact: {
            phone: {
                href: 'tel:+51969174019',
                svg: phoneSvg,
                color: 'text-secondary',
                title: 'Llámanos',
                subtitle: '969 174 019',
            },
            email: {
                href: 'mailto:hola@meliora.pe',
                svg: emailSvg,
                color: 'text-primary',
                title: 'Envía un correo',
                subtitle: 'hola@meliora.pe',
            },
            location: {
                href: 'https://maps.google.com/maps/dir//Meliora+Studio+Dental+R2X6%2B73G+Lima+15054/@-12.1519314,-76.9897075,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b90829b6e561:0xd2160ffba0651ce0',
                targetRel: true,
                svg: locationSvg,
                color: 'text-secondary',
                title: 'Ubicación',
                data: 'Av. Los Próceres Mz. B Lt. 16 - Urb. Sánchez Cerro - Surco',
            },
        },
    },
};

const privacyPolicy = {
    title: 'Política de Privacidad | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Política de Privacidad',
            svg: safetySvg,
        },
    },
};

const termsConditions = {
    title: 'Términos y condiciones | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Términos y condiciones',
            svg: safetySvg,
        },
    },
};

const cookies = {
    title: 'Política de Cookies | Meliora Studio Dental',
    sections: {
        topArea: {
            bgImage: 'url(/assets/images/fondo.png)',
            title: 'Política de Cookies',
            svg: safetySvg,
        },
    },
};

export { home, aboutUs, services, appointment, contactUs, privacyPolicy, termsConditions, cookies };
