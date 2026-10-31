import { emailSvg, locationSvg, phoneSvg } from '../svg';

const adContent = {
  AboveTheFold: {
    header: 'Resultados visibles desde la primera sesión',
    title: 'Blanqueamiento dental profesional en Surco *',
    subtitle: 'Recupera el tono natural de tu sonrisa sin dañar el esmalte.',
    image: {
      src: 'landings/blanqueamiento-dental.jpg',
      alt: 'blanqueamiento-dental',
      title: 'blanqueamiento-dental',
    },
    cta: {
      text: 'Agenda por WhatsApp',
      href: 'https://wa.link/f7jrvw',
    }
  },
  dolorYSolucion: {
    title: '¿Dientes amarillos u opacos?',
    subtitle: 'Un problema muy común',
    paragraph: 'Manchas por café, té, vino o tabaco, dientes amarillos que no se arreglan con “cepillado fuerte”. Si tu sonrisa se ve apagada, esto te interesa',
    subtitle2: 'Una solución pensada para tu sonrisa',
    title2: 'Aclara el tono de tus dientes de forma segura y natural',
    paragraph2: 'Evaluamos el tono de tus dientes, el estado de tus encías y tu sensibilidad para recomendarte el tipo de blanqueamiento más adecuado y conseguir un resultado natural, cuidando tu esmalte durante todo el proceso.',
    bullets: [
      'Resultados visibles desde la primera sesión, según cada caso',
      'Opciones en consultorio, en casa o combinadas según tus necesidades',
      'Control de sensibilidad antes, durante y después del tratamiento',
    ]
  },
  benefits: {
    subtitle: 'Más que aclarar tus dientes',
    title: '¿Por qué elegir nuestro blanqueamiento dental?',
    paragraph1: 'Buscamos mejorar el tono de tu sonrisa sin sacrificar naturalidad ni comodidad, con un tratamiento profesional supervisado de principio a fin.',
    bullets: [
      'Protocolos profesionales orientados a cuidar el esmalte',
      'Manejo de la sensibilidad durante el tratamiento',
      'Resultados naturales, evitando el efecto de "blanco artificial"',
    ],
    image: {
      src: 'porque-nos-eligen.webp',
      alt: 'porque-nos-eligen',
      title: 'porque-nos-eligen',
    }
  },
  beforeAfter: {
    title: 'Resultados que se ven, sonrisas que se sienten naturales',
    text: 'Cada sonrisa responde de manera diferente. Este es el resultado de un caso real tratado en Meliora, donde buscamos mejorar el tono de los dientes manteniendo una apariencia natural y armónica.',
    case: 'Caso real de blanqueamiento realizado en consultorio',
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
  meliora: {
    title: 'Un proceso simple y efectivo en 3 pasos',
    subtitle: '¿Cómo funciona?',
    step1: 'Evaluación y diagnóstico',
    step2: 'Blanqueamiento en consultorio o en casa',
    step3: 'Resultados y seguimiento',
    paragraph1: 'Primero revisamos tus encías y también el tono y los resultados que esperas',
    paragraph2: 'Elegimos el método ideal según tu objetivo y tiempo',
    paragraph3: 'Te damos indicaciones para prolongar el resultado por más tiempo',
    cta: '¡Agénda ahora y reserva un turno!',
  },
  testimonials: {
    title: ['Experiencias reales,', 'contadas por nuestros pacientes'],

    subtitle: 'Conoce cómo fue su experiencia en Meliora y qué significó para ellos volver a sonreír con confianza.',
  },
  offer: {
    subtitle: 'Beneficio especial por tiempo limitado',

    title: 'Obtén 10% de descuento ahora mismo',

    paragraph: 'Agenda tu evaluación y descubre qué opción de blanqueamiento es la más adecuada para ti. Si decides realizar el tratamiento, accede al descuento de esta campaña.',

    bullets: [
      'Evaluación personalizada antes de iniciar el tratamiento',
      '10% de descuento en tu blanqueamiento dental',
      'Recomendaciones profesionales para prolongar tus resultados',
    ],
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
    social: {
      href: 'mailto:hola@meliora.pe',
      svg: emailSvg,
      color: 'text-primary',
      title: 'Envía un correo',
    },
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4179093162934!2d-76.99228778891906!3d-12.151926143818944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b90829b6e561%3A0xd2160ffba0651ce0!2sConsultorio%20odontol%C3%B3gico%20Asiri!5e0!3m2!1ses-419!2spe!4v1731362600461!5m2!1ses-419!2spe',
  },
  ctaFinal: {
    title: 'Tu nueva sonrisa empieza con una cita',
    subtitle: 'Agenda tu evaluación por WhatsApp y aprovecha el 10% de descuento en tu blanqueamiento dental.',
    button: 'Quiero agendar mi evaluación',
  },
  terms: [
    'Elegir un blanqueamiento dental es una decisión que debe basarse en resultados comprobados y en la seguridad del procedimiento. En Meliora Studio Dental, ofrecemos tres opciones: blanqueamiento en consultorio, con resultados visibles desde la primera sesión y un proceso de una semana a semana y media; blanqueamiento en casa, que permite mayor flexibilidad y alcanza su efecto máximo en aproximadamente tres semanas y el mixto. Nuestros métodos están diseñados para lograr un blanqueamiento uniforme y duradero.',
    'Es común preguntarse si el blanqueamiento puede causar molestias. Algunos pacientes experimentan sensibilidad dental temporal, pero en nuestro protocolo incluimos gel desensibilizante para minimizar cualquier incomodidad. Además, la técnica utilizada protege el esmalte y evita daños en la estructura dental, garantizando un tratamiento seguro y efectivo.',
    'Para obtener los mejores resultados, es importante realizar el tratamiento sobre dientes y encías sanos. Por eso, antes de iniciar, realizamos una evaluación para determinar si eres candidato ideal y cuál opción es mejor para ti. Si buscas una forma segura y efectiva de mejorar tu sonrisa, esta es una excelente oportunidad para hacerlo.',
    'Promoción válida hasta el 31 de diciembre de 2026 o hasta agotar stock de 300 evaluaciones.'
  ]
}

export default adContent;

