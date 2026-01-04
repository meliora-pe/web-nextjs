import { emailSvg, locationSvg, phoneSvg } from '../../data/svg';

const adContent = {
  AboveTheFold: {
    header: 'Resultados visibles desde la primera sesión',
    title: 'Blanqueamiento dental personalizado',
    subtitle: 'Descuento exclusivo de 10% y consulta gratis si inicias tu tratamiento. ¡Reserva tu cita ahora y aprovecha el descuento!',
    image: {
      src: 'landings/blanqueamiento-dental.jpg',
      alt: 'blanqueamiento-dental',
      title: 'blanqueamiento-dental',
    },
    cta: {
      text: 'Agenda tu evaluación',
      href: 'https://wa.link/f7jrvw',
    }
  },
  benefits: {
    title: '¿Por qué elegir nuestro tratamiento?',
    subtitle: 'Beneficios clave',
    paragraph1: 'Descubre los beneficios de un tratamiento que no solo mejora tu estética, sino también tu confianza y autoestima.',
    bullets: [
      'Resultados visibles desde la primera sesión',
      'Procedimientos adaptados a tu estilo de vida: en consultorio o en casa',
      'Métodos seguros no invasivos y cómodos',
    ],
    image: {
      src: 'porque-nos-eligen.webp',
      alt: 'porque-nos-eligen',
      title: 'porque-nos-eligen',
    }
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
    cta: { text: 'VER MÁS', href: '/services' },
  },
  meliora: {
    title: 'Un proceso simple y efectivo en 3 pasos',
    subtitle: '¿Cómo funciona?',
    paragraph1: 'Evaluamos tu caso y definimos el mejor tipo de blanqueamiento para ti.',
    paragraph2: 'Elige entre blanqueamiento en consultorio para resultados inmediatos o en casa para mayor comodidad.',
    paragraph3: 'Logra una sonrisa más blanca y radiante que transformará tu confianza.',
    definition: {
      button: {
        href: '/about-us',
        text: 'Reserva tu consulta gratis',
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
  testimonials: {
    title: ['Testimonios y opiniones', 'reales'],
    subtitle: 'Ellos ya transformaron sus sonrisas, ¡tú también puedes hacerlo!',
  },
  feedbacks: [
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
        title: 'Dirección',
        subtitle: 'Av. Los Próceres Mz. B Lt. 16 - Urb. Sánchez Cerro - Surco',
      },
    }
  }
}

export default adContent;

