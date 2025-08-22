import Link from 'next/link';
import React from 'react';

export interface ImageTag {
    src: string;
    alt: string;
    title: string;
}

export interface CtaTag {
    href: string;
    text: string;
    tagCode?: string;
}

export interface FoldSectionProps {
    header: string;
    subtitle: string;
    title: string;
    image: ImageTag;
    cta: CtaTag;
}

const AboveTheFold = ({ props }: { props: FoldSectionProps }) => {
    return (
        <section className="relative">
            <div className="h-[600px] lg:h-[848px]">
                <img
                    src={`/assets/images/${props.image.src}`}
                    className="hidden h-full w-full object-cover md:flex"
                    alt={props.image.alt}
                    title={props.image.title}
                />
                <img
                    src={`/assets/images/woman-at-dentist-meliora-mobile.webp`}
                    className="flex h-full w-full object-cover md:hidden"
                    alt={props.image.alt}
                    title={props.image.title}
                />
            </div>
            <div
                className="z-1 absolute inset-0 opacity-50"
                style={{ background: 'linear-gradient(90deg, rgba(8, 17, 31, 0.95) 57.29%, rgba(8, 17, 31, 0.4) 100%)' }}
            ></div>
            <div className="z-1 absolute inset-x-0 top-1/3 text-white sm:top-[33%]">
                <div className="container">
                    <div className="max-w-[624px] text-center lg:text-left">
                        <h1 className="font-playfair text-xl font-semibold text-[#eb8dc2] sm:text-2xl" hidden>
                            {props.header}
                        </h1>
                        <h2 className="font-playfair text-4xl font-semibold text-primary sm:text-5xl md:text-[70px] md:leading-[72px]">{props.title}</h2>
                        <p className="mt-8 font-montserrat text-lg">{props.subtitle}</p>
                        <button type="button" className="btn mt-10 bg-white px-8 py-[19px] text-black hover:bg-black hover:text-white" id={props.cta.tagCode}>
                            <Link href={props.cta.href} className="font-raleway font-semibold">
                                {props.cta.text}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboveTheFold;
