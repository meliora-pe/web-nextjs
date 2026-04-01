import { locationSvg, phoneSvg } from '../svg';

const globalContent = {
  AboveTheFold: {
    header: 'Cuidado dental pensado para personas como tú',
    title: 'Transmite confianza con una sonrisa bien cuidada',
    subtitle: 'Somos un consultorio dental para profesionales que valoran la salud, la estética y un trabajo bien hecho.',
    image: {
      src: 'landings/global/portada.webp',
      alt: 'atención-paciente-dental',
      title: 'atención-paciente-dental',
    },
    cta: {
      text: 'Agenda tu primera evaluación',
      href: 'https://wa.link/90gr3m',
    }
  },

  dolorYSolucion: {
    title: '¿Hace cuánto no revisas tu salud bucal?',
    subtitle: 'Muchas molestias comienzan sin dolor visible',
    paragraph: 'Problemas dentales como caries, inflamación de encías o desgaste pueden avanzar sin síntomas visibles. Una revisión dental completa permite detectarlos a tiempo y entender cómo está realmente tu salud bucal.',
    title2: 'Una evaluación clara, tranquila y sin compromiso',
    subtitle2: 'Así trabajamos en Meliora Studio Dental',
    paragraph2: 'Realizamos una evaluación integral de tu sonrisa, te explicamos el diagnóstico con apoyo visual y resolvemos todas tus dudas con paciencia. Nuestro objetivo es que entiendas qué está pasando y qué cuidados necesita tu sonrisa.',
    bullets: [
      'Evaluación dental completa y personalizada',
      'Diagnóstico explicado con claridad y apoyo visual',
      'Recomendaciones honestas para cuidar tu salud bucal',
    ]
  },

  beneficios: {
    title: 'Una forma distinta de cuidar tu sonrisa',
    subtitle: 'Confianza que se construye con el tiempo',
    paragraph1: 'Nuestro enfoque combina experiencia clínica, paciencia en la atención y compromiso con resultados bien hechos.',
    bullets: [
      'Ortodoncia, estética y odontología restauradora',
      'Tratamientos conservadores y responsables',
      'Acompañamiento profesional en cada etapa',
    ],
    image: {
      src: 'porque-nos-eligen.webp',
      alt: 'porque-nos-eligen',
      title: 'porque-nos-eligen',
    },
    foot: '* Caso real, paciente eligió blanqueamiento en consultorio'
  },

  beforeAfter: {
    before: {
      src: '/assets/images/before.webp',
      alt: 'before',
      title: 'before',
    },
    after: {
      src: '/assets/images/after.webp',
      alt: 'after',
      title: 'after',
    }
  },

  proceso: {
    title: 'Nuestro proceso de atención',
    subtitle: 'Simple, claro y humano',
    step1: 'Escuchamos y evaluamos',
    step2: 'Analizamos con criterio profesional',
    step3: 'Acompañamos tu cuidado dental',
    paragraph1: 'Nos tomamos el tiempo para entender tus necesidades y resolver tus dudas.',
    paragraph2: 'Evaluamos opciones en ortodoncia, estética o restauración según tu caso.',
    paragraph3: 'Te acompañamos para mantener tu sonrisa sana en el tiempo.',
    cta: 'Descubre cómo es nuestra atención',
  },

  testimonios: {
    title: ['Testimonios de pacientes', 'que confiaron en nuestro trabajo'],
    subtitle: 'Personas que valoraron la paciencia, el trato y la dedicación.',
  },

  racional: {
    subtitle: 'Elegir bien también es parte del cuidado',
    title: 'Una sonrisa se cuida con información y confianza',
    paragraph: 'Tomar decisiones sobre tu salud bucal requiere tiempo, información clara y un equipo que trabaje con honestidad.',
    bullets: [
      'Evaluaciones profesionales antes de tratar',
      'Recomendaciones responsables y personalizadas',
      'Enfoque en salud, estética y bienestar',
    ],
  },

  contacto: {
    title: 'Estamos cerca de ti',
    subtitle: 'En Surco: Viñedos, Jazmines, San Roque, Sagitario, Caminos del Inca y alrededores',
    paragraph: 'Nos encontramos en Surco y estamos listos para orientarte. Escríbenos por WhatsApp y conoce más sobre nuestro enfoque.',
    cta: 'Hablar con nuestro equipo',
    phone: {
      href: 'tel:+51969174019',
      svg: phoneSvg,
      color: 'text-secondary',
      title: 'Llámanos',
    },
    location: {
      href: 'https://maps.google.com/maps/dir//Meliora+Studio+Dental+R2X6%2B73G+Lima+15054/@-12.1519314,-76.9897075,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x9105b90829b6e561:0xd2160ffba0651ce0',
      targetRel: true,
      svg: locationSvg,
      color: 'text-secondary',
      title: 'Dirección',
      subtitle: 'Av. Los Próceres Mz. B Lt. 16 - Urb. Sánchez Cerro - Surco',
    },
  },

  ctaFinal: {
    title: 'Cuidar tu sonrisa empieza con confianza',
    subtitle: 'Agenda, visítanos y decide con tranquilidad.',
  },

  terms: {
    title: '(*) Aplican Términos y condiciones',
    list:
      [
        'La información brindada en esta página tiene fines informativos. Todo tratamiento odontológico debe realizarse previa evaluación profesional.',
        'En Meliora Studio Dental priorizamos la salud bucal, la atención paciente y el trabajo clínico responsable.',
        'La evaluación inicial permite conocer el estado bucal y las alternativas de tratamiento disponibles.',
        'Promoción válida hasta el 30 de mayo de 2026 o hasta agotar stock de 300 evaluaciones.'
      ]
  }
}

export default globalContent;

