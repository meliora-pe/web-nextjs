import Link from 'next/link';
import React from 'react';
import { CtaTag } from './AboveTheFold';

const WidgetCtaBanner = ({ title, cta }: { title: string; cta: CtaTag }) => {
    return (
        <section className="bg-violet-100 py-10 dark:bg-gray-black lg:py-14">
            <div className="container">
                <div className="flex flex-col items-center justify-center gap-7 text-center sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                    <p className="flex-1 text-2xl font-bold text-white md:text-3xl" data-aos="fade-right" data-aos-duration="1000">
                        {title}
                    </p>
                    <Link
                        href={cta.href}
                        className="inline-flex shrink whitespace-nowrap rounded-lg bg-secondary px-8 py-5 font-raleway text-sm font-semibold uppercase text-white hover:bg-secondary/90 hover:text-white"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        {cta.text}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WidgetCtaBanner;
