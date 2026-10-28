import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: '¿Cuánto cuesta un blanqueamiento dental en Surco? | Meliora',
    description: 'Conoce cuánto cuesta un blanqueamiento dental en Surco, cómo es el procedimiento y cuándo es recomendable realizarla.',
};

export default function BlanqueamientoDentalPage() {
    return (
        <main className="mx-auto max-w-3xl px-6 py-12">
            <article>
                <header className="mb-10">
                    <p className="text-muted-foreground mb-3 text-sm">Salud dental · 28 de octubre de 2026</p>

                    <h1 className="text-4xl font-semibold tracking-tight">¿Cuánto cuesta una limpieza dental en Lima?</h1>

                    <p className="text-muted-foreground mt-4 text-lg">
                        El precio de una limpieza dental puede variar según el estado de salud bucal del paciente y el procedimiento necesario.
                    </p>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">¿Qué incluye una limpieza dental?</h2>

                    <p>
                        Una limpieza dental profesional permite retirar placa bacteriana y sarro acumulados en los dientes que no pueden eliminarse
                        completamente mediante el cepillado habitual.
                    </p>
                </section>

                <section className="mt-10 space-y-4">
                    <h2 className="text-2xl font-semibold">¿Cuánto cuesta en Lima?</h2>

                    <p>
                        El precio dependerá del diagnóstico y de las condiciones particulares de cada paciente. Antes de iniciar el tratamiento es recomendable
                        realizar una evaluación odontológica.
                    </p>
                </section>

                <section className="mt-10 space-y-4">
                    <h2 className="text-2xl font-semibold">¿Cada cuánto tiempo debería realizarse?</h2>

                    <p>
                        La frecuencia debe determinarse según la salud bucal y los factores de riesgo de cada paciente. El odontólogo puede recomendar el
                        intervalo adecuado después de una evaluación.
                    </p>
                </section>

                <section className="mt-12 rounded-xl border p-6">
                    <h2 className="text-xl font-semibold">¿Necesitas una evaluación?</h2>

                    <p className="text-muted-foreground mt-2">Agenda una cita en Meliora Studio Dental y recibe una evaluación personalizada.</p>

                    <a href="/contacto" className="text-primary-foreground mt-5 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium">
                        Reservar una cita
                    </a>
                </section>
            </article>
        </main>
    );
}
