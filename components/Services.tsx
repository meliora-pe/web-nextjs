import React from 'react';
import { ImageTag } from './AboveTheFold';
import Link from 'next/link';

export interface ServiceItem {
    title: string;
    subtitle: string;
    href?: string;
    image: ImageTag;
}

interface ServicesProps {
    title: string;
    subtitle: string;
    list: ServiceItem[];
}

const Services = ({ props }: { props: ServicesProps }) => {
    return (
        <section className="bg-white pt-14 dark:bg-gray-black lg:pt-20">
            <div className="container">
                <div className="heading text-center">
                    <h4 className="!text-secondary font-playfair">{props.title}</h4>
                    <h6 className="mt-2 font-raleway !font-medium mx-auto max-w-[707px] !text-gray dark:!text-white">{props.subtitle}</h6>
                </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
                {props.list.map((item) => {
                    return (
                        <div className="group" key={item.image.src} data-aos='fade-up' data-aos-duration="1000">
                            <div className="relative overflow-hidden">
                                <Link href={item.href ? item.href : '/'}>
                                    <img
                                        src={`/assets/images/${item.image.src}`}
                                        alt={item.image.alt}
                                        title={item.image.title}
                                        className="w-full duration-200 group-hover:rotate-2 group-hover:scale-110"
                                    />
                                </Link>
                            </div>
                            <div className="space-y-2.5 p-3 text-center lg:text-left sm:p-5 ltr:sm:text-left rtl:sm:text-right">
                                <Link
                                    href={item.href ? item.href : '/'}
                                    className="font-raleway text-lg font-bold text-center md:text-left text-black duration-200 group-hover:text-secondary dark:text-white dark:group-hover:text-secondary md:text-2xl"
                                >
                                    {item.title}
                                </Link>
                                <p className="hidden text-base font-semibold md:flex">{item.subtitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Services;
